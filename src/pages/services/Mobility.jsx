import React from "react";

export default function Mobility() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>

      {/* ================= HERO SECTION ================= */}
      <section
        style={{
          height: "70vh",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          padding: "0 10%",
          color: "#fff",
        }}
      >
        <div>
          <p style={{ fontSize: "18px", marginBottom: "10px" }}>Mobility</p>
          <h1 style={{ fontSize: "44px", fontWeight: "600", maxWidth: "600px" }}>
            Business momentum solutions
          </h1>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section style={{ padding: "80px 10%" }}>
        <h2 style={{ color: "#0a5ca8", fontSize: "36px", marginBottom: "10px" }}>
          Touch. Tap. Swipe
        </h2>
        <h3 style={{ fontSize: "22px", marginBottom: "20px" }}>
          Get business done from anywhere.
        </h3>
        <p style={{ lineHeight: "1.8", maxWidth: "900px" }}>
          Human behavior has seen a tectonic shift from desktop usage to mobile /
          tablet or other smart devices. With the world adopting digital ways,
          digital realm is here to stay. World population is rapidly becoming
          digital population driving changes in the way every institution
          transacts with its customer base.
        </p>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section style={{ padding: "40px 10%" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "15px" }}>Overview</h2>
        <p style={{ lineHeight: "1.8", maxWidth: "900px" }}>
          From decisions concerning methodology, platform and tools, to design,
          build and test of applications and interfaces that score a maximum on
          synchronization, data exchange, security and usability, we take
          complete ownership of digitizing business processes.
        </p>
      </section>

      {/* ================= INDUSTRY CARDS ================= */}
      <section style={{ padding: "80px 10%" }}>
        <h2 style={{ textAlign: "center", marginBottom: "50px" }}>
          Helping businesses get on the digital express way
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
          }}
        >
          {/* Pharma */}
          <div
            style={{
              background: "#e07b39",
              color: "#fff",
              padding: "40px",
              minHeight: "220px",
            }}
          >
            <h3 style={{ fontSize: "26px", marginBottom: "15px" }}>Pharma</h3>
            <p>
              iPad solution for sales and marketing effectiveness for Pharma
              business
            </p>
          </div>

          {/* Agriculture */}
          <div
            style={{
              background: "#21a366",
              color: "#fff",
              padding: "40px",
              minHeight: "220px",
            }}
          >
            <h3 style={{ fontSize: "26px", marginBottom: "15px" }}>
              Agriculture
            </h3>
            <p>
              Agriculture decision support solution connecting farmers and
              aggregators spanning sowing to harvesting processes
            </p>
          </div>

          {/* Insurance */}
          <div
            style={{
              background: "#1b9db7",
              color: "#fff",
              padding: "40px",
              minHeight: "220px",
            }}
          >
            <h3 style={{ fontSize: "26px", marginBottom: "15px" }}>
              Insurance
            </h3>
            <p>
              Processing for insurance claims in auto, accident, home, travel,
              and health
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section
        style={{
          background:
            "linear-gradient(rgba(10,60,120,0.9), rgba(10,60,120,0.9)), url('https://images.unsplash.com/photo-1521791136064-7986c2920216')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "80px 10%",
          color: "#fff",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
            alignItems: "center",
          }}
        >
          <div style={{ border: "1px solid #fff", padding: "40px" }}>
            <h3>Talk to our Mobility experts today.</h3>
          </div>

          <div style={{ border: "1px solid #fff", padding: "40px" }}>
            <button style={btnStyle}>Professional services</button>
            <button style={btnStyle}>Managed services</button>
            <button style={btnStyle}>Build your own</button>
          </div>

          <div
            style={{
              border: "1px solid #fff",
              padding: "40px",
              textAlign: "center",
            }}
          >
            <button
              style={{
                background: "#f7931e",
                border: "none",
                color: "#fff",
                padding: "14px 30px",
                fontSize: "16px",
                cursor: "pointer",
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
  width: "100%",
  padding: "12px",
  marginBottom: "12px",
  background: "#fff",
  border: "none",
  cursor: "pointer",
  fontSize: "15px",
};
