import React, { useState } from "react";
import "./App.css";
import Break from "./components/Break";
import Session from "./components/Session";
import Timer from "./components/Timer";

function App() {
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [timerMinute, setTimerMinute] = useState(25);

  const onIncreaseBreakLength = () => {
    setBreakLength(breakLength + 1);
  };
  const onDecreaseBreakLength = () => {
    setBreakLength(breakLength - 1);
  };
  const onDecreaseSessionLength = () => {
    setSessionLength(sessionLength + 1);
    setTimerMinute(sessionLength - 1);
  };
  const onIncreaseSessionLength = () => {
    setSessionLength(sessionLength - 1);
    setTimerMinute(sessionLength + 1);
  };

  return (
    <div className="page">
      <div className="title">
        <h1>Pomodoro Timer</h1>
      </div>
      <div className="card">
        <Timer timerMinute={timerMinute} />
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
          <Session
            session={sessionLength}
            increaseSession={onIncreaseSessionLength}
            decreaseSession={onDecreaseSessionLength}
          />
          <Break
            break={breakLength}
            increaseBreak={onIncreaseBreakLength}
            decreaseBreak={onDecreaseBreakLength}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
