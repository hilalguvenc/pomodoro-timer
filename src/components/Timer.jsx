import React, { useState } from "react";

function Timer() {
  const [isSession, setIsSession] = useState(true);
  return (
    <div>
      <h4>{isSession === true ? "Session" : "Break"}</h4>
    </div>
  );
}
export default Timer;
