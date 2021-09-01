import React from 'react'
import {Container, Navbar, Nav} from 'react-bootstrap'
import './Navbar.css'
function NavBar() {
    return (
        <div>
        <Navbar expand="lg" className="navbar">
            <Container>
            <Navbar.Brand href="/">
            <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            />{' '}
            Rhythm</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/research">Research</Nav.Link>
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavBar
