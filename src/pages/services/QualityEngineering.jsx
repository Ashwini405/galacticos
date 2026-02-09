import React from "react";

export default function QualityEngineering() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#222" }}>

      {/* HERO */}
      <section
        style={{
          height: "70vh",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1800&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          padding: "0 8%",
          color: "#fff"
        }}
      >
        <div style={{ maxWidth: "650px" }}>
          <h5 style={{ fontSize: "16px", opacity: 0.9 }}>Quality Engineering</h5>
          <h1 style={{ fontSize: "44px", lineHeight: "1.2" }}>
            Maximizing software endurance <br />
            through comprehensive quality engineering service
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ padding: "70px 10%", background: "#fff" }}>
        <h2 style={{ color: "#0b5fa5", fontSize: "32px" }}>
          Quality Engineering
        </h2>
        <h3 style={{ marginTop: "10px", fontWeight: "600" }}>
          Develop and maintain high-quality products with advanced quality engineering
        </h3>

        <p style={{ marginTop: "20px", lineHeight: "1.7", color: "#555" }}>
          Our software quality engineering services are designed to ensure highest
          user satisfaction and flawless performance of enterprise applications
          and digital products. We leverage industry best practices, advanced
          testing methodologies, and robust QA processes to assess and enhance
          software quality across the lifecycle.
        </p>
      </section>

      {/* OVERVIEW */}
      <section style={{ padding: "60px 10%", background: "#f7f7f7" }}>
        <h2 style={{ color: "#0b5fa5", marginBottom: "20px" }}>Overview</h2>
        <ul style={{ lineHeight: "1.8", color: "#444" }}>
          <li>
            Center of excellence in quality engineering and testing with over 25 years
            of experience across enterprises and startups
          </li>
          <li>
            ROI-focused, outcomes-driven, analytics-led testing strategy covering
            manual to automation testing
          </li>
          <li>
            Continuous investments in accelerators, tools, and best practices
          </li>
          <li>
            Customer-centric engagement models aligned with business goals
          </li>
        </ul>
      </section>

      {/* EXPERTISE & SERVICES */}
      <section style={{ padding: "70px 8%", background: "#fff" }}>
        <h2 style={{ textAlign: "center", marginBottom: "50px" }}>
          Expertise & Services Menu
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px"
          }}
        >
          {/* CARD 1 */}
          <div
            style={{
              background: "#1fa971",
              color: "#fff",
              padding: "35px",
              borderRadius: "6px",
              minHeight: "260px"
            }}
          >
            <h3>Our expertise</h3>
            <p style={{ marginTop: "15px", lineHeight: "1.6" }}>
              Functional testing, Performance testing, Automation testing,
              Integration testing, Security testing, Migration testing,
              Usability testing, Network testing, DevOps testing
            </p>
          </div>

          {/* CARD 2 */}
          <div
            style={{
              background: "#9b3c8c",
              color: "#fff",
              padding: "35px",
              borderRadius: "6px",
              minHeight: "260px"
            }}
          >
            <h3>What we test</h3>
            <p style={{ marginTop: "15px", lineHeight: "1.6" }}>
              Enterprise applications, Web & Mobility, Products & Platforms,
              DW/BI & Big Data, Cloud SaaS, ERP & CRM, APIs & Microservices,
              IoT & Blockchain
            </p>
          </div>

          {/* CARD 3 */}
          <div
            style={{
              background: "#1769aa",
              color: "#fff",
              padding: "35px",
              borderRadius: "6px",
              minHeight: "260px"
            }}
          >
            <h3>Domain</h3>
            <p style={{ marginTop: "15px", lineHeight: "1.6" }}>
              Healthcare, Insurance, Manufacturing, Financial Services,
              Technology, Banking, E-Commerce and more. Our domain experts
              work closely with testing teams for comprehensive coverage.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background:
            "linear-gradient(rgba(11,95,165,0.85), rgba(11,95,165,0.85)), url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1800&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "70px 8%",
          color: "#fff"
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "30px",
            alignItems: "center"
          }}
        >
          <div
            style={{
              border: "1px solid rgba(255,255,255,0.4)",
              padding: "40px",
              textAlign: "center"
            }}
          >
            <h3>Talk to our</h3>
            <h2>Quality Engineering experts today.</h2>
          </div>

          <div
            style={{
              border: "1px solid rgba(255,255,255,0.4)",
              padding: "40px",
              textAlign: "center"
            }}
          >
            <button style={btnStyle}>Professional services</button>
            <button style={btnStyle}>Managed services</button>
            <button style={btnStyle}>Build your own</button>
          </div>

          <div
            style={{
              border: "1px solid rgba(255,255,255,0.4)",
              padding: "40px",
              textAlign: "center"
            }}
          >
            <button
              style={{
                background: "#f57c00",
                color: "#fff",
                padding: "14px 30px",
                border: "none",
                fontSize: "16px",
                cursor: "pointer"
              }}
            >
              CONNECT NOW
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

const btnStyle = {
  display: "block",
  width: "100%",
  padding: "12px",
  margin: "10px 0",
  background: "#fff",
  color: "#0b5fa5",
  border: "none",
  cursor: "pointer",
  fontWeight: "600"
};
