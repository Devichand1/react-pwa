import React from 'react';
import './App.css';

 export default function App() {
  const handleNotification = () => {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        new Notification('Hi there! Test Notification', {
          body: 'This is a dummy notification',
          icon: 'https://cdn.iconscout.com/icon/free/png-256/notification-2-1175416.png'
        });
      }
    }
    )
  }
  return (
    <div className="App">
        <button className='btn' onClick={handleNotification} >Send Custom notification</button>

    </div>
  );
}
