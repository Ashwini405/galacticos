import { useNavigate } from "react-router-dom";
import {
  FaCloud,
  FaCogs,
  FaDatabase,
  FaMobileAlt,
  FaCode,
  FaVial,
} from "react-icons/fa";

export default function ServicesSection() {
  const navigate = useNavigate();

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
        }

        .services-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
          perspective: 1000px;
        }

        .flip-card {
          height: 250px;
          cursor: pointer;
        }

        .flip-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }

        .flip-card:hover .flip-inner {
          transform: rotateY(180deg);
        }

        .flip-front, .flip-back {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 18px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          backface-visibility: hidden;
          border: 1px solid rgba(255,255,255,0.2);
          backdrop-filter: blur(10px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.4);
        }

        .flip-front {
          align-items: center;
          text-align: center;
        }

        .flip-back {
          transform: rotateY(180deg);
        }

        .service-icon {
          font-size: 36px;
          margin-bottom: 12px;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }

        .flip-front h3 {
          font-size: 18px;
          font-weight: 700;
        }

        .flip-back ul {
          list-style: none;
          padding: 0;
          margin: 0;
          font-size: 14px;
          line-height: 1.8;
        }

        .flip-back ul li::before {
          content: "• ";
        }

        /* Different Card Colors */
        .card1 { background: linear-gradient(135deg, rgba(99,102,241,0.7), rgba(59,130,246,0.7)); }
        .card2 { background: linear-gradient(135deg, rgba(16,185,129,0.7), rgba(6,182,212,0.7)); }
        .card3 { background: linear-gradient(135deg, rgba(244,114,182,0.7), rgba(139,92,246,0.7)); }
        .card4 { background: linear-gradient(135deg, rgba(234,179,8,0.7), rgba(249,115,22,0.7)); }
        .card5 { background: linear-gradient(135deg, rgba(14,165,233,0.7), rgba(99,102,241,0.7)); }
        .card6 { background: linear-gradient(135deg, rgba(20,184,166,0.7), rgba(16,185,129,0.7)); }
        .card7 { background: linear-gradient(135deg, rgba(168,85,247,0.7), rgba(236,72,153,0.7)); }
        .card8 { background: linear-gradient(135deg, rgba(71,85,105,0.7), rgba(30,64,175,0.7)); }

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
        Delivering Technology Transformation And Cost Optimization
      </h2>

      <div className="services-grid">

        {[
          {
            title: "Application Engineering",
            icon: <FaCode />,
            path: "/services/application-engineering",
            items: ["Transformations", "Modern Development", "Lifecycle Management"],
            className: "card1"
          },
          {
            title: "Cloud SaaS",
            icon: <FaCloud />,
            path: "/services/cloud-saas",
            items: ["Veeva", "Workday Solutions"],
            className: "card2"
          },
          {
            title: "Cloud",
            icon: <FaCloud />,
            path: "/services/cloud",
            items: ["Migration", "Support", "DevOps"],
            className: "card3"
          },
          {
            title: "Quality Engineering",
            icon: <FaVial />,
            path: "/services/quality-engineering",
            items: ["Automation", "Continuous Testing"],
            className: "card4"
          },
          {
            title: "Data Engineering",
            icon: <FaDatabase />,
            path: "/services/data-engineering",
            items: ["Analytics", "ETL", "Lakes & Warehouses"],
            className: "card5"
          },
          {
            title: "DevOps",
            icon: <FaCogs />,
            path: "/services/devops",
            items: ["Strategy", "Automation", "Transformation"],
            className: "card6"
          },
          {
            title: "UX / UI",
            icon: <FaCode />,
            path: "/services/ui-ux",
            items: ["UXE", "Front-end Engineering"],
            className: "card7"
          },
          {
            title: "Mobility",
            icon: <FaMobileAlt />,
            path: "/services/mobility",
            items: ["Custom Apps", "Native Apps", "Support"],
            className: "card8"
          }
        ].map((service, index) => (
          <div
            key={index}
            className="flip-card"
            onClick={() => navigate(service.path)}
          >
            <div className="flip-inner">
              <div className={`flip-front ${service.className}`}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
              </div>
              <div className={`flip-back ${service.className}`}>
                <ul>
                  {service.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
