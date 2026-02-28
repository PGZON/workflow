import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [success, setSuccess] = useState(false);

  const startAnimation = () => {
    setSuccess(true);
    // Optional: Reset after a few seconds
    // setTimeout(() => setSuccess(false), 3000); 
  };

  const resetAnimation = () => {
    setSuccess(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Click the button below to see a success animation.
        </p>
        
        {!success ? (
          <button className="action-button" onClick={startAnimation}>
            Click for Success
          </button>
        ) : (
          <div className="success-container">
            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
              <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
              <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>
            <p>Attributes Processed Successfully!</p>
            <button className="action-button" onClick={resetAnimation}>
              Reset
            </button>
          </div>
        )}

      </header>
    </div>
  );
}

export default App;
