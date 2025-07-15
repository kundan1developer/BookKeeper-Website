// File: LandingPage.jsx
import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FaCheckCircle, FaMobileAlt, FaGlobe, FaFileAlt, FaWarehouse, FaCogs } from "react-icons/fa";


const Home = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section text-white">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4">
              <h6 className="text-warning">Trusted by 10,000+ businesses</h6>
              <h1 className="display-5 fw-bold">Simplify Your GST Accounting with Powerful Bookkeeper Software</h1>
              <p className="lead text-light">Everything you need for inventory, GST, POS & more – One Tool</p>
              <div className="d-flex gap-3">
                <Button variant="warning" className="text-white">Get Free Trial</Button>
                <Button variant="outline-light">Book Demo</Button>
              </div>
              <div className="mt-3">
                <img src="/stars.png" alt="Rating" height={20} />
              </div>
            </Col>
            <Col md={6}>
              <img src="/dashboard-preview.png" alt="Dashboard" className="img-fluid rounded shadow" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* GST Accounting Features Section */}
      <section className="features-section py-5">
        <Container>
          <div className="text-center mb-4">
            <span className="badge bg-warning text-white mb-2">GST Accounting</span>
            <h2 className="fw-bold">Everything You Need for GST Accounting</h2>
            <p className="text-muted">Simplify GST, Inventory, Bilingual Invoicing, and Mobile GST Accounting</p>
          </div>
          <Row className="g-4">
            {[
              {
                title: "Inventory & Warehouse",
                icon: <FaWarehouse />,
                points: ["Product Tracking", "Multi-location Warehousing", "Batch & Expiry"],
              },
              {
                title: "GST Accounting",
                icon: <FaFileAlt />,
                points: ["GST Filing", "ITC Claims", "E-Invoicing"],
              },
              {
                title: "Bilingual Invoicing",
                icon: <FaGlobe />,
                points: ["English & Hindi", "Professional Layouts", "Print/Share Easily"],
              },
              {
                title: "Mobile App",
                icon: <FaMobileAlt />,
                points: ["Access Anywhere", "Instant Updates", "Live Data"]
              },
            ].map((feature, idx) => (
              <Col md={6} lg={3} key={idx}>
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    <div className="mb-3 fs-2 text-warning">{feature.icon}</div>
                    <Card.Title>{feature.title}</Card.Title>
                    <ul className="list-unstyled">
                      {feature.points.map((pt, i) => (
                        <li key={i} className="text-muted">
                          <FaCheckCircle className="me-2 text-success" />{pt}
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <Button variant="outline-warning">View All Features</Button>
          </div>
        </Container>
      </section>

      {/* Powerful Features Section */}
      <section className="powerful-features py-5 bg-light">
        <Container>
          <div className="text-center mb-4">
            <span className="badge bg-warning text-white mb-2">Features That Matter</span>
            <h2 className="fw-bold">Powerful Features for Your Business</h2>
          </div>
          <Row className="g-4">
            {["GST Invoicing", "Financial Reports", "Inventory Management"].map((text, idx) => (
              <Col md={4} key={idx}>
                <Card className="shadow-sm h-100">
                  <Card.Body>
                    <Card.Title>{text}</Card.Title>
                    <Card.Text className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <Button variant="dark">Explore All Features</Button>
          </div>
        </Container>
      </section>

      {/* Testimonial & Metrics */}
      <section className="testimonial-metrics py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <blockquote className="blockquote border-start border-warning ps-3">
                <p className="mb-3">Bookkeeper has transformed how we manage our accounting. The GST filing process has become easier, faster, and more accurate. Highly recommend!</p>
                <footer className="blockquote-footer">Ritesh Verma, Business Owner</footer>
              </blockquote>
            </Col>
            <Col md={6} className="text-md-end mt-4 mt-md-0">
              <Row>
                {[
                  { label: "10,000+", sub: "Happy Users" },
                  { label: "98%", sub: "Customer Satisfaction" },
                  { label: "50+", sub: "GST Reports" },
                  { label: "24/7", sub: "Customer Support" },
                ].map((item, i) => (
                  <Col xs={6} key={i} className="mb-3">
                    <h4 className="fw-bold text-dark mb-1">{item.label}</h4>
                    <p className="text-muted small mb-0">{item.sub}</p>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="cta-section py-5 bg-light">
        <Container className="text-center">
          <h2 className="fw-bold">Ready to Simplify Your Accounting?</h2>
          <p className="text-muted mb-4">Join thousands of businesses that trust Bookkeeper for their GST accounting needs.</p>
          <div className="d-flex justify-content-center gap-3 mb-4">
            <Button variant="warning" className="text-white">Start Your Free Trial</Button>
            <Button variant="outline-dark">Schedule Demo</Button>
          </div>
          <Row>
            {[
              "1 Signup Step", "User-Friendly", "Start GST Filing Instantly"
            ].map((text, idx) => (
              <Col md={4} key={idx}>
                <Card className="shadow-sm h-100">
                  <Card.Body className="text-muted">{text}</Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer bg-dark text-white py-4">
        <Container>
          <Row>
            <Col md={4}>
              <h5 className="text-warning">BookKeeper</h5>
              <p className="small">GST accounting simplified. Join 10,000+ businesses today.</p>
            </Col>
            <Col md={8}>
              <Row>
                {["Product", "Company", "Support"].map((section, i) => (
                  <Col md={4} key={i}>
                    <h6 className="text-white-50">{section}</h6>
                    <ul className="list-unstyled small">
                      {["Features", "Pricing", "About", "Contact"].map((link, j) => (
                        <li key={j}><a href="#" className="text-white-50 text-decoration-none">{link}</a></li>
                      ))}
                    </ul>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
