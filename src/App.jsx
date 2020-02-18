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
    setBreakLength(prevState => {
      return {
        breakLength: prevState.breakLength + 1
      };
    });
  };
  const onDecreaseBreakLength = () => {
    setBreakLength(prevState => {
      return {
        breakLength: prevState.breakLength - 1
      };
    });
  };
  const onIncreaseSessionLength = () => {
    setSessionLength(prevState => {
      return {
        sessionLength: prevState.sessionLength + 1,
        timerMinute: prevState.sessionLength + 1
      };
    });
  };
  const onDecreaseSessionLength = () => {
    setSessionLength(prevState => {
      return {
        sessionLength: prevState.breakLength - 1,
        timerMinute: prevState.sessionLength - 1
      };
    });
  };
  const onUpdateTimerMinute = () => {
    setTimerMinute(prevState => {
      return {
        timerMinute: prevState.timerMinute - 1
      };
    });
  };
  const onToggleInterval = isSession => {
    if (isSession) {
      setTimerMinute({ timerMinute: sessionLength });
    } else setTimerMinute({ timerMinute: breakLength });
  };
  const onReset = () => {
    setTimerMinute({ timerMinute: sessionLength });
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
  );
}

export default App;
