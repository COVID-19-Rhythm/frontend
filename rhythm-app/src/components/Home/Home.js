import React from "react";
import logo from "../images/logo.png";
import "./home.css";

function Home() {
  return (
    <div className="background">
      <div className="background2">
        <div className="orientation">
          <div className="logo">
            <h4>Rhythm</h4>
            <img src={logo} alt="logo" className="logoImage" />
          </div>
          <h1>Detect COVID With Your Heart Rate</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
