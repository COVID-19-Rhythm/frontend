import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./Navbar.css";
import bird2 from "../images/bird2.png";
const NavbarStyles = {
  navlink: {
    color: "white",
    margin: "1rem",
  },
};
function NavBar() {
  return (
    <div>
      <Navbar expand="lg" className="navbar" fixed="top">
        <Navbar.Brand href="/">
          <img src={bird2} alt="logo" className="navBird" />
        </Navbar.Brand>
        <Container className="nav-container">
          <div>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/about" style={NavbarStyles.navlink}>
                  About
                </Nav.Link>
                <Nav.Link href="/research" style={NavbarStyles.navlink}>
                  Research
                </Nav.Link>
                <Nav.Link href="/contact" style={NavbarStyles.navlink}>
                  Contact
                </Nav.Link>
                {/* <Nav.Link href="/dashboard" style={NavbarStyles.navlink}>
                  Dashboard
                </Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
