import React from "react";

function Session(props) {
  const decreaseSession = () => {
    if (props.break === 1) {
      return;
    }
    props.decreaseSession();
  };
  const increaseSession = () => {
    if (props.break === 60) {
      return;
    }
    props.increaseSession();
  };

  return (
    <div>
      <p className="session-length">Session Length</p>
      <button className="sessionup-btn" onClick={props.increaseSession}>
        <img
          className="session-up"
          src={`https://image.flaticon.com/icons/svg/271/271237.svg`}
        />
      </button>
      <p className="fifty-five">{props.session}</p>
      <button className="sessiondown-btn" onClick={props.decreaseSession}>
        <img
          className="session-down"
          src={`https://image.flaticon.com/icons/svg/271/271237.svg`}
        />
      </button>
    </div>
  );
}
export default Session;
