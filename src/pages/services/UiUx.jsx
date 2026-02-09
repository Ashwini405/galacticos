export default function UiUx() {
  return (
    <div style={{ fontFamily: "Inter, Arial, sans-serif", color: "#222" }}>

      {/* HERO SECTION */}
      <section
        style={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          padding: "80px 8%",
          color: "#fff",
          background: `
            linear-gradient(120deg, rgba(20,20,60,0.95), rgba(30,40,120,0.85)),
            url("https://images.unsplash.com/photo-1559028012-481c04fa702d")
          `,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div style={{ maxWidth: "600px" }}>
          <p style={{ letterSpacing: "1px", opacity: 0.9 }}>UX / UI</p>
          <h1 style={{ fontSize: "48px", lineHeight: 1.2, marginTop: "10px" }}>
            Turn users into fans
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ padding: "80px 10%", background: "#fff" }}>
        <h2 style={{ color: "#0a5aa8", fontSize: "34px" }}>
          Creating high-quality user experiences with Interactive web design
        </h2>

        <p style={{ marginTop: "20px", maxWidth: "900px", lineHeight: 1.7 }}>
          Think of us as “Design-garage meets Engineering-studio”; best of both
          worlds combined to create intuitive, engaging, and effective
          user-centered digital experiences that drive business growth.
          We follow a research-driven UX approach and translate insights into
          scalable, secure, and performance-optimized front-end solutions.
        </p>
      </section>

      {/* OVERVIEW */}
      <section style={{ padding: "70px 10%", background: "#f6f7f9" }}>
        <h2 style={{ color: "#0a5aa8", marginBottom: "20px" }}>Overview</h2>

        <ul style={{ maxWidth: "900px", lineHeight: 1.8 }}>
          <li>
            Deep understanding of user behavior across domains and downstream
            technical needs.
          </li>
          <li>Proprietary UX research methodology.</li>
          <li>
            Facelift framework with reusable UI components and design systems.
          </li>
          <li>
            Faster delivery, higher quality, reduced cost, and predictable
            outcomes.
          </li>
        </ul>
      </section>

      {/* EXPERTISE & SERVICES */}
      <section style={{ padding: "80px 8%", background: "#fff" }}>
        <h2 style={{ textAlign: "center", marginBottom: "50px" }}>
          Expertise & services menu
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "30px"
          }}
        >
          {/* UX */}
          <div style={cardStyle("#dd783c")}>
            <h3>UX</h3>
            <ul>
              <li>User research and analysis</li>
              <li>Information architecture</li>
              <li>Visual & interaction design</li>
              <li>Responsive & mobile design</li>
              <li>User training & governance</li>
            </ul>
          </div>

          {/* UI */}
          <div style={cardStyle("#189bb6")}>
            <h3>UI</h3>
            <ul>
              <li>UI architecture & design systems</li>
              <li>HTML, CSS, JavaScript</li>
              <li>React, Angular & Vue</li>
              <li>Legacy to responsive conversion</li>
            </ul>
          </div>

          {/* DAM */}
          <div style={cardStyle("#c89a00")}>
            <h3>DAM</h3>
            <ul>
              <li>Digital asset creation</li>
              <li>Asset publishing (Veeva / others)</li>
              <li>Lifecycle management</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "80px 8%",
          background: `
            linear-gradient(120deg, rgba(10,60,120,0.9), rgba(20,80,150,0.9)),
            url("https://images.unsplash.com/photo-1581090700227-1e37b190418e")
          `,
          backgroundSize: "cover",
          color: "#fff"
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "30px",
            alignItems: "center"
          }}
        >
          <div style={glassBox}>
            <h3>Talk to our UX/UI experts today.</h3>
          </div>

          <div style={glassBox}>
            <button style={ctaBtn}>Professional services</button>
            <button style={ctaBtn}>Managed services</button>
            <button style={ctaBtn}>Build your own</button>
          </div>

          <div style={glassBox}>
            <button
              style={{
                background: "#f28c00",
                border: "none",
                color: "#fff",
                padding: "16px 28px",
                fontSize: "16px",
                borderRadius: "6px",
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

/* ---------- STYLES ---------- */

const cardStyle = (bg) => ({
  background: bg,
  color: "#fff",
  padding: "40px 30px",
  borderRadius: "4px",
  minHeight: "320px"
});

const glassBox = {
  border: "1px solid rgba(255,255,255,0.4)",
  padding: "30px",
  textAlign: "center",
  background: "rgba(255,255,255,0.08)"
};

const ctaBtn = {
  display: "block",
  width: "100%",
  margin: "10px 0",
  padding: "14px",
  background: "#fff",
  color: "#0a5aa8",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontWeight: 600
};
