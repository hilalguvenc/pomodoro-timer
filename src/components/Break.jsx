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
      <button onClick={increaseCounter}>
        {/* <img
          className="break-up"
          src={`https://image.flaticon.com/icons/svg/271/271237.svg`}
        /> */}
        up
      </button>
      <p className="five">{props.break}</p>
      <button onClick={decreaseCounter}>
        {/* <img
          className="break-down"
          src={`https://image.flaticon.com/icons/svg/271/271237.svg`}
        /> */}
        down
      </button>
    </div>
  );
}
export default Break;
