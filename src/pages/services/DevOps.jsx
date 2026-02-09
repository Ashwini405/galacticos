
export default function DevOps() {
  const styles = {
    hero: {
      height: "75vh",
      display: "flex",
      alignItems: "center",
      padding: "0 10%",
      color: "#fff",
      backgroundImage:
        "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1600&q=80)",
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
        "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1600&q=80)",
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
          <div style={styles.heroTag}>DevOps</div>
          <h1 style={styles.heroTitle}>
            Accelerating innovation through automated, scalable DevOps practices
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section style={styles.section}>
        <h2 style={styles.heading}>
          DevOps-driven agility for modern digital enterprises
        </h2>

        <p style={styles.paragraph}>
          Our DevOps services enable organizations to rapidly build, deploy, and
          scale applications through automation, collaboration, and continuous
          delivery pipelines.
        </p>

        <p style={styles.paragraph}>
          By integrating development and operations, we help businesses improve
          speed-to-market, reliability, and operational efficiency while
          maintaining security and compliance.
        </p>

        <div style={styles.split}>
          <div>
            <h3 style={{ fontSize: "22px", marginBottom: "16px" }}>
              Overview
            </h3>
            <p style={styles.paragraph}>
              Leveraging CI/CD, infrastructure automation, and observability, we
              design DevOps ecosystems that enable continuous innovation and
              resilient operations.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: "22px", marginBottom: "16px" }}>
              Key principles of our DevOps approach
            </h3>
            {[
              "Continuous integration and delivery (CI/CD)",
              "Infrastructure as Code (IaC)",
              "Automation-first mindset",
              "Cloud-native and containerized platforms",
              "Security embedded in pipelines (DevSecOps)",
              "Monitoring, logging, and observability",
              "Collaboration and cultural transformation"
            ].map((item) => (
              <div key={item} style={styles.bullet}>
                • {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEVOPS SERVICES */}
      <section style={styles.cardGrid}>
        {[
          {
            title: "DevOps Strategy & Consulting",
            desc:
              "Assessment and roadmap creation to align DevOps initiatives with business goals.",
            bg: "#22a06b"
          },
          {
            title: "CI/CD Pipeline Automation",
            desc:
              "Automated build, test, and deployment pipelines for faster and reliable releases.",
            bg: "#1769aa"
          },
          {
            title: "Infrastructure as Code",
            desc:
              "Provisioning and management of infrastructure using code-driven automation.",
            bg: "#e07a3f"
          },
          {
            title: "Cloud & Container Platforms",
            desc:
              "Design and management of Kubernetes, Docker, and cloud-native ecosystems.",
            bg: "#169db7"
          },
          {
            title: "DevSecOps",
            desc:
              "Embedding security controls across the DevOps lifecycle.",
            bg: "#e0ac00"
          },
          {
            title: "Monitoring & Observability",
            desc:
              "End-to-end visibility into application and infrastructure performance.",
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
          <h2>Talk to our DevOps experts today.</h2>
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
