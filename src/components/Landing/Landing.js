import React from "react";
import Home from "../Home/Home";
import AboutSummary from "../AboutSummary/AboutSummary";
import ResearchLanding from "../ResearchLanding/ResearchLanding";
import "./landing.css";
function Landing() {
  //this is the landing
  return (
    <div className="landing-main">
      <Home />
      <AboutSummary />
      <ResearchLanding />
    </div>
  );
}

export default Landing;
