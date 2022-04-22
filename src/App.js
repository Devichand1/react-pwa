import React from 'react';
import './App.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
 export default function App() {
  const handleNotification = () => {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        new Notification('Hi there! Test Notification', {
            "body": "Did you make a $1,000,000 purchase at Dr. Evil...",
            "vibrate": [200, 100, 200, 100, 200, 100, 400],
            "tag": "request",
            "actions": [
            { "action": "yes", "title": "Yes", "icon": "images/yes.png" },
            { "action": "no", "title": "No", "icon": "images/no.png" }
            ],
          icon: 'https://cdn.iconscout.com/icon/free/png-256/notification-2-1175416.png'
        });
      }
    }
    )
    serviceWorkerRegistration.showNotification('Test Notification')
  }
  return (
    <div className="App">
        <button className='btn' onClick={handleNotification} >Send Custom notification (PWA)</button>

    </div>
  );
}
