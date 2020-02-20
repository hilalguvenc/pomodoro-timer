import React, { useState, useEffect } from "react";

function Timer(props) {
  const [isSession, setIsSession] = useState(true);
  const [timerSecond, setTimerSecond] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        switch (timerSecond) {
          case 0:
            if (props.timerMinute === 0) {
              if (isSession) {
                setIsSession(!isSession);
                props.toggleInterval(isSession);
                setTimerSecond(59);
              }
            } else {
              setIsSession(isSession);
              props.toggleInterval(isSession);
              setTimerSecond(59);
              props.updateTimerMinute();
            }
            break;
          default:
            setTimerSecond(timerSecond - 1);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, isActive[timerSecond]);

  const reset = () => {
    props.reset();
    setTimerSecond(0);
  };
  return (
    <div>
      <h4 className="session">{isSession === true ? "Session" : "Break"}</h4>
      <div className="timer">
        <span>{props.timerMinute}</span>
        <span>:</span>
        <span>
          {timerSecond === 0
            ? "00"
            : timerSecond < 10
            ? "0" + timerSecond
            : timerSecond}
        </span>
      </div>
      <div className="wrapper">
        <button onClick={toggle} className="start">
          Start
        </button>
        <img
          className="start-icon"
          src={`https://image.flaticon.com/icons/svg/254/254434.svg`}
          alt=""
        />
        <button onClick={reset} className="reset">
          Reset
        </button>
        <img
          className="reset-icon"
          src={`https://img.icons8.com/ios-filled/2x/recurring-appointment.png`}
          alt=""
        />
      </div>
    </div>
  );
}
export default Timer;
