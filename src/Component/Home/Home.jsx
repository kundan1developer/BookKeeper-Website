// File: LandingPage.jsx
import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import {
  FaCheckCircle,
  FaMobileAlt,
  FaGlobe,
  FaFileAlt,
  FaWarehouse,
  FaCogs,
  FaArrowRight,
  FaChevronDown,
  FaFileInvoice,
  FaChartLine,
  FaQuoteLeft,
  FaArrowLeft,
} from "react-icons/fa";


const Home = () => {
  const testimonials = [
    {
      text: "BookKeeper has transformed how we manage our accounting. The GST filing process that used to take days now takes just hours. The interface is intuitive and the support team is exceptional!",
      name: "Rajesh Sharma",
      position: "CFO, TechSolutions Inc.",
      img: "https://i.pravatar.cc/40?img=1",
    },
    {
      text: "We love how BookKeeper simplifies complex GST tasks. It's accurate and saves us so much time every month. Great product!",
      name: "Anita Patel",
      position: "Finance Head, GlobalExports",
      img: "https://i.pravatar.cc/40?img=2",
    },
    {
      text: "Highly recommend BookKeeper for any small business. The real-time reports and quick filing are game changers!",
      name: "Vikram Mehta",
      position: "Owner, Mehta Traders",
      img: "https://i.pravatar.cc/40?img=3",
    },
  ];

  const [index, setIndex] = useState(0);

  const prevTestimonial = () =>
    setIndex(index === 0 ? testimonials.length - 1 : index - 1);

  const nextTestimonial = () =>
    setIndex(index === testimonials.length - 1 ? 0 : index + 1);

  return (
    <div className="container-fluid ">
      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #fff5ec, #fae2cf)",
          color: "#381c00",
          padding: "100px 0",
        }}
      >
        <Container>
          <Row className="align-items-center">
            {/* Left Content */}
            <Col md={6} className="mb-4">
              <div
                style={{
                  display: "inline-block",
                  backgroundColor: "#ffeaa0",
                  color: "#381c00",
                  padding: "5px 15px",
                  borderRadius: "20px",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                ⭐ Trusted by 10,000+ businesses
              </div>

              <h1
                className="display-5 fw-bold mt-3"
                style={{ color: "#381c00" }}
              >
                Simplify Your GST Accounting with Powerful Bookkeeper Software
              </h1>

              <p className="lead mt-3" style={{ color: "#70451c" }}>
                Invoicing, Inventory, GST Filing, POS — All in One SaaS
              </p>

              <div className="d-flex gap-3 mt-4">
                <Button
                  style={{
                    backgroundColor: "#7b341e",
                    borderColor: "#7b341e",
                  }}
                  className="px-4 text-white"
                >
                  Start Free Trial
                </Button>
                <Button
                  variant="outline-dark"
                  style={{
                    borderColor: "#7b341e",
                    color: "#7b341e",
                  }}
                  className="px-4"
                >
                  <i className="bi bi-play-circle me-2"></i> View Demo
                </Button>
              </div>

              <div className="d-flex align-items-center gap-2 mt-4">
                <img
                  src="/gdg"
                  alt="Rating Stars"
                  height={22}
                  style={{ objectFit: "contain" }}
                />
                <span style={{ color: "#70451c", fontWeight: 600 }}>
                  From 2,000+ reviews
                </span>
              </div>
            </Col>

            {/* Right Image Section */}
            <Col md={6} className="position-relative text-center">
              <div style={{ position: "relative", display: "inline-block" }}>
                <img
                  src="https://i.postimg.cc/Mpg4Vjt6/f1b5355d007196c64fb1ebc2de8c30b21a2f6a6a.jpg"
                  alt="Dashboard"
                  className="img-fluid rounded shadow"
                />

                {/* New Features badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    backgroundColor: "#f78c1f",
                    color: "white",
                    padding: "4px 10px",
                    borderRadius: "8px",
                    fontSize: "12px",
                    fontWeight: 600,
                  }}
                >
                  New Features
                </div>

                {/* Secure & Compliant */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "-15px",
                    transform: "rotate(-8deg)",
                    backgroundColor: "#ffffff",
                    color: "#1f3fff",
                    border: "1px solid #dee2e6",
                    padding: "5px 12px",
                    borderRadius: "8px",
                    fontSize: "12px",
                    fontWeight: 500,
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  🔒 Secure & Compliant
                </div>

                {/* Multilingual Support */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    left: "10px",
                    backgroundColor: "#ffffff",
                    padding: "4px 12px",
                    borderRadius: "12px",
                    fontSize: "12px",
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                >
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      backgroundColor: "#00c853",
                      borderRadius: "50%",
                    }}
                  ></span>
                  Multilingual Support
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* GST Accounting Features Section */}
      <section
        className="features-section py-5"
        style={{ backgroundColor: "#fff8ef" }}
      >
        <Container>
          <div className="text-center mb-4">
            <span
              className="badge mb-2"
              style={{
                backgroundColor: "#f5e0d3",
                color: "#a67852",
                padding: "6px 14px",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: "500",
              }}
            >
              KEY FEATURES
            </span>
            <h2 className="fw-bold mb-2" style={{ color: "#381c00" }}>
              Everything You Need for GST Accounting
            </h2>
            <p style={{ color: "#70451c", fontSize: "15px" }}>
              Comprehensive tools designed for businesses of all sizes to manage
              accounting and tax compliance
            </p>
          </div>

          <Row className="g-4">
            {[
              {
                title: "Inventory & Warehouse",
                iconBg: "#f9c96b",
                icon: <FaWarehouse />,
                desc: "Track stock levels, manage batches, and automate inventory valuation with FIFO/LIFO methods",
                points: [
                  "Real-time stock tracking",
                  "Batch & expiry management",
                  "Barcode scanning support",
                ],
              },
              {
                title: "GST Accounting",
                iconBg: "#9fc9ff",
                icon: <FaFileAlt />,
                desc: "Automated GST calculation, GSTR-1/3B filing, and QR code generation for e-invoices",
                points: [
                  "Auto GST calculation",
                  "One-click GSTR filing",
                  "E-invoice QR generation",
                ],
              },
              {
                title: "Bilingual Invoicing",
                iconBg: "#d4f8e8",
                icon: <FaGlobe />,
                desc: "Create professional invoices in both Arabic and English with customizable templates",
                points: [
                  "Arabic & English support",
                  "Custom invoice templates",
                  "Bulk invoice generation",
                ],
              },
              {
                title: "Mobile App",
                iconBg: "#ecdfff",
                icon: <FaMobileAlt />,
                desc: "Manage your business on the go with our iOS and Android mobile applications",
                points: [
                  "iOS & Android support",
                  "Offline mode capability",
                  "Mobile invoice scanning",
                ],
              },
            ].map((feature, idx) => (
              <Col md={6} lg={3} key={idx}>
                <Card className="h-100 border-0 shadow-sm rounded-3">
                  <Card.Body>
                    <div
                      className="d-inline-flex align-items-center justify-content-center mb-3"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: feature.iconBg,
                        color: "#6b3c1d",
                        fontSize: "18px",
                      }}
                    >
                      {feature.icon}
                    </div>
                    <Card.Title
                      className="mb-2"
                      style={{
                        color: "#381c00",
                        fontWeight: "600",
                        fontSize: "16px",
                      }}
                    >
                      {feature.title}
                    </Card.Title>
                    <Card.Text style={{ color: "#70451c", fontSize: "13px" }}>
                      {feature.desc}
                    </Card.Text>
                    <ul className="list-unstyled mt-3 mb-3">
                      {feature.points.map((pt, i) => (
                        <li
                          key={i}
                          className="text-muted mb-2 d-flex align-items-start"
                          style={{ color: "#4b4b4b", fontSize: "13px" }}
                        >
                          <FaCheckCircle className="me-2 text-success mt-1" />{" "}
                          {pt}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#"
                      style={{
                        color: "#a67852",
                        fontSize: "13px",
                        textDecoration: "none",
                      }}
                    >
                      Learn more <FaArrowRight size="10" />
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="text-center mt-4">
            <Button
              variant="light"
              style={{
                border: "none",
                backgroundColor: "#f5e0d3",
                color: "#a67852",
                fontWeight: "500",
                padding: "10px 20px",
                fontSize: "13px",
              }}
            >
              View all features <FaChevronDown size="12" />
            </Button>
          </div>
        </Container>
      </section>

      {/* Powerful Features Section */}
      <section
        className="powerful-features py-5"
        style={{ backgroundColor: "#f5eeea" }}
      >
        <Container>
          <div className="text-center mb-4">
            <span
              className="badge mb-2"
              style={{
                backgroundColor: "#e5d7cf",
                color: "#a67852",
                padding: "6px 14px",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: "500",
              }}
            >
              POWERFUL FEATURES
            </span>
            <h2 className="fw-bold mb-2" style={{ color: "#381c00" }}>
              Powerful Features for Your Business
            </h2>
            <p style={{ color: "#70451c", fontSize: "15px" }}>
              Everything you need to manage your accounting and GST compliance
              in one place
            </p>
          </div>

          <Row className="g-4">
            {[
              {
                title: "GST Invoicing",
                icon: <FaFileInvoice />,
                desc: "Create professional GST-compliant invoices with automatic tax calculation and filing",
              },
              {
                title: "Financial Reports",
                icon: <FaChartLine />,
                desc: "Generate comprehensive financial reports with real-time insights and analytics",
              },
              {
                title: "Inventory Management",
                icon: <FaWarehouse />,
                desc: "Track inventory levels, set reorder points, and manage stock valuation effortlessly",
              },
            ].map((feature, idx) => (
              <Col md={4} key={idx}>
                <Card className="shadow-sm h-100 border-0 rounded-3">
                  <Card.Body>
                    <div
                      className="d-inline-flex align-items-center justify-content-center mb-3"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#c7a693",
                        color: "#fff",
                        fontSize: "16px",
                      }}
                    >
                      {feature.icon}
                    </div>
                    <Card.Title
                      className="mb-2"
                      style={{
                        color: "#381c00",
                        fontWeight: "600",
                        fontSize: "15px",
                      }}
                    >
                      {feature.title}
                    </Card.Title>
                    <Card.Text style={{ color: "#4b4b4b", fontSize: "13px" }}>
                      {feature.desc}
                    </Card.Text>
                    <a
                      href="#"
                      className="text-decoration-none fw-medium"
                      style={{ color: "#a67852", fontSize: "13px" }}
                    >
                      Learn more <FaArrowRight size="10" />
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="text-center mt-4">
            <Button
              style={{
                backgroundColor: "#6b3c1d",
                border: "none",
                color: "#fff",
                fontWeight: "500",
                padding: "10px 20px",
                fontSize: "13px",
              }}
            >
              Explore All Features <FaArrowRight size="12" className="ms-1" />
            </Button>
          </div>
        </Container>
      </section>

      {/* Testimonial & Metrics */}
      <section className="testimonial-metrics py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="mb-4">
              <div
                className="p-5 rounded-3 position-relative"
                style={{
                  background: "linear-gradient(90deg, #844e26, #3a1d0f)",
                  color: "#fff",
                }}
              >
                <FaQuoteLeft
                  size={20}
                  style={{
                    color: "#f7b731",
                    position: "absolute",
                    top: "15px",
                    left: "15px",
                  }}
                />
                <p style={{ fontStyle: "italic", fontSize: "15px" }}>
                  {testimonials[index].text}
                </p>
                <div className="d-flex align-items-center mt-3">
                  <img
                    src={testimonials[index].img}
                    alt={testimonials[index].name}
                    className="rounded-circle me-2"
                    width={40}
                    height={40}
                  />
                  <div>
                    <div style={{ fontWeight: "600", fontSize: "13px" }}>
                      {testimonials[index].name}
                    </div>
                    <div style={{ fontSize: "12px", opacity: 0.8 }}>
                      {testimonials[index].position}
                    </div>
                  </div>
                </div>
                <div className="position-absolute end-0 bottom-0 m-3 d-flex">
                  <Button
                    onClick={prevTestimonial}
                    size="sm"
                    className="me-2 rounded-circle border-0"
                    style={{
                      backgroundColor: "#fff",
                      color: "#3a1d0f",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    <FaArrowLeft size={12} />
                  </Button>
                  <Button
                    onClick={nextTestimonial}
                    size="sm"
                    className="rounded-circle border-0"
                    style={{
                      backgroundColor: "#fff",
                      color: "#3a1d0f",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    <FaArrowRight size={12} />
                  </Button>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="text-center mt-4">
            {[
              { label: "10,000+", sub: "Active Users" },
              { label: "98%", sub: "Customer Satisfaction" },
              { label: "50+", sub: "Countries" },
              { label: "24/7", sub: "Customer Support" },
            ].map((item, i) => (
              <Col xs={6} md={3} key={i} className="mb-3">
                <h5 style={{ color: "#844e26", fontWeight: "700" }}>
                  {item.label}
                </h5>
                <p style={{ color: "#4b4b4b", fontSize: "13px" }}>{item.sub}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

    


    </div>
  
  );
};

export default Home;
