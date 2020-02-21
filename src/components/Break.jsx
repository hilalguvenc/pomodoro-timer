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
      <p className="length-content">Break Length</p>
      <div className="interval-container">
        <button className="btn" onClick={increaseCounter}>
          {/* <img
          
          src={`https://image.flaticon.com/icons/svg/271/271237.svg`}
          alt=""
        /> */}
          up
        </button>
        <p className="interval-length">{props.breakLength}</p>
        <button className="btn" onClick={decreaseCounter}>
          {/* <img
          src={`https://image.flaticon.com/icons/svg/271/271237.svg`}
          alt=""
        /> */}
          down
        </button>
      </div>
    </div>
  );
}
export default Break;
