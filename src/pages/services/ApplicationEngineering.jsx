import React from 'react';

export default function ApplicationEngineering() {
  const styles = {
    hero: {
      height: "75vh",
      display: "flex",
      alignItems: "center",
      padding: "0 10%",
      color: "#fff",
      backgroundImage:
        "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80)",
      backgroundSize: "cover",
      backgroundPosition: "center"
    },
    heroTitle: {
      fontSize: "44px",
      fontWeight: 700,
      lineHeight: 1.25,
      marginTop: "12px"
    },
    heroSub: {
      fontSize: "14px",
      letterSpacing: "2px",
      textTransform: "uppercase",
      opacity: 0.9
    },
    section: {
      padding: "90px 14%"
    },
    heading: {
      fontSize: "34px",
      color: "#0b5aa2",
      marginBottom: "24px"
    },
    paragraph: {
      fontSize: "16px",
      lineHeight: 1.8,
      color: "#444",
      marginBottom: "16px",
      maxWidth: "900px"
    },
    // --- UPDATED COMPETENCY SECTION STYLES ---
    competency: {
      background: "linear-gradient(90deg, #63b36f, #4da3cd)", // Green to Blue gradient from your image
      padding: "80px 10%",
      color: "#fff",
      textAlign: "center"
    },
    competencyGrid: {
      marginTop: "48px",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "1px", // Creates the thin grid line effect
      backgroundColor: "rgba(255,255,255,0.3)", // The color of the grid lines
      border: "1px solid rgba(255,255,255,0.3)",
      borderRadius: "4px",
      overflow: "hidden"
    },
    competencyCard: {
      background: "#fff",
      color: "#333",
      padding: "20px 25px",
      display: "flex",
      alignItems: "center",
      gap: "15px",
      transition: "all 0.3s ease",
      cursor: "pointer",
      textAlign: "left"
    },
    iconStyle: {
      width: "32px",
      height: "32px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#444",
      flexShrink: 0
    },
    // --- END UPDATED SECTION ---
    offerings: {
      padding: "90px 8%",
      textAlign: "center"
    },
    offeringsGrid: {
      marginTop: "48px",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "36px"
    },
    card: {
      color: "#fff",
      padding: "36px",
      borderRadius: "8px",
      textAlign: "left",
      boxShadow: "0 15px 40px rgba(0,0,0,0.2)"
    }
  };

  // Fixed Icon Data using Fragments <> to prevent adjacent element errors
  const competencyData = [
    { name: "Micro-services architecture", icon: <><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></> },
    { name: "Agile development", icon: <circle cx="12" cy="12" r="10"/> },
    { name: "Java and .NET", icon: <path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/> },
    { name: "UX / UI", icon: <path d="M12 19l7-7 3 3-7 7-3-3z"/> },
    { name: "Automation", icon: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/></> },
    { name: "DevOps", icon: <><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/></> },
    { name: "Testing", icon: <><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></> },
    { name: "Cloud management", icon: <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/> },
    { name: "Data Engineering", icon: <><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></> },
    { name: "Analytics", icon: <><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></> },
    { name: "Cyber security", icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/> },
    { name: "PTC", icon: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></> }
  ];

  return (
    <>
      {/* HERO */}
      <section style={styles.hero}>
        <div>
          <div style={styles.heroSub}>Application Engineering</div>
          <h1 style={styles.heroTitle}>
            New-age applications for a <br />
            better, brighter digital tomorrow
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section style={styles.section}>
        <h2 style={styles.heading}>
          Digitally engineered composite & modern applications
        </h2>
        <p style={styles.paragraph}>
          “The whole is greater than the sum of its parts” aptly describes our
          approach to Application Engineering. We orchestrate specialized
          engineering practices to deliver scalable, resilient, and future-ready
          enterprise applications.
        </p>
        <p style={styles.paragraph}>
          Our services empower organizations with superior customer experiences,
          operational efficiency, and measurable business outcomes.
        </p>
      </section>

      {/* COMPETENCY AREAS - THE WOW SECTION */}
      
      <section style={styles.competency}>
        <h2 style={{ fontSize: "36px", marginBottom: "16px", fontWeight: 700 }}>
          Competency Areas
        </h2>
        <p style={{ fontSize: "16px", opacity: 0.9, maxWidth: "800px", margin: "0 auto" }}>
          Our competency centers are purposeful instruments towards development of talent, knowledge systems, and technology solutions that create most value for the customer.
        </p>

        <div style={styles.competencyGrid}>
          {competencyData.map((item) => (
            <div
              key={item.name}
              style={styles.competencyCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f0f9ff";
                e.currentTarget.style.transform = "scale(1.01)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#fff";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <div style={styles.iconStyle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {item.icon}
                </svg>
              </div>
              <span style={{ fontSize: "15px", fontWeight: 600 }}>{item.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* OFFERINGS */}
      <section style={styles.offerings}>
        <h2 style={{ fontSize: "36px", color: "#0b5aa2" }}>Our offerings</h2>
        <div style={styles.offeringsGrid}>
          <div style={{ ...styles.card, background: "#169db7" }}>
            <h3>Modern Application Development</h3>
            <ul>
              <li>API & Microservices architecture</li>
              <li>Cloud-native & DevOps platforms</li>
              <li>UX/UI enriched digital experiences</li>
              <li>Scalable & modular systems</li>
            </ul>
          </div>

          <div style={{ ...styles.card, background: "#9c3b8e" }}>
            <h3>Application Support & Maintenance</h3>
            <ul>
              <li>24×7 global application support</li>
              <li>Monitoring & incident management</li>
              <li>Automation-driven efficiency</li>
              <li>Compliance & data privacy</li>
            </ul>
          </div>

          <div style={{ ...styles.card, background: "#1769aa" }}>
            <h3>DAIS™ Application Transformation</h3>
            <ul>
              <li>Performance & infrastructure optimization</li>
              <li>Security-first transformation</li>
              <li>Analytics-driven decision making</li>
              <li>Multi-stack implementation</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}