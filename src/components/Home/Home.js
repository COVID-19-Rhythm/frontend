import React from "react";
import "./home.css";
import Particles from "react-particles-js";
function Home() {
  return (
    <div>
      <div className="background">
        <div className="background2">
          <div className="orientation">
            <div className="logo">
              {/* <img src={logo} alt="logo" className="logoImage" /> */}
            </div>
            <br />
            <h1 className="home-text">
              Detect COVID-19
              <br /> with your Heart Rate{" "}
            </h1>
          </div>
        </div>
        <div></div>
        <Particles />
      </div>
    </div>
  );
}

export default Home;
