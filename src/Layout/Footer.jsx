import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import logoziratech from "../assets/logoziratech.png";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#2b160e",
        color: "#dcdcdc",
        paddingTop: "40px",
        paddingBottom: "20px",
      }}
    >
      <div className="p-5">
        <Row className="mb-4">
          <Col md={3}>
            <h5 style={{ color: "#f4a033" }} className="d-flex align-items-center">
              <img
                src={logoziratech}
                alt="BookKeeper Logo"
                style={{ width: "120px", height: "40px", marginRight: "8px" }}
              />
            </h5>
            <p style={{ fontSize: "13px", color: "#ccc" }}>
              Simplifying GST accounting for businesses since 2020
            </p>
            <div className="d-flex gap-3">
              <FaFacebookF style={{ color: "#ccc", cursor: "pointer" }} />
              <FaTwitter style={{ color: "#ccc", cursor: "pointer" }} />
              <FaLinkedinIn style={{ color: "#ccc", cursor: "pointer" }} />
              <FaInstagram style={{ color: "#ccc", cursor: "pointer" }} />
            </div>
          </Col>

          <Col md={3}>
            <h6 style={{ fontWeight: "bold", marginBottom: "15px" }}>Product</h6>
            <ul className="list-unstyled" style={{ fontSize: "13px" }}>
              <li><Link to="/features" className="text-decoration-none text-light">➤ Features</Link></li>
              <li><Link to="/pricing" className="text-decoration-none text-light">➤ Pricing</Link></li>
              <li><a href="#" className="text-decoration-none text-light">➤ Integrations</a></li>
              <li><a href="#" className="text-decoration-none text-light">➤ Updates</a></li>
            </ul>
          </Col>

          <Col md={3}>
            <h6 style={{ fontWeight: "bold", marginBottom: "15px" }}>Resources</h6>
            <ul className="list-unstyled" style={{ fontSize: "13px" }}>
              <li><a href="#" className="text-decoration-none text-light">➤ Documentation</a></li>
              <li><a href="#" className="text-decoration-none text-light">➤ Tutorials</a></li>
              <li><a href="#" className="text-decoration-none text-light">➤ Blog</a></li>
              <li><a href="#" className="text-decoration-none text-light">➤ Support</a></li>
            </ul>
          </Col>

          <Col md={3}>
            <h6 style={{ fontWeight: "bold", marginBottom: "15px" }}>Company</h6>
            <ul className="list-unstyled" style={{ fontSize: "13px" }}>
              <li><Link to="/aboutus" className="text-decoration-none text-light">➤ About Us</Link></li>
              <li><a href="#" className="text-decoration-none text-light">➤ Careers</a></li>
              <li><Link to="/contact" className="text-decoration-none text-light">➤ Contact</Link></li>
              <li><a href="#" className="text-decoration-none text-light">➤ Privacy Policy</a></li>
            </ul>
          </Col>
        </Row>

        <hr style={{ borderColor: "#444" }} />

        <Row className="mb-3">
          <Col md={6}>
            <h6 style={{ fontWeight: "bold", fontSize: "13px" }}>
              Subscribe to our newsletter
            </h6>
            <div className="d-flex mt-2">
              <Form.Control
                type="email"
                placeholder="Your email address"
                style={{
                  backgroundColor: "#3b2a22",
                  border: "none",
                  color: "#fff",
                  fontSize: "13px",
                }}
              />
              <Button
                style={{
                  backgroundColor: "#f4a033",
                  border: "none",
                  fontSize: "13px",
                }}
              >
                Subscribe
              </Button>
            </div>
          </Col>
          <Col md={6} className="text-md-end mt-3 mt-md-0">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
              alt="Visa"
              width="40"
              className="me-2"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
              alt="Mastercard"
              width="40"
              className="me-2"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              alt="PayPal"
              width="40"
            />
          </Col>
        </Row>

        <hr style={{ borderColor: "#444" }} />

        <Row className="pt-2">
          <Col md={6} style={{ fontSize: "12px" }}>
            © 2025 BookKeeper. All rights reserved.
          </Col>
          <Col md={6} className="text-md-end" style={{ fontSize: "12px" }}>
            Terms of Service &nbsp; | &nbsp; Privacy Policy &nbsp; | &nbsp; Cookies
          </Col>
        </Row>
      </div>
    </footer>
  );
}
