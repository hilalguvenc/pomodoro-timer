import React from "react";

function Break(props) {
  return (
    <div>
      <p className="break-length">Break Length</p>
      <button className="break-up">
        <img src={`https://image.flaticon.com/icons/svg/271/271237.svg`} />
      </button>
      <p className="five">{props.break}</p>
      <button className="break-down">
        <img src={`https://image.flaticon.com/icons/svg/271/271237.svg`} />
      </button>
    </div>
  );
}
export default Break;
