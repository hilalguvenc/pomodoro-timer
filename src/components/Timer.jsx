import React, { useState } from "react";

function Timer(props) {
  const [isSession, setIsSession] = useState(true);
  const [timerSecond, setTimerSecond] = useState(0);
  const [intervalId, setIntervalId] = useState(0);

  const decreaseTimer = () => {
    switch (timerSecond) {
      case 0:
        if (props.timerMinute === 0) {
          if (isSession) {
            setIsSession({ isSession: false });
            props.toggleInterval(isSession);
          } else {
            setIsSession({ isSession: true });
            props.toggleInterval(isSession);
          }
        }
        props.updateTimerMinute();
        setTimerSecond({ timerSecond: 59 });
        break;
      default:
        setTimerSecond(prevState=> {
          return {
            timersecond: prevState.timerSecond - 1
          };
        });
    }
  };
  const start = () => {
    let intervalId = setInterval(decreaseTimer, 1000);
    setIntervalId({ intervalId: intervalId });
  };

  const reset = () => {
    clearInterval(intervalId);
    props.reset();
    setTimerSecond({ timerSecond: 0 });
  };
  return (
    <div>
      <h4>{isSession === true ? "Session" : "Break"}</h4>
      <span>{props.timerMinute}</span>
      <span>:</span>
      <span>
        {timerSecond === 0
          ? "00"
          : timerSecond< 10
          ? "0" + timerSecond
          : timerSecond}
      </span>
      <div className="wrapper">
        <button onClick={start} className="start">
          Start
        </button>
        <img
          className="start-icon"
          src={`https://image.flaticon.com/icons/svg/254/254434.svg`}
        />
        <button onClick={reset} className="reset">
          Reset
        </button>
        <img
          className="reset-icon"
          src={`https://img.icons8.com/ios-filled/2x/recurring-appointment.png`}
        />
      </div>
    </div>
  );
}
export default Timer;
