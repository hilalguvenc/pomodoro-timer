import React from "react";

function Session(props) {
  return (
    <div>
      <p className="session-length">Session Length</p>
      <button className="session-up">
        <img src={`https://image.flaticon.com/icons/svg/271/271237.svg`} />
      </button>
      <p className="fifty-five">{props.session}</p>
      <button className="session-down">
        <img src={`https://image.flaticon.com/icons/svg/271/271237.svg`} />
      </button>
    </div>
  );
}
export default Session;
