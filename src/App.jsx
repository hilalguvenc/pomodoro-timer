import React, { useState } from "react";
import "./App.css";
import Break from "./components/Break";
import Session from "./components/Session";

function App() {
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);

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
          <Session session={sessionLength} />
          <Break break={breakLength} />
        </div>
      </div>
    </div>
  );
}

export default App;
