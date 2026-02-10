export default function IndustriesSection() {
  return (
    <section id="industries" className="engage-section">
      <style>{`
        .engage-section {
          padding: 100px 24px;
          background: #ffffff;
          color: #333;
          text-align: center;
        }

        .engage-title {
          font-size: 42px;
          font-weight: 800;
          margin-bottom: 12px;
        }

        .engage-subtitle {
          font-size: 16px;
          color: #6b7280;
          max-width: 760px;
          margin: 0 auto 12px;
        }

        .engage-subtext {
          font-size: 16px;
          color: #6b7280;
          margin-bottom: 60px;
        }

        .engage-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .engage-card {
          position: relative;
          height: 280px;
          background-size: cover;
          background-position: center;
          overflow: hidden;
          cursor: pointer;
        }

        .engage-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.75),
            rgba(0,0,0,0.15)
          );
        }

        .engage-label {
          position: absolute;
          left: 24px;
          bottom: 24px;
          z-index: 2;
          color: #ffffff;
          font-size: 20px;
          font-weight: 700;
        }

        /* BACKGROUND IMAGES */
        .professional {
          background-image: url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80");
        }

        .managed {
          background-image: url("https://images.unsplash.com/photo-1581092334904-52e2f99fd5b9?auto=format&fit=crop&w=800&q=80");
        }

        .build {
          background-image: url("https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=800&q=80");
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .engage-grid {
            grid-template-columns: 1fr;
          }

          .engage-card {
            height: 240px;
          }

          .engage-title {
            font-size: 32px;
          }
        }
      `}</style>

      <h2 className="engage-title">How we engage</h2>

      <p className="engage-subtitle">
        We are truly delighted to enable our customers achieve positive business outcomes.
      </p>

      <p className="engage-subtext">
        Our engagement models are.....
      </p>

      <div className="engage-grid">
        <div className="engage-card professional">
          <div className="engage-label">Professional Services</div>
        </div>

        <div className="engage-card managed">
          <div className="engage-label">Managed Services</div>
        </div>

        <div className="engage-card build">
          <div className="engage-label">Build Your Own</div>
        </div>
      </div>
    </section>
  );
}
