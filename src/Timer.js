import React from "react";
function Timer(props) {
  const totalMiliSecond = props.miliSeconds;
  var secondsInSeconds = Math.floor(totalMiliSecond / 1000);
  var hours = Math.floor(secondsInSeconds / 3600);
  var minutes = Math.floor((secondsInSeconds - hours * 3600) / 60);
  var seconds = secondsInSeconds - hours * 3600 - minutes * 60;
  console.log(seconds);
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return (
    <div className="block">
      <div className="container">
        <div className="digits">
          {hours}:{minutes}:{seconds}
        </div>
        <div className="time-text">
          <div className="time-text-item">Hour</div>
          <div className="time-text-item">Minute</div>
          <div className="time-text-item">Second</div>
        </div>
      </div>
    </div>
  );
}
export default Timer;
