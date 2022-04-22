import React from 'react';
import logo from './logo.svg';
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={handleNotification} >Send Custom notification</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
