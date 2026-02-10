export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="case-section">
      <style>{`
        .case-section {
          padding: 100px 24px;
          background:
            linear-gradient(
              rgba(255,255,255,0.95),
              rgba(255,255,255,0.95)
            ),
            url("https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1920&q=80");
          background-size: cover;
          background-position: center;
        }

        .case-title {
          text-align: center;
          font-size: 40px;
          font-weight: 800;
          margin-bottom: 70px;
          color: #222;
        }

        .case-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 36px;
        }

        .case-card {
          background: #fff;
        }

        .case-img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          display: block;
        }

        .case-content {
          padding: 22px 6px 0;
        }

        .case-content h3 {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 10px;
          color: #222;
        }

        .case-content p {
          font-size: 15px;
          line-height: 1.6;
          color: #555;
          margin-bottom: 12px;
        }

        .case-link {
          font-size: 15px;
          color: #0b5ed7;
          text-decoration: none;
          font-weight: 500;
        }

        .case-link:hover {
          text-decoration: underline;
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .case-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .case-title {
            font-size: 30px;
          }

          .case-grid {
            grid-template-columns: 1fr;
          }

          .case-img {
            height: 200px;
          }
        }
      `}</style>

      <h2 className="case-title">Case Studies</h2>

      <div className="case-grid">
        {/* ROW 1 */}
        <div className="case-card">
          <img
            className="case-img"
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
            alt="Digital Transformation"
          />
          <div className="case-content">
            <h3>Digital Transformation</h3>
            <p>
              Digital DAIS, through its orchestrated services and solutions
              capability enables successful execution.
            </p>
            <a className="case-link" href="#">Read More</a>
          </div>
        </div>

        <div className="case-card">
          <img
            className="case-img"
            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80"
            alt="Life Sciences"
          />
          <div className="case-content">
            <h3>Life Sciences</h3>
            <p>
              The customer provides specialty solutions and services from
              advanced lab sciences to translational research.
            </p>
            <a className="case-link" href="#">Read More</a>
          </div>
        </div>

        <div className="case-card">
          <img
            className="case-img"
            src="https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80"
            alt="Financial Services"
          />
          <div className="case-content">
            <h3>Financial Services</h3>
            <p>
              Our DAIS application transformation approach ensures large-scale
              complex transformations.
            </p>
            <a className="case-link" href="#">Read More</a>
          </div>
        </div>

        {/* ROW 2 */}
        <div className="case-card">
          <img
            className="case-img"
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80"
            alt="Hedge Fund"
          />
          <div className="case-content">
            <h3>Hedge Fund</h3>
            <p>
              Higher investment in UX leads to greater sales growth with improved
              customer engagement.
            </p>
            <a className="case-link" href="#">Read More</a>
          </div>
        </div>

        <div className="case-card">
          <img
            className="case-img"
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
            alt="GenAI"
          />
          <div className="case-content">
            <h3>Sagarsoft’s GenAI</h3>
            <p>
              AI-driven automation for smart, scalable, and cost-effective
              business processes.
            </p>
            <a className="case-link" href="#">Read More</a>
          </div>
        </div>

        <div className="case-card">
          <img
            className="case-img"
            src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80"
            alt="Smarter Solutions"
          />
          <div className="case-content">
            <h3>Driving Business with Smarter Solutions</h3>
            <p>
              Empowering businesses with seamless digital transformation
              solutions.
            </p>
            <a className="case-link" href="#">Read More</a>
          </div>
        </div>
      </div>
    </section>
  );
}
