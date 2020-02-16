import React, { useState } from "react";

function Timer(props) {
  const [isSession, setIsSession] = useState(true);
  const [timerSecond, setTimerSecond] = useState(0);
  return (
    <div>
      <h4>{isSession === true ? "Session" : "Break"}</h4>
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
  );
}
export default Timer;
