import React from "react";

function Break(props) {
  const decreaseCounter = () => {
    if (props.breakLength === 1) {
      return;
    }
    props.decreaseBreak();
  };
  const increaseCounter = () => {
    if (props.breakLength === 60) {
      return;
    }
    props.increaseBreak();
  };
  return (
    <div>
      <p className="break-length">Break Length</p>
      <button className="breakup-btn" onClick={increaseCounter}>
        <img
          className="break-up"
          src={`https://image.flaticon.com/icons/svg/271/271237.svg`}
          alt=""
        />
      </button>
      <p className="five">{props.breakLength}</p>
      <button className="breakdown-btn" onClick={decreaseCounter}>
        <img
          className="break-down"
          src={`https://image.flaticon.com/icons/svg/271/271237.svg`}
          alt=""
        />
      </button>
    </div>
  );
}
export default Break;
