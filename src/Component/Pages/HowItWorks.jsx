import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { ShieldLock, People, FileText } from 'react-bootstrap-icons';

const HowItWorks = () => {
  return (
    <div className="py-5 bg-light text-center text-md-start">
      <Container>
        {/* Header */}
        <h2 className="text-center fw-bold mb-4">How It Works</h2>
        <p className="text-center text-muted mb-5">
          Our streamlined 3-step process makes managing your business finances simple and efficient
        </p>

        {/* Steps */}
        <Row className="text-center mb-5">
          <Col md={4} className="mb-4">
            <div className="p-3">
              <div className="mb-3">
                <span className="badge bg-secondary rounded-circle px-3 py-2 fs-5">1</span>
              </div>
              <img src="https://via.placeholder.com/100x100" alt="Sign Up" className="mb-3" />
              <h5 className="fw-bold">Sign Up</h5>
              <p className="text-muted">
                Create your account in minutes. Our simple registration process gets you started quickly with just basic information about your business.
              </p>
            </div>
          </Col>

          <Col md={4} className="mb-4">
            <div className="p-3">
              <div className="mb-3">
                <span className="badge bg-secondary rounded-circle px-3 py-2 fs-5">2</span>
              </div>
              <img src="https://via.placeholder.com/100x100" alt="Add Clients" className="mb-3" />
              <h5 className="fw-bold">Add Clients & Items</h5>
              <p className="text-muted">
                Easily add your clients and inventory items to the system. Organize your business contacts and products in one centralized location.
              </p>
            </div>
          </Col>

          <Col md={4} className="mb-4">
            <div className="p-3">
              <div className="mb-3">
                <span className="badge bg-secondary rounded-circle px-3 py-2 fs-5">3</span>
              </div>
              <img src="https://via.placeholder.com/100x100" alt="Billing & Filing" className="mb-3" />
              <h5 className="fw-bold">Start Billing & GST Filing</h5>
              <p className="text-muted">
                Generate professional invoices and manage your GST filings with ease. Our automated system handles calculations and compliance for you.
              </p>
            </div>
          </Col>
        </Row>

        {/* Detailed Features */}
        <h4 className="fw-bold mb-4">Detailed Features</h4>
        <Row className="mb-5">
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <ShieldLock size={30} className="text-primary mb-3" />
                <h5 className="fw-semibold">Secure Sign Up</h5>
                <ul className="text-muted small ps-3">
                  <li>Two-factor authentication</li>
                  <li>Data encryption</li>
                  <li>Automated backups</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <People size={30} className="text-success mb-3" />
                <h5 className="fw-semibold">Client Management</h5>
                <ul className="text-muted small ps-3">
                  <li>Client profiles & history</li>
                  <li>Customer notes</li>
                  <li>Bulk import/export</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <FileText size={30} className="text-warning mb-3" />
                <h5 className="fw-semibold">Billing & GST</h5>
                <ul className="text-muted small ps-3">
                  <li>Automated GST calculation</li>
                  <li>One-click filing</li>
                  <li>Real-time reports</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* CTA */}
        <div className="text-center">
          <Button variant="danger" size="lg">Get Started Today</Button>
          <p className="text-muted mt-2 small">Join thousands of businesses already simplifying their financial management.</p>
        </div>
      </Container>
    </div>
  );
};

export default HowItWorks;
