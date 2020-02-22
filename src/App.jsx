import React, { useState } from "react";
import "./styles/App.css";
import Break from "./components/Break";
import Session from "./components/Session";
import Timer from "./components/Timer";

function App() {
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [timerMinute, setTimerMinute] = useState(25);

  const onIncreaseBreakLength = () => {
    setBreakLength(breakLength + 1);
    setTimerMinute(breakLength + 1);
  };
  const onDecreaseBreakLength = () => {
    setBreakLength(breakLength - 1);
    setTimerMinute(breakLength - 1);
  };
  const onIncreaseSessionLength = () => {
    setSessionLength(sessionLength + 1);
    setTimerMinute(sessionLength + 1);
  };
  const onDecreaseSessionLength = () => {
    setSessionLength(sessionLength - 1);
    setTimerMinute(sessionLength - 1);
  };
  const onUpdateTimerMinute = () => {
    setTimerMinute(timerMinute - 1);
  };
  const onToggleInterval = isSession => {
    if (isSession) {
      setTimerMinute(breakLength - 1);
    } else setTimerMinute(sessionLength);
  };
  const onReset = isSession => {
      setTimerMinute(25);
  };
  return (
    <div className="page">
      <div className="title">
        <h1>Pomodoro Timer</h1>
      </div>
      <div className="card">
        <Timer
          timerMinute={timerMinute}
          breakLength={breakLength}
          updateTimerMinute={onUpdateTimerMinute}
          toggleInterval={onToggleInterval}
          reset={onReset}
        />
        <div className="white-card">
          <div className="interval-length-container">
            <Session
              sessionLength={sessionLength}
              increaseSession={onIncreaseSessionLength}
              decreaseSession={onDecreaseSessionLength}
            />
            <Break
              breakLength={breakLength}
              increaseBreak={onIncreaseBreakLength}
              decreaseBreak={onDecreaseBreakLength}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
