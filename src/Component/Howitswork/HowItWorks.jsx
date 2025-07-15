import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BsPersonCheckFill, BsPeopleFill, BsFileEarmarkTextFill, BsShieldLockFill, BsCardChecklist, BsCalculatorFill } from 'react-icons/bs';







const HowItWorks = () => {

   const steps = [
    {
      id: 1,
      icon: <img src="/" alt="Sign Up" width="60" />, // or use <BsPersonCheckFill />
      title: "Sign Up",
      desc: "Create your account in minutes. Our simple registration process gets you started quickly with just basic information about your business.",
    },
    {
      id: 2,
      icon: <img src="/clients-icon.png" alt="Clients" width="60" />,
      title: "Add Clients & Items",
      desc: "Easily add your clients and inventory items to the system. Organize your business contacts and products in one centralized location.",
    },
    {
      id: 3,
      icon: <img src="/invoice-icon.png" alt="Billing" width="60" />,
      title: "Start Billing & GST Filing",
      desc: "Generate professional invoices and manage your GST filings with ease. Our automated system handles calculations and compliance for you.",
    },
  ];
  return (
    <div style={{ backgroundColor: '#fff7f5', padding: '3rem 0' }}>
      <Container>
        {/* Top Section */}
        <h3 className="text-center fw-bold mb-2">How It Works</h3>
        <p className="text-center text-muted mb-5">
          Our streamlined 3-step process makes managing your business finances simple and efficient
        </p>
          <div className="py-5 bg-white">
  
          <Row className="text-center">
          {steps.map((step) => (
            <Col md={4} className="mb-5" key={step.id}>
              <div className="position-relative d-flex justify-content-center mb-3">
                {/* Number Badge */}
                <div
                  className="position-absolute"
                  style={{
                    top: "-10px",
                    right: "calc(50% - 50px)",
                    zIndex: 1,
                    backgroundColor: "#5a2d1e",
                    color: "#fff",
                    width: "26px",
                    height: "26px",
                    borderRadius: "50%",
                    fontSize: "0.75rem",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {step.id}
                </div>

                {/* Circle Icon Container */}
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "120px",
                    height: "120px",
                    backgroundColor: "#fcd7be",
                    border: "8px solid #f1ebe6",
                    zIndex: 0,
                  }}
                >
                  {step.icon}
                </div>
              </div>

              <h5 className="fw-bold">{step.title}</h5>
              <p className="text-muted px-3">{step.desc}</p>
            </Col>
          ))}
        </Row>
    </div>
        {/* Detailed Features */}
        <h5 className="text-center fw-bold mb-4">Detailed Features</h5>
        <Row className="text-center mb-5">
          <Col md={4} className="mb-4">
            <div className="bg-white p-4 shadow-sm rounded">
              <BsShieldLockFill size={40} className="mb-2 text-dark" />
              <h6 className="fw-bold">Secure Sign Up</h6>
              <ul className="list-unstyled text-muted small">
                <li>🔐 Two-factor authentication</li>
                <li>🔒 Data encryption</li>
                <li>💾 Automated backup</li>
              </ul>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="bg-white p-4 shadow-sm rounded">
              <BsCardChecklist size={40} className="mb-2 text-dark" />
              <h6 className="fw-bold">Client Management</h6>
              <ul className="list-unstyled text-muted small">
                <li>👥 Client profiles & history</li>
                <li>📂 Custom item catalogs</li>
                <li>📤 Bulk import/export</li>
              </ul>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="bg-white p-4 shadow-sm rounded">
              <BsCalculatorFill size={40} className="mb-2 text-dark" />
              <h6 className="fw-bold">Billing & GST</h6>
              <ul className="list-unstyled text-muted small">
                <li>📊 Automated GST calculation</li>
                <li>📁 One-click filing</li>
                <li>📈 Real-time reports</li>
              </ul>
            </div>
          </Col>
        </Row>

        {/* Call to Action */}
        <div className="text-center">
          <Button variant="danger" className="px-4 py-2 rounded-pill" style={{ backgroundColor: '#944836', border: 'none' }}>
            Get Started Today
          </Button>
          <p className="text-muted small mt-2">Join thousands of businesses already simplifying their financial management.</p>
        </div>
      </Container>
    </div>
  );
};

export default HowItWorks;
