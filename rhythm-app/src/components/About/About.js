import React from "react";
import "./about.css";
import { Row, Column, Container, Col, Image } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import testing from "../images/microbiology.jpg";
const aboutStyle = {
  container: {
    minWidth: "100vw",
  },
  row: {
    backgroundColor: "rgba(203, 194, 194, 0.42)",
    borderRadius: "25px",
    padding: "4em",
    minHeight: "80vh",
    margin: "2em",
  },
};
function About() {
  return (
    <div className="about-parent">
      <Container style={aboutStyle.container}>
        <Row style={aboutStyle.row}>
          <h1 className="header">Inspiration</h1>
          <br />
          <Col>
            <p>
              We strive to provide easier and faster ways to test for COVID-19
              that will keep people safer and healthier.
            </p>
            <p>
              Vito is built to help people get more insight into their
              personal well being and help individuals keep their communities
              safe.
            </p>
          </Col>
        </Row>
        <Row style={aboutStyle.row}>
          <br />
          <Col style={{ width: "60%" }}>
            {/* <p>
          Our technology is completely free for anyone to use.
          </p> */}
            <h1 className="header">Free and Open Source for everyone!</h1>
          </Col>

          <Col style={{ width: "40%" }}>
            <Image src={testing} alt="covid test" className="image-test" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
