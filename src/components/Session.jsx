import React from "react";

function Session(props) {
  const decreaseSession = () => {
    if (props.sessionLength === 1) {
      return;
    }
    props.decreaseSession();
  };
  const increaseSession = () => {
    if (props.sessionLength === 60) {
      return;
    }
    props.increaseSession();
  };
  return (
    <div>
      <p className="length-content">Session Length</p>
      <div className="interval-container">
        <button className="btn" onClick={increaseSession}>
          <img
            className="img"
            src={`https://image.flaticon.com/icons/svg/271/271237.svg`}
            alt=""
          />
        </button>
        <p className="interval-length">{props.sessionLength}</p>
        <button className="btn" onClick={decreaseSession}>
          <img className="img"
            src={`https://image.flaticon.com/icons/svg/271/271237.svg`}
            alt=""
          />
        </button>
      </div>
    </div>
  );
}
export default Session;
