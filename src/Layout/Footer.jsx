import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

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
      <Container>
        <Row className="mb-4">
          <Col md={3}>
            <h5 style={{ color: "#f4a033" }}>
              <span style={{ fontSize: "24px", marginRight: "5px" }}>📖</span>BookKeeper
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
              <li>➤ Features</li>
              <li>➤ Pricing</li>
              <li>➤ Integrations</li>
              <li>➤ Updates</li>
            </ul>
          </Col>
          <Col md={3}>
            <h6 style={{ fontWeight: "bold", marginBottom: "15px" }}>Resources</h6>
            <ul className="list-unstyled" style={{ fontSize: "13px" }}>
              <li>➤ Documentation</li>
              <li>➤ Tutorials</li>
              <li>➤ Blog</li>
              <li>➤ Support</li>
            </ul>
          </Col>
          <Col md={3}>
            <h6 style={{ fontWeight: "bold", marginBottom: "15px" }}>Company</h6>
            <ul className="list-unstyled" style={{ fontSize: "13px" }}>
              <li>➤ About Us</li>
              <li>➤ Careers</li>
              <li>➤ Contact</li>
              <li>➤ Privacy Policy</li>
            </ul>
          </Col>
        </Row>

        <hr style={{ borderColor: "#444" }} />

        <Row className="mb-3">
          <Col md={6}>
            <h6 style={{ fontWeight: "bold", fontSize: "13px" }}>Subscribe to our newsletter</h6>
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
      </Container>
    </footer>
  );
}
