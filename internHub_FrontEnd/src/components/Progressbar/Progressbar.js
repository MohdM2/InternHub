import "./Progressbar.css";
import { useState } from "react";
export default function Progressbar({ progress }) {
  function setColor() {
    if (progress < 33) return "red";
    else if (progress < 66) return "yellow";
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
      <div className="pb-progress-label" style={{ marginLeft: `${progress}%` }}>
        {progress}%
      </div>
    </div>
  );
}
