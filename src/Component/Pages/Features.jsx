import React from "react";

const Features = () => {
  return (
    <div>
      {/* Hero Section */}
 <section
  className="py-5"
  style={{
    background: "linear-gradient(90deg, #7B3F22 0%, #6A3320 100%)",
    color: "#ffffff",
    minHeight: "90vh",
    display: "flex",
    alignItems: "center",
  }}
>
  <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between">
    {/* Left Text */}
    <div style={{ maxWidth: "550px" }}>
      <h1 className="mb-4" style={{ fontSize: "3rem", fontWeight: "800", lineHeight: "1.2" }}>
        Streamline Your <br />
        <div style={{ color: "#C6A46D", fontWeight: "700" }}>Business Operations</div>
      </h1>
      <p className="mb-4" style={{ color: "#F5F5F5", fontSize: "1.1rem" }}>
        A comprehensive ERP solution designed for modern businesses.
        Manage inventory, accounting, invoicing and more in one seamless platform.
      </p>
      <div className="d-flex">
        <button
          className="btn mr-3"
          style={{
            backgroundColor: "#1A0E0A",
            color: "#fff",
            padding: "0.75rem 1.5rem",
            fontWeight: "600",
            border: "none",
          }}
        >
          Start Free Trial
        </button>
        <button
          className="btn ms-3"
          style={{
            backgroundColor: "#fff",
            color: "#1A0E0A",
            padding: "0.75rem 1.5rem",
            fontWeight: "600",
            border: "none",
          }}
        >
          Watch Demo
        </button>
      </div>
    </div>

    {/* Right Image */}
    <div className="mt-5 mt-lg-0">
      <img
        src="https://i.postimg.cc/9fpjZHFX/6cb29a4a78d1e3ffe7082e50c06b0094efb54b4b.jpg"
        alt="Dashboard Preview"
        className="img-fluid"
        style={{
          maxWidth: "600px",
          borderRadius: "1rem",
        
        }}
      />
    </div>
  </div>
</section>

      {/* Features Section */}
<section
  className="py-5"
  style={{ backgroundColor: "#FAEEDF" }}
>
  <div className="container text-center">
    {/* Section Title */}
    <h2
      className="h1 font-weight-bold mb-2"
      style={{ color: "#4C2A17" }}
    >
      Our Features
    </h2>
    <p
      className="mb-5"
      style={{ color: "#8A5A3A", fontSize: "1.1rem" }}
    >
      Everything you need to manage your business efficiently in one place
    </p>

    {/* Features Grid */}
    <div className="row">
      {/* Feature Card 1 */}
      <div className="col-md-6 col-lg-6 mb-4">
        <div className="p-4 bg-white rounded shadow-sm h-100">
          <div
            className="mb-3"
            style={{
              backgroundColor: "#F5E5D3",
              borderRadius: "50%",
              width: "60px",
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
              fontSize: "28px",
              color: "#4C2A17",
            }}
          >
            <i className="bi bi-box-seam"></i>
          </div>
          <h5 className="font-weight-bold mb-2" style={{ color: "#4C2A17" }}>
            Inventory & Warehouse
          </h5>
          <p style={{ color: "#5C3D2E" }}>
            Comprehensive inventory management system that allows you to track stock levels,
            manage batches, calculate valuation, and optimize warehouse operations with real-time updates and alerts.
          </p>
        </div>
      </div>

      {/* Feature Card 2 */}
      <div className="col-md-6 col-lg-6 mb-4">
        <div className="p-4 bg-white rounded shadow-sm h-100">
          <div
            className="mb-3"
            style={{
              backgroundColor: "#F5E5D3",
              borderRadius: "50%",
              width: "60px",
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
              fontSize: "28px",
              color: "#4C2A17",
            }}
          >
            <i className="bi bi-calculator"></i>
          </div>
          <h5 className="font-weight-bold mb-2" style={{ color: "#4C2A17" }}>
            GST Accounting
          </h5>
          <p style={{ color: "#5C3D2E" }}>
            Automated GST calculations and reporting with support for GSTR-1/3B filing.
            Generate QR code invoices and stay compliant with the latest tax regulations without manual intervention.
          </p>
        </div>
      </div>

      {/* Feature Card 3 */}
      <div className="col-md-6 col-lg-6 mb-4">
        <div className="p-4 bg-white rounded shadow-sm h-100">
          <div
            className="mb-3"
            style={{
              backgroundColor: "#F5E5D3",
              borderRadius: "50%",
              width: "60px",
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
              fontSize: "28px",
              color: "#4C2A17",
            }}
          >
            <i className="bi bi-receipt"></i>
          </div>
          <h5 className="font-weight-bold mb-2" style={{ color: "#4C2A17" }}>
            Invoicing
          </h5>
          <p style={{ color: "#5C3D2E" }}>
            Create professional Arabic + English bilingual GST bills with customizable templates.
            Support for multiple currencies, payment terms, and automatic tax calculations for seamless billing.
          </p>
        </div>
      </div>

      {/* Feature Card 4 */}
      <div className="col-md-6 col-lg-6 mb-4">
        <div className="p-4 bg-white rounded shadow-sm h-100">
          <div
            className="mb-3"
            style={{
              backgroundColor: "#F5E5D3",
              borderRadius: "50%",
              width: "60px",
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
              fontSize: "28px",
              color: "#4C2A17",
            }}
          >
            <i className="bi bi-phone"></i>
          </div>
          <h5 className="font-weight-bold mb-2" style={{ color: "#4C2A17" }}>
            Mobile App
          </h5>
          <p style={{ color: "#5C3D2E" }}>
            Access your business data on-the-go with our dedicated mobile applications for iOS and Android.
            Manage inventory, create invoices, and check reports from anywhere, anytime.
          </p>
        </div>
      </div>
    </div>

    {/* View All Button */}
    <button
      className="btn btn-link mt-3 font-weight-bold"
      style={{ color: "#854836", textDecoration: "none" }}
    >
      View all features →
    </button>
  </div>
</section>


      {/* Testimonials Section */}
 <section className="py-5" style={{ backgroundColor: "#FBF7F4" }}>
  <div className="container text-center">
    <h2 className="h1 font-weight-bold mb-1" style={{ color: "#2D1810" }}>
      What Our Customers Say
    </h2>
    <p className="mb-5" style={{ color: "#854836" }}>
      Trusted by businesses across industries
    </p>
    <div className="row">
      {/* Testimonial 1 */}
      <div className="col-md-4 mb-4">
        <div className="p-4 rounded shadow-sm h-100" style={{ backgroundColor: "#FEF4E7" }}>
          <div className="d-flex align-items-center mb-3">
            <div
              className="rounded-circle text-white d-flex align-items-center justify-content-center me-3"
              style={{
                backgroundColor: "#5C3D2E",
                width: "50px",
                height: "50px",
                fontWeight: "600"
              }}
            >
              JD
            </div>
            <div className="text-left">
              <h6 className="mb-0 font-weight-bold" style={{ color: "#2D1810" }}>
                John Doe
              </h6>
              <small style={{ color: "#5C3D2E" }}>Retail Store Owner</small>
            </div>
          </div>
          <p style={{ color: "#5C3D2E", fontStyle: "italic" }}>
            "This ERP system has transformed how we manage our inventory. The bilingual invoicing
            feature is exactly what we needed for our international customers."
          </p>
          <div style={{ color: "#854836" }}>★★★★★</div>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="col-md-4 mb-4">
        <div className="p-4 rounded shadow-sm h-100" style={{ backgroundColor: "#FEF4E7" }}>
          <div className="d-flex align-items-center mb-3">
            <div
              className="rounded-circle text-white d-flex align-items-center justify-content-center me-3"
              style={{
                backgroundColor: "#5C3D2E",
                width: "50px",
                height: "50px",
                fontWeight: "600"
              }}
            >
              SM
            </div>
            <div className="text-left">
              <h6 className="mb-0 font-weight-bold" style={{ color: "#2D1810" }}>
                Sarah Miller
              </h6>
              <small style={{ color: "#5C3D2E" }}>Finance Director</small>
            </div>
          </div>
          <p style={{ color: "#5C3D2E", fontStyle: "italic" }}>
            "The GST accounting features have saved us countless hours of manual work.
            Automated tax calculations and reporting make compliance so much easier."
          </p>
          <div style={{ color: "#854836" }}>★★★★★</div>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="col-md-4 mb-4">
        <div className="p-4 rounded shadow-sm h-100" style={{ backgroundColor: "#FEF4E7" }}>
          <div className="d-flex align-items-center mb-3">
            <div
              className="rounded-circle text-white d-flex align-items-center justify-content-center me-3"
              style={{
                backgroundColor: "#5C3D2E",
                width: "50px",
                height: "50px",
                fontWeight: "600"
              }}
            >
              RK
            </div>
            <div className="text-left">
              <h6 className="mb-0 font-weight-bold" style={{ color: "#2D1810" }}>
                Raj Kumar
              </h6>
              <small style={{ color: "#5C3D2E" }}>Warehouse Manager</small>
            </div>
          </div>
          <p style={{ color: "#5C3D2E", fontStyle: "italic" }}>
            "The mobile app allows me to check inventory levels and process orders while on the
            warehouse floor. It’s incredibly convenient and has improved our efficiency."
          </p>
          <div style={{ color: "#854836" }}>★★★★★</div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Features;
