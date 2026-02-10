export default function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <style>{`
        .services-section {
          position: relative;
          padding: 100px 24px;
          background:
            linear-gradient(
              rgba(0, 0, 0, 0.65),
              rgba(0, 0, 0, 0.65)
            ),
            url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80");
          background-size: cover;
          background-position: center;
          color: #fff;
        }

        .services-title {
          max-width: 1000px;
          margin: 0 auto 70px;
          text-align: center;
          font-size: 44px;
          font-weight: 800;
          line-height: 1.3;
        }

        .services-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .service-card {
          padding: 32px 28px;
          min-height: 220px;
          color: #fff;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .service-card h3 {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .service-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
          font-size: 14px;
          line-height: 1.7;
        }

        .service-card ul li::before {
          content: "- ";
        }

        /* CARD COLORS */
        .green { background: #1fa971; }
        .orange { background: #e07a3f; }
        .teal { background: #169db2; }
        .yellow { background: #e0b10f; }
        .blue { background: #1b6fb8; }
        .cyan { background: #4fb0ad; }
        .purple { background: #a14297; }
        .darkblue { background: #365b73; }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .services-title {
            font-size: 30px;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <h2 className="services-title">
        Delivering Technology Transformation And Cost
        Optimization For Over Two Decades
      </h2>

      <div className="services-grid">
        <div className="service-card green">
          <h3>Application Engineering</h3>
          <ul>
            <li>Transformations</li>
            <li>Modern Development</li>
            <li>Life cycle management</li>
          </ul>
        </div>

        <div className="service-card orange">
          <h3>Cloud SaaS</h3>
          <ul>
            <li>Veeva</li>
            <li>Workday (HR, Fin, Planning)</li>
          </ul>
        </div>

        <div className="service-card teal">
          <h3>Cloud</h3>
          <ul>
            <li>Migration</li>
            <li>On-going Support</li>
            <li>DevOps</li>
          </ul>
        </div>

        <div className="service-card yellow">
          <h3>Quality Engineering</h3>
          <ul>
            <li>Automation</li>
            <li>Continuous Testing</li>
          </ul>
        </div>

        <div className="service-card blue">
          <h3>Data Engineering</h3>
          <ul>
            <li>Analytics</li>
            <li>Migrate / Build & Support</li>
            <li>ETL</li>
            <li>Lakes & Warehouses</li>
          </ul>
        </div>

        <div className="service-card cyan">
          <h3>DevOps</h3>
          <ul>
            <li>Strategy</li>
            <li>Automation</li>
            <li>Transformation</li>
            <li>Support</li>
          </ul>
        </div>

        <div className="service-card purple">
          <h3>UX / UI</h3>
          <ul>
            <li>Transformation</li>
            <li>UXE</li>
            <li>Front end Engineering</li>
          </ul>
        </div>

        <div className="service-card darkblue">
          <h3>Mobility</h3>
          <ul>
            <li>Custom Apps</li>
            <li>Native Apps</li>
            <li>Maintenance & Support</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
