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
      <p className="session-length">Session Length</p>
      <button className="sessionup-btn" onClick={increaseSession}>
        <img
          className="session-up"
          src={`https://image.flaticon.com/icons/svg/271/271237.svg`}
          alt=""
        />
      </button>
      <p className="fifty-five">{props.sessionLength}</p>
      <button className="sessiondown-btn" onClick={decreaseSession}>
        <img
          className="session-down"
          src={`https://image.flaticon.com/icons/svg/271/271237.svg`}
          alt=""
        />
      </button>
    </div>
  );
}
export default Session;
