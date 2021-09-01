import React from "react";
import Home from "../Home/Home";
import AboutSummary from "../AboutSummary/AboutSummary";
import ResearchLanding from "../ResearchLanding/ResearchLanding";
import Navbar from "../Navbar/Navbar";
function Landing() {
  return (
    <div className="landing">
      <Home />
      <AboutSummary />
      <ResearchLanding />
    </div>
  );
}

export default Landing;
