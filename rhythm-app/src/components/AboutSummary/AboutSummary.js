import React from "react";
import { Link } from "react-router-dom";
import "./aboutSummary.css";
import watchbetter from "../images/watch_better.png";
import phone from "../images/iphonegold.png";

function AboutSummary() {
  return (
    <div className="summaryParent">
      {/* <div>{image}</div> */}
      {/* <Particles/> */}
      <h1 className="abtsum-title">Meet Vito</h1>
      <div className="row-group">
        <div className="summary">
          <p>Predict COVID-19 before any symptoms appear</p>
          <a href="/about">
            <button className="about-btn" to="/about">
              {<Link to="/about"></Link>}Learn More
            </button>
          </a>
          {/* <button class="about-btn" to="/about">{<Link to="/about"></Link>}Learn More</button> */}
        </div>
        <div className="watch-container">
          <img src={watchbetter} alt="wdfsdfsf" />
        </div>
        <div className="phone-container">
          <img src={phone} alt="phone" />
        </div>
      </div>
    </div>
  );
}

export default AboutSummary;
