export default function DataEngineering() {
  const styles = {
    hero: {
      height: "75vh",
      display: "flex",
      alignItems: "center",
      padding: "0 10%",
      color: "#fff",
      backgroundImage:
        "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80)",
      backgroundSize: "cover",
      backgroundPosition: "center"
    },
    heroTag: {
      fontSize: "14px",
      letterSpacing: "2px",
      textTransform: "uppercase",
      opacity: 0.9
    },
    heroTitle: {
      fontSize: "46px",
      fontWeight: 700,
      lineHeight: 1.25,
      marginTop: "14px",
      maxWidth: "760px"
    },
    section: {
      padding: "90px 14%",
      background: "#ffffff"
    },
    heading: {
      fontSize: "36px",
      color: "#0b5aa2",
      marginBottom: "22px",
      fontWeight: 700
    },
    paragraph: {
      fontSize: "16.5px",
      lineHeight: 1.9,
      color: "#444",
      maxWidth: "900px",
      marginBottom: "18px"
    },
    split: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "60px",
      marginTop: "40px"
    },
    bullet: {
      marginBottom: "14px",
      fontSize: "16px",
      lineHeight: 1.7
    },
    cardGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "26px",
      padding: "90px 10%"
    },
    card: {
      color: "#fff",
      padding: "32px",
      borderRadius: "6px",
      minHeight: "220px",
      boxShadow: "0 18px 40px rgba(0,0,0,0.25)",
      transition: "transform 0.3s ease"
    },
    cta: {
      backgroundImage:
        "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      padding: "100px 10%",
      color: "#fff",
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: "40px",
      alignItems: "center"
    },
    button: {
      background: "#ff8c00",
      color: "#fff",
      border: "none",
      padding: "14px 28px",
      fontSize: "16px",
      fontWeight: 600,
      cursor: "pointer",
      borderRadius: "4px"
    }
  };

  return (
    <>
      {/* HERO */}
      <section style={styles.hero}>
        <div>
          <div style={styles.heroTag}>Data Engineering</div>
          <h1 style={styles.heroTitle}>
            Engineering data platforms that power intelligent decision-making
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section style={styles.section}>
        <h2 style={styles.heading}>
          Scalable, secure, and analytics-ready data ecosystems
        </h2>

        <p style={styles.paragraph}>
          Our Data Engineering services help organizations unlock the true value
          of data by designing, building, and managing scalable data platforms
          that support analytics, AI, and real-time insights.
        </p>

        <p style={styles.paragraph}>
          We enable seamless data ingestion, transformation, governance, and
          consumption—ensuring data is reliable, accessible, and business-ready.
        </p>

        <div style={styles.split}>
          <div>
            <h3 style={{ fontSize: "22px", marginBottom: "16px" }}>
              Overview
            </h3>
            <p style={styles.paragraph}>
              By combining modern data architectures, cloud-native technologies,
              and automation, we help enterprises build resilient and future-ready
              data foundations.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: "22px", marginBottom: "16px" }}>
              Key capabilities
            </h3>
            {[
              "Modern data warehousing & data lakes",
              "Batch & real-time data processing",
              "Data pipelines & orchestration",
              "Metadata management & governance",
              "Data quality & validation frameworks",
              "Security, privacy & compliance",
              "AI & analytics enablement"
            ].map((item) => (
              <div key={item} style={styles.bullet}>
                • {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DATA ENGINEERING SERVICES */}
      <section style={styles.cardGrid}>
        {[
          {
            title: "Data Architecture & Strategy",
            desc:
              "Designing modern data architectures aligned with business objectives.",
            bg: "#22a06b"
          },
          {
            title: "Data Ingestion & Pipelines",
            desc:
              "Building robust ETL/ELT pipelines for structured and unstructured data.",
            bg: "#1769aa"
          },
          {
            title: "Data Lakes & Warehouses",
            desc:
              "Scalable data platforms optimized for analytics and reporting.",
            bg: "#e07a3f"
          },
          {
            title: "Real-time & Streaming Analytics",
            desc:
              "Processing high-velocity data for real-time insights and actions.",
            bg: "#169db7"
          },
          {
            title: "Data Governance & Quality",
            desc:
              "Ensuring data accuracy, consistency, security, and compliance.",
            bg: "#e0ac00"
          },
          {
            title: "Advanced Analytics Enablement",
            desc:
              "Preparing data foundations for AI, ML, and advanced analytics use cases.",
            bg: "#9c3b8e"
          }
        ].map((card) => (
          <div
            key={card.title}
            style={{ ...styles.card, background: card.bg }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-8px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <h3 style={{ marginBottom: "14px" }}>{card.title}</h3>
            <p style={{ lineHeight: 1.7 }}>{card.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <div>
          <h2>Talk to our Data Engineering experts today.</h2>
        </div>

        <div>
          <button style={styles.button}>Professional services</button>
          <br /><br />
          <button style={styles.button}>Managed services</button>
          <br /><br />
          <button style={styles.button}>Build your own</button>
        </div>

        <div style={{ textAlign: "center" }}>
          <button style={styles.button}>CONNECT NOW</button>
        </div>
      </section>
    </>
  );
}
