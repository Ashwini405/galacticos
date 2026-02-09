export default function Cloud() {
  const styles = {
    hero: {
      height: "75vh",
      display: "flex",
      alignItems: "center",
      padding: "0 10%",
      color: "#fff",
      backgroundImage:
        "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80)",
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
      maxWidth: "720px"
    },
    section: {
      padding: "90px 14%",
      background: "#fff"
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
        "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(https://images.unsplash.com/photo-1581091870627-3b79f2d2b85b?auto=format&fit=crop&w=1600&q=80)",
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
          <div style={styles.heroTag}>Cloud</div>
          <h1 style={styles.heroTitle}>
            Building solutions with incessant innovation to create a legacy
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section style={styles.section}>
        <h2 style={styles.heading}>
          Optimized cloud infrastructure for business resiliency
        </h2>

        <p style={styles.paragraph}>
          Equipped with a rich legacy of remote infrastructure management
          services for on-premise environments and data centers, and
          purpose-built cloud competencies, we deliver comprehensive cloud
          transformation services.
        </p>

        <p style={styles.paragraph}>
          Our offerings help organizations seamlessly transition to cloud or
          hybrid environments, stabilize operations, and optimize infrastructure
          for cost efficiency, security, scalability, and agility.
        </p>

        <div style={styles.split}>
          <div>
            <h3 style={{ fontSize: "22px", marginBottom: "16px" }}>
              Overview
            </h3>
            <p style={styles.paragraph}>
              By integrating automation, analytics, and diverse skill sets, we
              deliver an innovative and holistic DAIS™ approach to digital
              infrastructure transformation.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: "22px", marginBottom: "16px" }}>
              Some of the lessons from DAIS™ approach
            </h3>
            {[
              "Technology & process understanding",
              "Data-driven change management",
              "Multi-tool expertise",
              "Infra vs App resource optimization",
              "Security standards & best practices",
              "Custom scripts & automation",
              "Quality engineering focus"
            ].map((item) => (
              <div key={item} style={styles.bullet}>
                • {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOUD SERVICES */}
      <section style={styles.cardGrid}>
        {[
          {
            title: "Cloud Strategy and Planning",
            desc:
              "Assessment and roadmap services that evaluate infrastructure readiness and define migration paths.",
            bg: "#22a06b"
          },
          {
            title: "Cloud Migration",
            desc:
              "Secure and seamless migration of applications and data with minimal business disruption.",
            bg: "#e07a3f"
          },
          {
            title: "Cloud Optimization",
            desc:
              "Continuous performance, scalability, and cost optimization of cloud environments.",
            bg: "#169db7"
          },
          {
            title: "Cloud Security and Compliance",
            desc:
              "Robust security controls and regulatory compliance to protect cloud workloads.",
            bg: "#e0ac00"
          },
          {
            title: "Cloud Managed Services",
            desc:
              "24×7 monitoring, incident management, and operational support.",
            bg: "#1769aa"
          },
          {
            title: "Multi-Cloud Management",
            desc:
              "Unified control and visibility across multiple cloud platforms.",
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
          <h2>Talk to our Cloud Management experts today.</h2>
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
