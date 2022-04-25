import React, { useState, useEffect, useRef } from "react";

import "./App.css";
import { sendNotification } from "./service/Notification";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
const App = () => {
  const [isLoactionLoaded, setisLoactionLoaded] = useState();
  const videoref =useRef()
  const [otp, setotp] = useState()
  useEffect(() => {
    if ("OTPCredential" in window) {
      const ac = new AbortController();
    
      navigator.credentials
        .get({
          otp: { transport: ["sms"] },
          signal: ac.signal
        })
        .then((otp) => {
          setotp(otp.code)
          ac.abort();
        })
        .catch((err) => {
          ac.abort();
          console.log(err);
        });
    }
  }, [])
  const handleNotification = () => {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        sendNotification(
          "Did you make a $1,000,000 purchase at Dr. Evil..",
          "Test Notification"
        );
      }
    });

    serviceWorkerRegistration.showNotification("Test Notification");
  };

  const handleGetLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (data) => {
        console.log("loca", data);
        setisLoactionLoaded(data);
      },
      (error) => {
        console.log("error", error, error.message);
      }
    );
  };

  function locationError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        return "User denied the request for geolocation.";
      case error.POSITION_UNAVAILABLE:
        return "Location information is currently unavailable.";
      case error.TIMEOUT:
        return "Request for user location timed out.";
      case error.UNKNOWN_ERROR:
        return "An unknown error occurred.";
    }
  }
  const accessCamera=async()=>{
     const stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: true
    })
    const videoTracks = stream.getVideoTracks();
    const track = videoTracks[0];

    alert(`Getting video from: ${track.label}`)

    // videoref.current = stream;
  }
  const handleVibrate=()=>{
    navigator.vibrate(1000)
  }
  return (
    <div className="App">
      <button className="btn" onClick={handleNotification}>
        Send Custom notification (PWA)
      </button>
      <button className="btn" onClick={handleGetLocation}>
        Get Location
      </button>
      {isLoactionLoaded ? (
        <p>
          Your current location is (Latitude: {isLoactionLoaded.coords.latitude}{" "}
          ,Longitude: {isLoactionLoaded.coords.longitude} )
        </p>
      ) : null}
      <p>OTP is {otp}</p>
      <button className="btn" onClick={handleVibrate}>
        Vibrate
      </button>
         </div>
  );
};

export default App;
