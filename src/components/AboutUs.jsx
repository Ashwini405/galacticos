import React from "react";

export default function AboutUs() {
  return (
    <>
      {/* INLINE STYLES */}
      <style>{`
        body {
          margin: 0;
          font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          color: #222;
        }

        .hero {
          height: 85vh;
          background: linear-gradient(
              rgba(0,0,0,0.55),
              rgba(0,0,0,0.55)
            ),
            url("https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80");
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          padding: 0 8%;
          color: #fff;
        }

        .hero h1 {
          font-size: 52px;
          margin-bottom: 16px;
        }

        .hero p {
          font-size: 20px;
          max-width: 520px;
        }

        .section {
          padding: 80px 8%;
        }

        .section h2 {
          font-size: 40px;
          margin-bottom: 20px;
          color: #0b5aa2;
        }

        .section p {
          font-size: 18px;
          line-height: 1.8;
          max-width: 900px;
        }

        .split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          background: #071b33;
          color: #fff;
        }

        .split img {
          width: 100%;
          border-radius: 12px;
        }

        .timeline {
          position: relative;
          margin-top: 60px;
        }

        .timeline::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: #ccc;
        }

        .event {
          display: flex;
          margin-bottom: 60px;
        }

        .event.left {
          justify-content: flex-start;
        }

        .event.right {
          justify-content: flex-end;
        }

        .event-content {
          width: 45%;
          background: #f8f9fb;
          padding: 24px;
          border-radius: 8px;
        }

        .year {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          background: #0b5aa2;
          color: #fff;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }

        .team {
          background: #0b5aa2;
          color: #fff;
          padding: 80px 8%;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 30px;
          margin-top: 50px;
        }

        .card {
          background: #fff;
          color: #000;
          border-radius: 10px;
          overflow: hidden;
          text-align: center;
        }

        .card img {
          width: 100%;
          height: 280px;
          object-fit: cover;
          filter: grayscale(100%);
        }

        .card h4 {
          margin: 16px 0 4px;
          color: #0b5aa2;
        }

        .card p {
          font-size: 14px;
          padding: 0 16px 20px;
          color: #555;
        }

        @media (max-width: 900px) {
          .split {
            grid-template-columns: 1fr;
          }

          .timeline::before {
            left: 10px;
          }

          .event {
            justify-content: flex-start !important;
          }

          .event-content {
            width: 100%;
            margin-left: 40px;
          }

          .year {
            left: 10px;
            transform: none;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="hero">
        <div>
          <h1>Enabling your Home runs</h1>
          <p>
            When your technology investments return impressive business gains.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="section">
        <h2>Enabling businesses to grow and gain competitive advantage</h2>
        <p>
          Sagarsoft helps enterprises accelerate digital transformation through
          technology excellence, deep domain expertise, and customer-centric
          engagement models. We create long-term value by aligning innovation
          with business outcomes.
        </p>
      </section>

      {/* ROOTS */}
      <section className="section split">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80"
          alt="Technology roots"
        />
        <div>
          <h2 style={{ color: "#fff" }}>Our roots go deep</h2>
          <p>
            For nearly three decades, Sagarsoft has successfully partnered with
            global enterprises, delivering transformation across technology,
            delivery, and operations. We balance human ingenuity with cutting-
            edge technology to drive measurable ROI.
          </p>
        </div>
      </section>

      {/* WHAT WE SEEK */}
      <section className="section">
        <h2>What we seek</h2>
        <p>
          We focus on intelligent, optimal, and feasible applications of
          technology. Our approach combines engineering rigor with business
          context to ensure technology investments become high-performance
          enablers and a source of competitive advantage.
        </p>
      </section>

      {/* HISTORY */}
      <section className="section">
        <h2>Our History</h2>

        <div className="timeline">
          <div className="year">1996</div>
          <div className="event left">
            <div className="event-content">
              <h4>Hello, World!</h4>
              <p>
                Sagarsoft was founded as a differentiated technology solutions
                provider with a strong focus on software development excellence.
              </p>
            </div>
          </div>

          <div className="year" style={{ top: "160px" }}>2000</div>
          <div className="event right">
            <div className="event-content">
              <h4>Global Expansion</h4>
              <p>
                Went public and expanded into the North American market with
                ADM and network support offerings.
              </p>
            </div>
          </div>

          <div className="year" style={{ top: "320px" }}>2015</div>
          <div className="event left">
            <div className="event-content">
              <h4>ODC & Growth</h4>
              <p>
                Established Offshore Development Centers and transitioned
                listings to BSE, marking a major growth milestone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MANAGEMENT TEAM */}
      <section className="team">
        <h2 style={{ textAlign: "center" }}>Management Team</h2>

        <div className="team-grid">
          <div className="card">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" />
            <h4>Jagadeesh Manupati</h4>
            <p>Managing Director</p>
          </div>

          <div className="card">
            <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />
            <h4>K Pradeep Kumar Reddy</h4>
            <p>Executive Director & CFO</p>
          </div>

          <div className="card">
            <img src="https://randomuser.me/api/portraits/men/60.jpg" alt="" />
            <h4>Kondrella Roopesh</h4>
            <p>Non-Executive Director</p>
          </div>
        </div>
      </section>
    </>
  );
}
