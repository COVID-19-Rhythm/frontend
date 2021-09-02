import React from "react";
import { Link } from "react-router-dom";
import "./aboutSummary.css";

function AboutSummary() {
  return (
    <div>
      <div className="summaryParent">
        <h1 className="abtsum-title">Meet Rhythm</h1>

        <p>
          Predict COVID-19 before any symptoms appear
        </p>
        <a href="/about">
        <button class="about-btn" to="/about">{<Link to="/about"></Link>}Learn More</button>
        </a>
        {/* <button class="about-btn" to="/about">{<Link to="/about"></Link>}Learn More</button> */}
      </div>
      <div className="watch-container">
        
      </div>
      <div className="phone-container">
            
      </div>
    </div>
  );
}

export default AboutSummary;
