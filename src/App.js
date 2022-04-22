import React, {useState} from 'react';

import './App.css';
import { sendNotification } from './service/Notification';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
 const App=()=> { 
      const [isLoactionLoaded, setisLoactionLoaded] = useState()
  const handleNotification = () => {

    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        // new Notification('Hi there! Test Notification', {
        //     "body": "Did you make a $1,000,000 purchase at Dr. Evil...",
        //     "vibrate": [200, 100, 200, 100, 200, 100, 400],
        //     "tag": "request",
        //     "actions": [
        //     { "action": "yes", "title": "Yes", "icon": "images/yes.png" },
        //     { "action": "no", "title": "No", "icon": "images/no.png" }
        //     ],
        //   icon: 'https://cdn.iconscout.com/icon/free/png-256/notification-2-1175416.png'
        // });
        sendNotification("Did you make a $1,000,000 purchase at Dr. Evil..", "Test Notification")
      }
    }
    )

    serviceWorkerRegistration.showNotification('Test Notification')
  }

const handleGetLocation=()=>{
navigator.geolocation.getCurrentPosition((data) => {
console.log("loca",data);
setisLoactionLoaded(data)
})
}
  return (
    <div className="App">
        <button className='btn' onClick={handleNotification} >Send Custom notification (PWA)</button>
        <button className='btn' onClick={handleGetLocation} >Get Location</button>
{
  isLoactionLoaded ?<p>Your current location is (Latitude: {isLoactionLoaded.coords.latitude} ,Longitude: {isLoactionLoaded.coords.longitude} )</p>: null
}
    </div>
  );
}

export default App;
