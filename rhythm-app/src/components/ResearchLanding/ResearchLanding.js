import React from "react";
import "./researchlanding.css";
import { Link } from "react-router-dom";
import other from "../images/stanford.png";

function ResearchLanding() {
  return (
    <div className="researchlandingparent">
      <div className="researchLandingParagraph">
        <div className="researchLandingParagraph2">
          <img src={other} alt="stanford" className="stanfordimage" />
          <p>
            Learn more about the Stanford study that made it all possible...
          </p>

          <Link className="researchButtonlink" to="/research">
            {<button className="researchButton">Explore the Research</button>}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ResearchLanding;
