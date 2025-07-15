import React from "react";
import { Container, Nav, Navbar as BootstrapNavbar, Button } from "react-bootstrap";
import { FaGlobe, FaBookOpen } from "react-icons/fa";
import "./Navbar.css"; // custom styles (for background color)
import logoziratech from '../assets/logoziratech.png'


const Navbar = () => {
  return (
    <BootstrapNavbar expand="lg" className="custom-navbar py-3" variant="dark" sticky="top">
      <Container>
        {/* Logo */}
        <BootstrapNavbar.Brand href="#" className="d-flex align-items-center text-white fw-semibold fs-5">
  {/* Logo Image */}
  <img
    src={logoziratech} 
    alt="BookKeeper Logo"
    style={{ width: '120px', height: '40px' }} 
    className="me-2"
  />
  
</BootstrapNavbar.Brand>


        <BootstrapNavbar.Toggle aria-controls="navbar-nav" />

        <BootstrapNavbar.Collapse id="navbar-nav" className="justify-content-end">
          {/* Nav links */}
          <Nav className="align-items-center gap-3">
            <Nav.Link href="/" className="text-white">Home</Nav.Link>
            <Nav.Link href="/features" className="text-white">Features</Nav.Link>
            <Nav.Link href="/pricing" className="text-white">Pricing</Nav.Link>
            <Nav.Link href="/aboutus" className="text-white">About Us</Nav.Link>
            <Nav.Link href="/contact" className="text-white">Contact</Nav.Link>
            <Nav.Link href="/howitworks" className="text-white">How It Work</Nav.Link>
            <Nav.Link href="#" className="text-white d-flex align-items-center gap-1">
              <FaGlobe /> العربية
            </Nav.Link>
          </Nav>

          {/* Login & Signup buttons */}
          <div className="d-flex align-items-center ms-3 gap-2">
            <Button variant="outline-light" size="sm">Login</Button>
            <Button variant="warning" size="sm" className="text-white">Sign Up</Button>
          </div>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
