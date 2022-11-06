import React, { useState, useEffect } from "react";
function DigitalClock() {
  const [myTime, getMytime] = useState("");
  const tick = () => {
    let time =
      new Date().getHours() +
      ":" +
      new Date().getMinutes() +
      ":" +
      new Date().getSeconds();
    getMytime(time);
  };
  useEffect(() => {
    const t = setInterval(tick, 1000);
    return () => {
      clearInterval(t);
    };
  }, [myTime]);

  return (
    <div>
      <h1>DC</h1>
      <h1>{myTime}</h1>
    </div>
  );
}
export default DigitalClock;
