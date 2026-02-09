export default function CloudSaaS() {
  const styles = {
    hero: {
      height: "75vh",
      display: "flex",
      alignItems: "center",
      padding: "0 10%",
      color: "#fff",
      backgroundImage:
        "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80)",
      backgroundSize: "cover",
      backgroundPosition: "center"
    },
    heroTag: {
      fontSize: "14px",
      letterSpacing: "2px",
      textTransform: "uppercase",
      opacity: 0.85
    },
    heroTitle: {
      fontSize: "48px",
      fontWeight: 700,
      lineHeight: 1.25,
      marginTop: "16px",
      maxWidth: "720px"
    },
    section: {
      padding: "90px 14%",
      background: "#fff"
    },
    heading: {
      fontSize: "38px",
      color: "#0b5aa2",
      fontWeight: 700,
      marginBottom: "14px"
    },
    subHeading: {
      fontSize: "20px",
      fontWeight: 600,
      marginBottom: "18px"
    },
    paragraph: {
      fontSize: "16.5px",
      lineHeight: 1.9,
      color: "#444",
      maxWidth: "980px",
      marginBottom: "18px"
    },
    logoGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      gap: "60px",
      alignItems: "center",
      justifyItems: "center",
      marginTop: "60px"
    },
    logo: {
      maxWidth: "160px",
      opacity: 0.85
    },
    greenSection: {
      background: "#5db36c",
      color: "#fff",
      padding: "90px 12%",
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: "60px"
    },
    whiteCardGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "24px",
      marginTop: "30px"
    },
    whiteCard: {
      background: "#fff",
      color: "#333",
      padding: "26px",
      borderRadius: "4px",
      textAlign: "center"
    },
    listBox: {
      background: "#1aa493",
      padding: "18px 20px",
      borderRadius: "4px",
      marginBottom: "14px",
      fontSize: "15px"
    },
    workdaySection: {
      padding: "90px 14%",
      background: "#fff",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "60px"
    },
    workdayGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "26px",
      marginTop: "26px"
    },
    iconCard: {
      background: "#f4f4f4",
      padding: "40px",
      textAlign: "center",
      fontWeight: 600
    },
    blueList: {
      background: "#1b66a8",
      color: "#fff",
      padding: "18px",
      marginBottom: "14px",
      borderRadius: "3px",
      fontSize: "15px"
    },
    cta: {
      backgroundImage:
        "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80)",
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
      border: "none",
      color: "#fff",
      padding: "14px 28px",
      fontSize: "16px",
      fontWeight: 600,
      borderRadius: "4px",
      cursor: "pointer"
    }
  };

  return (
    <>
      {/* HERO */}
      <section style={styles.hero}>
        <div>
          <div style={styles.heroTag}>Cloud SaaS</div>
          <h1 style={styles.heroTitle}>
            Faster and smoother implementations and global support
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section style={styles.section}>
        <h2 style={styles.heading}>
          Cloud SaaS. Business ready platforms
        </h2>
        <div style={styles.subHeading}>
          Ready. Set. Go… faster than ever before.
        </div>

        <p style={styles.paragraph}>
          Modern business platforms with rich functionality, configurability,
          and rapid evolution are the go-to choice for organizations operating
          at scale. We combine deep domain expertise with proven delivery
          capabilities across assessment, implementation, integration, and
          global support.
        </p>

        {/* LOGOS */}
        <div style={styles.logoGrid}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Murex_logo.svg"
            alt="Murex"
            style={styles.logo}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Veeva_Systems_logo.svg"
            alt="Veeva"
            style={styles.logo}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Workday_logo.svg"
            alt="Workday"
            style={styles.logo}
          />
        </div>
      </section>

      {/* VEEVA SECTION */}
      <section style={styles.greenSection}>
        <div>
          <h2>Veeva commercial solutions</h2>
          <p style={{ lineHeight: 1.8 }}>
            Domain-infused technology solutions to improve commercial operations
            efficiency and digital engagement for life sciences organizations.
          </p>

          <div style={styles.whiteCardGrid}>
            {[
              "CRM & CLM",
              "Approved e-mail",
              "Vault",
              "Engage",
              "Salesforce",
              "Data & integrations"
            ].map((item) => (
              <div key={item} style={styles.whiteCard}>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3>
            Our certified Veeva consultants leverage the following to craft
            custom solutions
          </h3>

          {[
            "Cross-platform technology expertise",
            "Strong sales & marketing functional knowledge",
            "Deep understanding of business objectives",
            "Life sciences domain best practices",
            "Agile and assured delivery methodology"
          ].map((item, index) => (
            <div key={index} style={styles.listBox}>
              {index + 1}. {item}
            </div>
          ))}
        </div>
      </section>

      {/* WORKDAY SECTION */}
      <section style={styles.workdaySection}>
        <div>
          <h2 style={styles.heading}>Workday</h2>
          <p style={styles.paragraph}>
            Our Workday practice delivers implementations and post-implementation
            support across HRMS, Finance, Planning, and Integrations with strong
            techno-functional expertise.
          </p>

          <div style={styles.workdayGrid}>
            {["HRMS", "Finance", "Planning", "Integrations"].map((item) => (
              <div key={item} style={styles.iconCard}>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3>
            A glimpse from ongoing post-implementation engagements
          </h3>

          {[
            "Business process improvements and rule optimizations",
            "Documentation, requirements, and user training",
            "New dashboards and reports",
            "Studio & EIB integrations",
            "End-user support and issue resolution"
          ].map((item, index) => (
            <div key={index} style={styles.blueList}>
              {index + 1}. {item}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <div>
          <h2>Talk to our Cloud SaaS experts today.</h2>
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
