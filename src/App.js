import React, { useState, useEffect, useRef } from "react";

import handleGetLocation from "./service/geoLocation";
import sendNotification from "./service/notification";
import handleVibrate from "./service/vibrate";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import "./App.css";

const App = () => {
  const [isLoactionLoaded, setisLoactionLoaded] = useState();
  const [isContactSupported] = useState(null);
  const [otp, setOTP] = useState();

  useEffect(() => {
    if ("OTPCredential" in window) {
      const ac = new AbortController();
      navigator.credentials
        .get({
          otp: { transport: ["sms"] },
          signal: ac.signal,
        })
        .then((otp) => {
          setOTP(otp.code);
          ac.abort();
        })
        .catch((err) => {
          ac.abort();
          console.log(err);
        });
    }
  }, []);

  const handleNotification = () => {
    //from browser
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        sendNotification(
          "Did you make a $1,000,000 purchase at Dr. Evil..",
          "Test Notification"
        );
      }
    });
    // from PWA
    serviceWorkerRegistration.showNotification("Test Notification");
  };


  const getContactList = () => {
    const supported = "contacts" in navigator && "ContactsManager" in window;
    var contactsManager = navigator.canShare;

    console.log("supported", supported, contactsManager);
  };

  return (
    <div className="App">
      <button className="btn" onClick={handleNotification}>
        Send Custom notification (PWA)
      </button>
      <button
        className="btn"
        onClick={() => handleGetLocation(setisLoactionLoaded)}
      >
        Get Location
      </button>
      {isLoactionLoaded ? (
        <p>
          Your current location is (Latitude: {isLoactionLoaded.coords.latitude}{" "}
          ,Longitude: {isLoactionLoaded.coords.longitude} )
        </p>
      ) : null}

      <button disabled className="btn" onClick={handleVibrate}>
        Reading Otp ( only in chrome android )
      </button>
      <button className="btn" onClick={handleVibrate}>
        Vibrate (only Mobile)
      </button>
      <button className="btn" onClick={getContactList}>
        see contact list
      </button>
      {isContactSupported === false ? <p>show contact list here</p> : null}
    </div>
  );
};

export default App;
