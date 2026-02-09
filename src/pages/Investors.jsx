export default function Investors() {
  const reports = [
    {
      year: "2024-25",
      img: "https://images.unsplash.com/photo-1581091215367-59ab6b2d1c9c",
    },
    {
      year: "2023-24",
      img: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28",
    },
    {
      year: "2022-23",
      img: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    },
    {
      year: "2021-22",
      img: "https://images.unsplash.com/photo-1518183214770-9cffbec72538",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}>
          <h1 style={styles.heroTitle}>Investing in value creation</h1>
          <p style={styles.heroSubtitle}>With trust & expertise</p>
        </div>
      </section>

      {/* CONTENT */}
      <section style={styles.container}>
        {/* SIDEBAR */}
        <aside style={styles.sidebar}>
          <h4 style={styles.sideTitle}>Investor</h4>

          <ul style={styles.sideList}>
            <li style={styles.activeItem}>Investor Overview (Reg.46)</li>
            <li>Investor Contact Details</li>
            <li>Registrar and Transfer Agent</li>
          </ul>

          <h4 style={styles.sideTitle}>Financial Information</h4>
          <h4 style={styles.sideTitle}>Corporate Governance</h4>
          <h4 style={styles.sideTitle}>Shareholder Information</h4>
          <h4 style={styles.sideTitle}>Regulatory Filings</h4>
        </aside>

        {/* MAIN */}
        <main style={styles.main}>
          <div style={styles.headerBar}>Investor Overview</div>

          <p style={styles.description}>
            Sagarsoft Management Team comprises technology and business
            visionaries propelling the company toward growth and success.
            Entrepreneurial and hands-on, they are knowledgeable and experienced
            on all fronts. Add to that a flexible delivery structure, which
            enables nimble response in a dynamic business and technological
            environment.
          </p>

          <div style={styles.reportsGrid}>
            {reports.map((r, i) => (
              <div key={i} style={styles.reportCard}>
                <img src={r.img} alt={r.year} style={styles.reportImg} />
                <h4 style={styles.reportTitle}>
                  Annual Report {r.year}
                </h4>
                <a href="#" style={styles.viewLink}>View Report</a>
              </div>
            ))}
          </div>
        </main>
      </section>
    </>
  );
}

/* ================= STYLES ================= */

const styles = {
  hero: {
    height: "420px",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  },
  heroOverlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.55)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: "80px",
    color: "#fff",
  },
  heroTitle: {
    fontSize: "42px",
    fontWeight: "600",
    marginBottom: "10px",
  },
  heroSubtitle: {
    fontSize: "18px",
    opacity: 0.9,
  },
  container: {
    display: "flex",
    gap: "40px",
    padding: "60px 80px",
    background: "#f7f7f7",
  },
  sidebar: {
    width: "280px",
    background: "#fff",
    padding: "20px",
    borderRadius: "6px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
  },
  sideTitle: {
    fontSize: "15px",
    fontWeight: "600",
    margin: "18px 0 10px",
  },
  sideList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  activeItem: {
    background: "#e9f2fb",
    padding: "10px",
    borderRadius: "4px",
    fontWeight: "500",
    color: "#1f6fb2",
    marginBottom: "6px",
  },
  main: {
    flex: 1,
    background: "#fff",
    padding: "30px",
    borderRadius: "6px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
  },
  headerBar: {
    background: "#1f6fb2",
    color: "#fff",
    padding: "12px 18px",
    fontSize: "18px",
    fontWeight: "600",
    borderRadius: "4px",
    marginBottom: "20px",
  },
  description: {
    fontSize: "15px",
    lineHeight: 1.7,
    color: "#444",
    marginBottom: "30px",
  },
  reportsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "25px",
  },
  reportCard: {
    border: "1px solid #eee",
    borderRadius: "6px",
    overflow: "hidden",
    textAlign: "center",
    paddingBottom: "15px",
  },
  reportImg: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
  },
  reportTitle: {
    margin: "12px 0 6px",
    fontSize: "15px",
    fontWeight: "600",
  },
  viewLink: {
    color: "#1f6fb2",
    fontSize: "14px",
    textDecoration: "none",
  },
};
