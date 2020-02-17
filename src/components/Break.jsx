import React from "react";

function Break(props) {
  const decreaseCounter = () => {
    if (props.break === 1) {
      return;
    }
    props.decreaseBreak();
  };
  const increaseCounter = () => {
    if (props.break === 60) {
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
        />
      </button>
      <p className="five">{props.break}</p>
      <button className="breakdown-btn" onClick={decreaseCounter}>
        <img
          className="break-down"
          src={`https://image.flaticon.com/icons/svg/271/271237.svg`}
        />
      </button>
    </div>
  );
}
export default Break;
