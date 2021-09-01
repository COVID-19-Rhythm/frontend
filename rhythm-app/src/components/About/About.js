import React from "react";
import "./about.css";
import { Row, Column, Container, Col, Image } from "react-bootstrap";
import NavBar from "../Navbar/Navbar";
function About() {
  return (
    <div className="about-parent">
      <Row>
        <Col className="col=md-6">
          <div>
            <p>
              Listen to the Rhythm of your heart.
              <br />
              Detect COVID-19 faster with the power of your Smartphone or
              Smartwatch.
            </p>
          </div>
        </Col>
        <Col>
          <Image></Image>
        </Col>
      </Row>
    </div>
  );
}

export default About;
