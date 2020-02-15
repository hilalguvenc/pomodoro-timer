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
            src={`https://image.flaticon.com/icons/svg/271/271237.svg`}
          />
          <h1 className="fifty-five">25</h1>
          <img
            className="down-arrow"
            src={`https://image.flaticon.com/icons/svg/271/271237.svg`}
          />
          <p className="break-length">Break Length</p>
          <img
            className="up-arrow1"
            src={`https://image.flaticon.com/icons/svg/271/271237.svg`}
          />
          <h1 className="five">5</h1>
          <img
            className="down-arrow1"
            src={`https://image.flaticon.com/icons/svg/271/271237.svg`}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
