import React from "react";
import "./researchlanding.css";
import { Link } from "react-router-dom";
import other from "../images/other.png";

function ResearchLanding() {
  return (
    <div className="researchlandingparent">
      <img src={other} alt="dashboard" className="dashboardImage" />
      <div className="researchLandingParagraph">
        <div className="researchLandingParagraph2">
          <p>
            Based on research supported by Stanford and Mount Sinai Hospital in
            New York City, Rhythm was created by students, engineers and avid
            researchers.
          </p>
          <p>
            To bridge the digital divide between disease detection and
            technology, Rhythm detects COVID-19 in asymptomatic patients days
            before symptoms have onset.
          </p>
          <button className="researchButton">
            {
              <Link className="researchButtonlink" to="/research">
                Current Research
              </Link>
            }
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResearchLanding;
