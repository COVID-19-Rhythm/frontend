import React from "react";
import { Link } from "react-router-dom";
import "./aboutSummary.css";

function AboutSummary() {
  return (
    <div>
      <div className="summaryParent">
        <h1>Rhythm</h1>
        <p>Healthcare while you sleep</p>
        <p>
          Rhythm tracks your heart rate while you sleep. Through pattern
          analysis, Rhythm can detect if you have COVID-19
        </p>
        <button>{<Link to="/about">About</Link>}</button>
      </div>
    </div>
  );
}

export default AboutSummary;
