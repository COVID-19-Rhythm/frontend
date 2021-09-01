import React from 'react'
import {Container, Navbar, Nav} from 'react-bootstrap'
import './Navbar.css'
function NavBar() {
    return (
        <div>
        <Navbar expand="lg" className="navbar">
            <Container>
            <Navbar.Brand href="/">
            <svg width="333" height="113" viewBox="0 0 333 113" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M229.956 62.2937L171.747 62.0574L146.443 44.4566L125.4 111.602L108.948 1.41653L86.1962 85.5245L77.258 61.6737L2.45449 61.3699" stroke="url(#paint0_linear)" stroke-width="4" stroke-linecap="round"/> <path d="M37.812 102.574C37.8733 102.697 37.904 102.835 37.904 102.988C37.904 103.264 37.7967 103.509 37.582 103.724C37.398 103.908 37.168 104 36.892 104H26.45C26.0207 104 25.622 103.893 25.254 103.678C24.9167 103.463 24.6713 103.187 24.518 102.85L20.47 93.742H16.606V102.758C16.606 103.095 16.4833 103.387 16.238 103.632C15.9927 103.877 15.7013 104 15.364 104H5.428C5.09067 104 4.79933 103.877 4.554 103.632C4.30867 103.387 4.186 103.095 4.186 102.758V73.042C4.186 72.7047 4.30867 72.4133 4.554 72.168C4.79933 71.9227 5.09067 71.8 5.428 71.8H23.322C26.082 71.8 28.4893 72.2447 30.544 73.134C32.6293 74.0233 34.224 75.3113 35.328 76.998C36.432 78.6847 36.984 80.6627 36.984 82.932C36.984 87.1027 35.374 90.1233 32.154 91.994L37.812 102.574ZM22.356 85.232C23.0307 85.232 23.552 85.0173 23.92 84.588C24.288 84.128 24.472 83.5607 24.472 82.886C24.472 82.2113 24.288 81.6287 23.92 81.138C23.5827 80.6167 23.0613 80.356 22.356 80.356H16.606V85.232H22.356ZM73.95 71.8C74.2874 71.8 74.5787 71.9227 74.824 72.168C75.0694 72.4133 75.192 72.7047 75.192 73.042V102.758C75.192 103.095 75.0694 103.387 74.824 103.632C74.5787 103.877 74.2874 104 73.95 104H64.474C64.1367 104 63.8454 103.877 63.6 103.632C63.3547 103.387 63.232 103.095 63.232 102.758V92.96H54.032V102.758C54.032 103.095 53.9094 103.387 53.664 103.632C53.4187 103.877 53.1274 104 52.79 104H43.314C42.9767 104 42.6854 103.893 42.44 103.678C42.1947 103.433 42.072 103.126 42.072 102.758V73.042C42.072 72.7047 42.1947 72.4133 42.44 72.168C42.6854 71.9227 42.9767 71.8 43.314 71.8H52.79C53.1274 71.8 53.4187 71.9227 53.664 72.168C53.9094 72.4133 54.032 72.7047 54.032 73.042V82.472H63.232V73.042C63.232 72.7047 63.3547 72.4133 63.6 72.168C63.8454 71.9227 64.1367 71.8 64.474 71.8H73.95ZM114.55 71.8C114.826 71.8 115.056 71.9073 115.24 72.122C115.455 72.306 115.562 72.5207 115.562 72.766C115.562 72.95 115.516 73.134 115.424 73.318L103.832 92.5V102.758C103.832 103.095 103.709 103.387 103.464 103.632C103.219 103.877 102.927 104 102.59 104H92.7921C92.4547 104 92.1634 103.877 91.9181 103.632C91.6727 103.387 91.5501 103.095 91.5501 102.758V92.5L80.0041 73.318C79.9121 73.134 79.8661 72.9653 79.8661 72.812C79.8661 72.536 79.9581 72.306 80.1421 72.122C80.3567 71.9073 80.6021 71.8 80.8781 71.8H90.5841C91.4427 71.8 92.0714 72.1527 92.4701 72.858L97.6681 81.966L103.004 72.95C103.464 72.1833 104.108 71.8 104.936 71.8H114.55ZM152.666 71.8C153.003 71.8 153.295 71.9227 153.54 72.168C153.785 72.4133 153.908 72.7047 153.908 73.042V80.448C153.908 80.7853 153.785 81.0767 153.54 81.322C153.295 81.5673 153.003 81.69 152.666 81.69H142.776V102.758C142.776 103.095 142.653 103.387 142.408 103.632C142.163 103.877 141.871 104 141.534 104H132.058C131.721 104 131.429 103.877 131.184 103.632C130.939 103.387 130.816 103.095 130.816 102.758V81.69H120.926C120.589 81.69 120.297 81.5673 120.052 81.322C119.807 81.0767 119.684 80.7853 119.684 80.448V73.042C119.684 72.7047 119.807 72.4133 120.052 72.168C120.297 71.9227 120.589 71.8 120.926 71.8H152.666ZM191.196 71.8C191.533 71.8 191.825 71.9227 192.07 72.168C192.315 72.4133 192.438 72.7047 192.438 73.042V102.758C192.438 103.095 192.315 103.387 192.07 103.632C191.825 103.877 191.533 104 191.196 104H181.72C181.383 104 181.091 103.877 180.846 103.632C180.601 103.387 180.478 103.095 180.478 102.758V92.96H171.278V102.758C171.278 103.095 171.155 103.387 170.91 103.632C170.665 103.877 170.373 104 170.036 104H160.56C160.223 104 159.931 103.893 159.686 103.678C159.441 103.433 159.318 103.126 159.318 102.758V73.042C159.318 72.7047 159.441 72.4133 159.686 72.168C159.931 71.9227 160.223 71.8 160.56 71.8H170.036C170.373 71.8 170.665 71.9227 170.91 72.168C171.155 72.4133 171.278 72.7047 171.278 73.042V82.472H180.478V73.042C180.478 72.7047 180.601 72.4133 180.846 72.168C181.091 71.9227 181.383 71.8 181.72 71.8H191.196ZM220.986 73.042C221.446 72.214 222.105 71.8 222.964 71.8H231.382C231.719 71.8 232.011 71.9227 232.256 72.168C232.501 72.4133 232.624 72.7047 232.624 73.042V102.758C232.624 103.095 232.501 103.387 232.256 103.632C232.011 103.877 231.719 104 231.382 104H223.056C222.719 104 222.427 103.877 222.182 103.632C221.937 103.387 221.814 103.095 221.814 102.758V88.498L218.456 95.122C218.364 95.3367 218.149 95.582 217.812 95.858C217.475 96.134 217.045 96.272 216.524 96.272H213.396C212.875 96.272 212.445 96.134 212.108 95.858C211.771 95.582 211.556 95.3367 211.464 95.122L208.106 88.498V102.758C208.106 103.095 207.983 103.387 207.738 103.632C207.493 103.877 207.201 104 206.864 104H198.538C198.201 104 197.909 103.877 197.664 103.632C197.419 103.387 197.296 103.095 197.296 102.758V73.042C197.296 72.7047 197.419 72.4133 197.664 72.168C197.909 71.9227 198.201 71.8 198.538 71.8H206.956C207.815 71.8 208.474 72.214 208.934 73.042L214.96 84.082L220.986 73.042Z" fill="url(#paint1_linear)"/> <defs> <linearGradient id="paint0_linear" x1="113.735" y1="111.444" x2="115.223" y2="1.50146" gradientUnits="userSpaceOnUse"> <stop stop-color="#007CD7"/> <stop offset="1" stop-color="white"/> </linearGradient> <linearGradient id="paint1_linear" x1="166.5" y1="61" x2="166.5" y2="96" gradientUnits="userSpaceOnUse"> <stop stop-color="#7400B8"/> <stop offset="0.0001" stop-color="#69E5DE"/> <stop offset="0.401042" stop-color="white"/> <stop offset="0.9997" stop-color="#72EFDD"/> <stop offset="0.9998" stop-color="#80FFDB"/> <stop offset="0.9999" stop-color="#BEFFEC"/> </linearGradient> </defs> </svg>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/research">Research</Nav.Link>
                <Nav.Link href="/research">Contact</Nav.Link>
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavBar
