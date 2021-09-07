import React from "react";
import "./about.css";
import { Row, Column, Container, Col, Image } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import testing from '../images/covid_testing.jpeg';
const aboutStyle = {
  container: {
    minWidth:"100vw",

  },
  row: {
    backgroundColor:"rgba(203, 194, 194, 0.42)",
    borderRadius:"25px",
    padding:"4em",
    minHeight:"80vh",
    margin:"2em"
  }
}
function About() {
  return (
    <div className="about-parent">
      <Container style={aboutStyle.container}>
        <Row style={aboutStyle.row}>
          <h1 className="header">Our Tech is open source and free to use for everyone!</h1>
          <br/>
          <Col>
          <p>
          Our mission is to make COVID testing easier to and more widely available. 
          </p>
          </Col>
          
          <Col>
          <Image src={testing} alt="covid test" className="image-test"/>
          </Col>
        </Row>
        <Row style={aboutStyle.row}>
          <h1>Our Tech is open source and free to use for everyone!</h1>
          <br/>
          <Col>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          </Col>
          
          <Col>
          {/* <Image></Image> */}
          </Col>
        </Row>
        
      </Container>
    </div>
  );
}

export default About;
