export default function OfficesSection() {
  return (
    <section id="offices" className="offices-section">
      <style>{`
        .offices-section {
          padding: 100px 24px;
          background: #ffffff;
          color: #333;
        }

        .offices-title {
          text-align: center;
          font-size: 42px;
          font-weight: 800;
          margin-bottom: 80px;
        }

        .offices-grid {
          max-width: 1300px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
        }

        .office-card {
          padding: 0 24px;
          font-size: 14.5px;
          line-height: 1.7;
          color: #555;
          border-right: 1px solid #eee;
        }

        .office-card:last-child {
          border-right: none;
        }

        .office-title {
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 14px;
          color: #333;
          letter-spacing: 0.5px;
        }

        .office-card p {
          margin-bottom: 8px;
        }

        /* RESPONSIVE */
        @media (max-width: 1200px) {
          .offices-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
          }

          .office-card {
            border-right: none;
            padding: 0;
          }
        }

        @media (max-width: 600px) {
          .offices-grid {
            grid-template-columns: 1fr;
          }

          .offices-title {
            font-size: 30px;
            margin-bottom: 50px;
          }
        }
      `}</style>

      <h2 className="offices-title">Our Offices</h2>

      <div className="offices-grid">
        <div className="office-card">
          <div className="office-title">HYDERABAD</div>
          <p>
            Plot #111, 1st Floor, Road #10,<br />
            Jubilee Hills, Hyderabad – 500 033, India.
          </p>
          <p>Phone : +91-40-67191000</p>
          <p>info@sagarsoft.in</p>
        </div>

        <div className="office-card">
          <div className="office-title">BANGALORE</div>
          <p>
            91springboard, 4th floor,<br />
            Gopala Krishna Complex 45/3,<br />
            Residency Road, Mahatma Gandhi Rd,<br />
            Bengaluru, Karnataka 560025
          </p>
          <p>info@sagarsoft.in</p>
        </div>

        <div className="office-card">
          <div className="office-title">NEW YORK</div>
          <p>
            113-25, Queens Blvd, Suite<br />
            #114 & #116, Forest Hills, NY 11375.
          </p>
          <p>Phone : +1 718-746-3860</p>
          <p>info@sagarsoft.com</p>
        </div>

        <div className="office-card">
          <div className="office-title">CONNECTICUT</div>
          <p>
            SAGARSOFT INC<br />
            200 Glastonbury Blvd. Suite #304,<br />
            Glastonbury CT 06033.
          </p>
          <p>Phone : +1 860-633-2025</p>
          <p>info@sagarsoft.com</p>
        </div>

        <div className="office-card">
          <div className="office-title">NEW JERSEY</div>
          <p>
            INFOWAY SOFTWARE<br />
            388 Washington Road, Suite A,<br />
            Sayreville, NJ 08872, US
          </p>
          <p>info@infowaysoftware.com</p>
          <p>Phone : +1 732-238-2120</p>
          <p>
            A wholly owned subsidiary of<br />
            Sagarsoft (India) Limited.
          </p>
        </div>
      </div>
    </section>
  );
}
