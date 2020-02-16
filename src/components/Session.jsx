import React from "react";

function Session(props) {
  return (
    <div>
      <p className="session-length">Session Length</p>
      <button className="sessionup-btn">
        {/* <img
          className="session-up"
          src={`https://image.flaticon.com/icons/svg/271/271237.svg`}
        /> */}
        up
      </button>
      <p className="fifty-five">{props.session}</p>
      <button className="sessiondown-btn">
        {/* <img
          className="session-down"
          src={`https://image.flaticon.com/icons/svg/271/271237.svg`}
        /> */}
        down
      </button>
    </div>
  );
}
export default Session;
