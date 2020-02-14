import React from "react";
import "./App.css";

function App() {
  return (
    <div className="page">
      <div className="title">
        <h1>Pomodoro Timer</h1>
      </div>
      <div className="card">
        <h2 className="session">Session</h2>
        <h1 className="clock">saat</h1>
        <div className="wrapper">
          <button className="start">Start</button>
          <img
            className="start-icon"
            src={`https://image.flaticon.com/icons/svg/254/254434.svg`}
          />
          <button className="reset">Reset</button>
          <img
            className="reset-icon"
            src={`https://img.icons8.com/ios-filled/2x/recurring-appointment.png`}
          />
        </div>
        <div className="white-card">
          <p className="session-length">Session Length</p>
          <img
            className="up-arrow"
            src={`https://img.icons8.com/material-rounded/24/000000/circled-up.png`}
          />
          <img
            className="down-arrow"
            src={`https://img.icons8.com/material-rounded/24/000000/circled-up.png`}
          />
          <p className="break-length">Break Length</p>
          <img
            className="up-arrow-1"
            src={`https://img.icons8.com/material-rounded/24/000000/circled-up.png`}
          />
          <img
            className="down-arrow-2"
            src={`https://img.icons8.com/material-rounded/24/000000/circled-up.png`}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
