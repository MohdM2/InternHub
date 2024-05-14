import "./Progressbar.css";
import { useState } from "react";
export default function Progressbar({ progress }) {
  function setColor() {
    if (progress < 25) return "red";
    else if (progress < 50) return "orange";
    else if (progress < 75) return "yellow";
    else return "green";
  }

  return (
    <div className="pb-container">
      <div className="pb-progress-bar">
        <div
          className="pb-progress-bar-fill"
          style={{ width: `${progress}%`, backgroundColor: setColor() }}
        ></div>
      </div>
      <div
        className="pb-progress-label"
        style={{
          marginLeft: `${progress}%`,
          display: progress !== 100 ? "block" : "none",
        }}
      >
        {progress}%
      </div>
    </div>
  );
}
