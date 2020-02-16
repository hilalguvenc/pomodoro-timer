import React from "react";

function Break(props) {
  return (
    <div>
      <p className="break-length">Break Length</p>
      <button className="breakup-btn">
        {/* <img
          className="break-up"
          src={`https://image.flaticon.com/icons/svg/271/271237.svg`}
        /> */}
        up
      </button>
      <p className="five">{props.break}</p>
      <button className="breakdown-btn">
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
