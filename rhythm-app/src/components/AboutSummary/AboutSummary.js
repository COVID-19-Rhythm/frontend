import React from "react";
import { Link } from "react-router-dom";
import "./aboutSummary.css";

function AboutSummary() {
  return (
    <div>
      <div className="summaryParent">
        <h1 className="abtsum-title">Meet Rhythm</h1>
        <p>Healthcare while you sleep</p>
        <p>
          Predict COVID-19 before any symptoms appear
        </p>
        <button>{<Link to="/about">About</Link>}</button>
      </div>
    </div>
  );
}

export default AboutSummary;
