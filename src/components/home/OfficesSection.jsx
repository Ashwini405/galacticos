export default function OfficesSection() {
  return (
    <section id="offices" className="offices-section">
      <style>{`
        .offices-section {
          position: relative;
          padding: 90px 24px; /* ⬅️ reduced height */
          background:
            linear-gradient(rgba(255,255,255,0.94), rgba(255,255,255,0.94)),
            url("https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1800&auto=format&fit=crop");
          background-size: cover;
          background-position: center;
          color: #1f2937;
          overflow: hidden;
        }

        .offices-header {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 60px; /* ⬅️ reduced */
        }

        .offices-title {
          font-size: 40px; /* ⬅️ slightly reduced */
          font-weight: 800;
          letter-spacing: 0.6px;
          margin-bottom: 14px;
        }

        .offices-subtitle {
          font-size: 16px;
          color: #4b5563;
          line-height: 1.7;
        }

        .offices-grid {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 26px; /* ⬅️ tighter */
        }

        .office-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 28px 26px; /* ⬅️ reduced */
          font-size: 14.5px;
          line-height: 1.65;
          color: #4b5563;
          box-shadow: 0 8px 22px rgba(0,0,0,0.06);
          position: relative;
          transition: all 0.4s ease;
        }

        .office-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #2563eb, #60a5fa);
          opacity: 0;
          transition: opacity 0.4s ease;
          border-radius: 16px 16px 0 0;
        }

        .office-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 22px 44px rgba(0,0,0,0.1);
        }

        .office-card:hover::before {
          opacity: 1;
        }

        .office-title {
          font-size: 16px;
          font-weight: 800;
          letter-spacing: 1px;
          margin-bottom: 14px;
          color: #111827;
        }

        .office-card p {
          margin-bottom: 8px;
        }

        .office-card p:last-child {
          margin-bottom: 0;
        }

        /* Subtle glow (reduced size) */
        .glow {
          position: absolute;
          width: 320px;
          height: 320px;
          background: rgba(37,99,235,0.12);
          filter: blur(120px);
          border-radius: 50%;
          z-index: 0;
        }

        .glow.one {
          top: -120px;
          left: -120px;
        }

        .glow.two {
          bottom: -120px;
          right: -120px;
          background: rgba(236,72,153,0.12);
        }

        /* RESPONSIVE */
        @media (max-width: 1200px) {
          .offices-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .offices-title {
            font-size: 30px;
          }

          .offices-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Decorative glows */}
      <div className="glow one"></div>
      <div className="glow two"></div>

      {/* Header */}
      <div className="offices-header">
        <h2 className="offices-title">Our Global Offices</h2>
        <p className="offices-subtitle">
          Strategically located across continents, enabling us to deliver
          innovation and world-class solutions worldwide.
        </p>
      </div>

      {/* Offices */}
      <div className="offices-grid">
        <div className="office-card">
          <div className="office-title">HYDERABAD · INDIA</div>
          <p>
            Plot #111, 1st Floor, Road #10,<br />
            Jubilee Hills, Hyderabad – 500 033
          </p>
          <p>Phone: +91-40-67191000</p>
          <p>info@sagarsoft.in</p>
        </div>

        <div className="office-card">
          <div className="office-title">BANGALORE · INDIA</div>
          <p>
            91springboard, 4th Floor,<br />
            Residency Road, MG Road,<br />
            Bengaluru – 560025
          </p>
          <p>info@sagarsoft.in</p>
        </div>

        <div className="office-card">
          <div className="office-title">NEW YORK · USA</div>
          <p>
            113-25 Queens Blvd, Suite<br />
            #114 & #116, Forest Hills, NY 11375
          </p>
          <p>Phone: +1 718-746-3860</p>
          <p>info@sagarsoft.com</p>
        </div>

        <div className="office-card">
          <div className="office-title">CONNECTICUT · USA</div>
          <p>
            Sagarsoft Inc<br />
            200 Glastonbury Blvd, Suite #304,<br />
            Glastonbury, CT 06033
          </p>
          <p>Phone: +1 860-633-2025</p>
          <p>info@sagarsoft.com</p>
        </div>

        <div className="office-card">
          <div className="office-title">NEW JERSEY · USA</div>
          <p>
            Infoway Software<br />
            388 Washington Road, Suite A,<br />
            Sayreville, NJ 08872
          </p>
          <p>Phone: +1 732-238-2120</p>
          <p>
            A wholly owned subsidiary of<br />
            Sagarsoft (India) Limited
          </p>
        </div>
      </div>
    </section>
  );
}