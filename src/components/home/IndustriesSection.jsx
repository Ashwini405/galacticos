export default function IndustriesSection() {
  return (
    <section id="industries" className="engage-section">
      <style>{`
        .engage-section {
          position: relative;
          padding: 80px 24px;
          overflow: hidden;
          text-align: center;
          background:
            linear-gradient(rgba(248,250,255,0.92), rgba(248,250,255,0.92)),
            url("https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=80");
          background-size: cover;
          background-position: center;
          color: #0f172a;
        }

        .engage-title {
          font-size: 36px;
          font-weight: 900;
          margin-bottom: 10px;
          background: linear-gradient(135deg, #312e81, #6d28d9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .engage-subtitle {
          font-size: 16px;
          color: #334155;
          max-width: 640px;
          margin: 0 auto 6px;
          line-height: 1.6;
        }

        .engage-subtext {
          font-size: 14px;
          color: #64748b;
          margin-bottom: 56px;
          font-style: italic;
        }

        .engage-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 36px;
        }

        /* CARD */
        .engage-card {
          height: 300px;
          border-radius: 28px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0,0,0,0.15);
          transition: transform 0.5s ease, box-shadow 0.5s ease;
          background: #0b1120;
        }

        .engage-card:hover {
          transform: translateY(-14px);
          box-shadow: 0 45px 90px rgba(0,0,0,0.22);
        }

        /* ANIMATION CONTAINER – replaces images */
        .card-animation {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 0%, transparent 70%);
        }

        .card-animation svg {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* TITLE (always visible) */
        .card-title {
          position: absolute;
          bottom: 24px;
          left: 24px;
          right: 24px;
          font-size: 22px;
          font-weight: 800;
          color: #ffffff;
          z-index: 2;
          text-align: left;
          text-shadow: 0 4px 12px rgba(0,0,0,0.45);
          transition: transform 0.4s ease;
        }

        .engage-card:hover .card-title {
          transform: translateY(-60px);
        }

        /* DESCRIPTION (hover only) */
        .card-description {
          position: absolute;
          bottom: 24px;
          left: 24px;
          right: 24px;
          font-size: 14px;
          line-height: 1.6;
          color: #ffffff;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.45s ease;
          z-index: 2;
          text-align: left;
        }

        .engage-card:hover .card-description {
          opacity: 1;
          transform: translateY(0);
        }

        /* DARK GRADIENT – unchanged */
        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.7),
            rgba(0,0,0,0.3),
            rgba(0,0,0,0)
          );
          opacity: 0.85;
          z-index: 1;
        }

        @media (max-width: 900px) {
          .engage-grid {
            grid-template-columns: 1fr;
            max-width: 460px;
          }
          .engage-card {
            height: 260px;
          }
          .engage-title {
            font-size: 30px;
          }
          .engage-section {
            padding: 60px 24px;
          }
        }
      `}</style>

      <h2 className="engage-title">How We Engage</h2>
      <p className="engage-subtitle">
        Engagement models built to align strategy, execution, and measurable impact.
      </p>
      <p className="engage-subtext">
        Designed for long-term partnerships and scalable growth
      </p>

      <div className="engage-grid">
        {/* CARD 1 – Professional Services */}
        <div className="engage-card">
          <div className="card-animation">
            <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="gradProf1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
                <linearGradient id="gradProf2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#ef4444" />
                </linearGradient>
              </defs>
              {/* pulsating nodes */}
              <circle cx="120" cy="100" r="18" fill="url(#gradProf1)" opacity="0.7">
                <animate attributeName="r" values="16;22;16" dur="4s" repeatCount="indefinite" />
              </circle>
              <circle cx="280" cy="120" r="14" fill="url(#gradProf2)" opacity="0.7">
                <animate attributeName="r" values="12;18;12" dur="3.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="200" cy="200" r="20" fill="url(#gradProf1)" opacity="0.7">
                <animate attributeName="r" values="18;24;18" dur="4.2s" repeatCount="indefinite" />
              </circle>
              <circle cx="80" cy="220" r="12" fill="url(#gradProf2)" opacity="0.7">
                <animate attributeName="r" values="10;16;10" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="320" cy="200" r="16" fill="url(#gradProf1)" opacity="0.7">
                <animate attributeName="r" values="14;20;14" dur="3.8s" repeatCount="indefinite" />
              </circle>
              {/* flowing connection lines */}
              <path d="M120 100 L200 200" stroke="url(#gradProf2)" strokeWidth="3" strokeDasharray="8 8" opacity="0.5">
                <animate attributeName="stroke-dashoffset" values="0;1000" dur="20s" repeatCount="indefinite" />
              </path>
              <path d="M280 120 L200 200" stroke="url(#gradProf1)" strokeWidth="3" strokeDasharray="6 6" opacity="0.5">
                <animate attributeName="stroke-dashoffset" values="0;800" dur="16s" repeatCount="indefinite" />
              </path>
              <path d="M200 200 L80 220" stroke="url(#gradProf2)" strokeWidth="3" strokeDasharray="10 10" opacity="0.4">
                <animate attributeName="stroke-dashoffset" values="0;600" dur="14s" repeatCount="indefinite" />
              </path>
              <path d="M200 200 L320 200" stroke="url(#gradProf1)" strokeWidth="3" strokeDasharray="7 7" opacity="0.4">
                <animate attributeName="stroke-dashoffset" values="0;700" dur="18s" repeatCount="indefinite" />
              </path>
            </svg>
          </div>
          <div className="card-overlay"></div>
          <div className="card-title">Professional Services</div>
          <div className="card-description">
            Expert consulting and precision delivery for complex digital initiatives.
          </div>
        </div>

        {/* CARD 2 – Managed Services */}
        <div className="engage-card">
          <div className="card-animation">
            <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="gradMan1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
                <linearGradient id="gradMan2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a78bfa" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
              {/* rotating gauge */}
              <circle cx="200" cy="150" r="70" fill="none" stroke="url(#gradMan1)" strokeWidth="6" strokeDasharray="4 6" opacity="0.3">
                <animate attributeName="stroke-dashoffset" values="0;628" dur="30s" repeatCount="indefinite" />
              </circle>
              <line x1="200" y1="150" x2="200" y2="90" stroke="url(#gradMan2)" strokeWidth="6" strokeLinecap="round">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 200 150"
                  to="180 200 150"
                  dur="8s"
                  repeatCount="indefinite"
                />
              </line>
              {/* pulsing data bars */}
              <rect x="120" y="200" width="24" height="40" fill="url(#gradMan1)" opacity="0.8">
                <animate attributeName="height" values="40;60;40" dur="2s" repeatCount="indefinite" />
              </rect>
              <rect x="180" y="200" width="24" height="30" fill="url(#gradMan2)" opacity="0.8">
                <animate attributeName="height" values="30;50;30" dur="2.2s" repeatCount="indefinite" />
              </rect>
              <rect x="240" y="200" width="24" height="55" fill="url(#gradMan1)" opacity="0.8">
                <animate attributeName="height" values="55;75;55" dur="2.5s" repeatCount="indefinite" />
              </rect>
              <rect x="300" y="200" width="24" height="25" fill="url(#gradMan2)" opacity="0.8">
                <animate attributeName="height" values="25;45;25" dur="1.8s" repeatCount="indefinite" />
              </rect>
            </svg>
          </div>
          <div className="card-overlay"></div>
          <div className="card-title">Managed Services</div>
          <div className="card-description">
            Reliable, proactive operations that ensure stability and performance.
          </div>
        </div>

        {/* CARD 3 – Build Your Own */}
        <div className="engage-card">
          <div className="card-animation">
            <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="gradBuild1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="#eab308" />
                </linearGradient>
                <linearGradient id="gradBuild2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
              {/* floating building blocks */}
              <rect x="80" y="180" width="60" height="40" rx="6" fill="url(#gradBuild1)" opacity="0.8">
                <animate attributeName="y" values="180;170;180" dur="3s" repeatCount="indefinite" />
              </rect>
              <rect x="150" y="150" width="50" height="50" rx="6" fill="url(#gradBuild2)" opacity="0.8">
                <animate attributeName="y" values="150;140;150" dur="3.4s" repeatCount="indefinite" />
              </rect>
              <rect x="210" y="120" width="70" height="40" rx="6" fill="url(#gradBuild1)" opacity="0.8">
                <animate attributeName="y" values="120;110;120" dur="2.8s" repeatCount="indefinite" />
              </rect>
              <rect x="290" y="90" width="40" height="60" rx="6" fill="url(#gradBuild2)" opacity="0.8">
                <animate attributeName="y" values="90;80;90" dur="3.2s" repeatCount="indefinite" />
              </rect>
              {/* plus signs */}
              <text x="50" y="80" fontSize="36" fill="url(#gradBuild1)" fontWeight="bold" opacity="0.7">+</text>
              <text x="340" y="250" fontSize="36" fill="url(#gradBuild2)" fontWeight="bold" opacity="0.7">+</text>
            </svg>
          </div>
          <div className="card-overlay"></div>
          <div className="card-title">Build Your Own</div>
          <div className="card-description">
            Tailored solutions engineered specifically around your business vision.
          </div>
        </div>
      </div>
    </section>
  );
}