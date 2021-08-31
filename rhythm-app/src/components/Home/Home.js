import React from "react";
import logo from "../images/logo3.png";
import phone from "../images/phone2.png";
import "./home.css";

function Home() {
  return (
    <div>
      <div className="background">
        <div className="background2">
          <div className="orientation">
            <div className="logo">
              <img src={logo} alt="logo" className="logoImage" />
            </div>
            <h1>Detect COVID With Your Heart Rate</h1>
          </div>
        </div>
        <div className="phoneStyleParent">
          <img src={phone} alt="phone" className="phoneStyle" />
        </div>
      </div>
    </div>
  );
}

export default Home;
