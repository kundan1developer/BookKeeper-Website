import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { FaGlobe, FaBookOpen } from "react-icons/fa";
import "./Navbar.css"; // custom styles (for background color)

const Navbar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar" variant="dark" sticky="top">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#" className="d-flex align-items-center text-white fw-semibold fs-5">
          <FaBookOpen className="me-2" size={20} />
          BookKeeper
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          {/* Nav links */}
          <Nav className="align-items-center gap-3">
            <Nav.Link href="#" className="text-white">Home</Nav.Link>
            <Nav.Link href="#" className="text-white">Features</Nav.Link>
            <Nav.Link href="#" className="text-white">Pricing</Nav.Link>
            <Nav.Link href="#" className="text-white">About Us</Nav.Link>
            <Nav.Link href="#" className="text-white">Contact</Nav.Link>
            <Nav.Link href="#" className="text-white d-flex align-items-center gap-1">
              <FaGlobe /> العربية
            </Nav.Link>
          </Nav>

          {/* Login & Signup buttons */}
          <div className="d-flex align-items-center ms-3 gap-2">
            <Button variant="outline-light" size="sm">Login</Button>
            <Button variant="warning" size="sm" className="text-white">Sign Up</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar;
