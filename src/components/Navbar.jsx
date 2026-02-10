


// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <>
//       <style>{`
//         :root {
//           --brand-primary: #6366f1; /* Indigo */
//           --brand-secondary: #4338ca;
//           --text-main: #1e293b;
//           --text-muted: #64748b;
//           --glass-bg: rgba(255, 255, 255, 0.8);
//         }

//         .navbar {
//           position: sticky;
//           top: 0;
//           z-index: 1000;
//           background: var(--glass-bg);
//           backdrop-filter: blur(12px);
//           -webkit-backdrop-filter: blur(12px);
//           border-bottom: 1px solid rgba(226, 232, 240, 0.8);
//           height: 72px;
//           display: flex;
//           align-items: center;
//           font-family: 'Inter', system-ui, -apple-system, sans-serif;
//         }

//         .nav-container {
//           width: 100%;
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 0 2rem;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//         }

//         /* Brand Styling */
//         .logo-link {
//           text-decoration: none;
//           display: flex;
//           align-items: center;
//           gap: 10px;
//         }

//         .logo-icon {
//           width: 32px;
//           height: 32px;
//           background: linear-gradient(135deg, var(--brand-primary), var(--brand-secondary));
//           border-radius: 8px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: white;
//           font-weight: bold;
//           font-size: 1.2rem;
//         }

//         .logo-text {
//           font-size: 1.25rem;
//           font-weight: 700;
//           letter-spacing: -0.02em;
//           color: var(--text-main);
//         }

//         .logo-text span {
//           background: linear-gradient(to right, var(--brand-primary), var(--brand-secondary));
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }

//         /* Navigation Links */
//         .nav-menu {
//           display: flex;
//           align-items: center;
//           gap: 1.5rem;
//         }

//         .nav-link {
//           text-decoration: none;
//           color: var(--text-muted);
//           font-size: 0.9rem;
//           font-weight: 500;
//           padding: 0.5rem 0;
//           position: relative;
//           transition: color 0.3s ease;
//         }

//         .nav-link:hover {
//           color: var(--brand-primary);
//         }

//         /* Animated Underline Effect */
//         .nav-link::after {
//           content: '';
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           width: 0;
//           height: 2px;
//           background: var(--brand-primary);
//           transition: width 0.3s ease;
//         }

//         .nav-link:hover::after {
//           width: 100%;
//         }

//         /* Dropdown Perfection */
//         .dropdown {
//           position: relative;
//           padding: 1rem 0; /* Vertical breathing room */
//         }

//         .dropdown-trigger {
//           cursor: pointer;
//           color: var(--text-muted);
//           font-weight: 500;
//           font-size: 0.9rem;
//           display: flex;
//           align-items: center;
//           gap: 4px;
//           transition: color 0.3s;
//         }

//         /* Invisible Bridge Fix */
//         .dropdown::before {
//           content: "";
//           position: absolute;
//           top: 100%;
//           left: 0;
//           width: 100%;
//           height: 20px; /* Bridge gap */
//           display: none;
//         }

//         .dropdown:hover::before {
//           display: block;
//         }

//         .dropdown-menu {
//           position: absolute;
//           top: calc(100% + 10px);
//           left: 50%;
//           transform: translateX(-50%) translateY(10px);
//           background: white;
//           min-width: 240px;
//           border-radius: 12px;
//           box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.02);
//           padding: 0.75rem;
//           opacity: 0;
//           visibility: hidden;
//           transition: all 0.25s cubic-bezier(0.23, 1, 0.32, 1);
//         }

//         .dropdown:hover .dropdown-menu {
//           opacity: 1;
//           visibility: visible;
//           transform: translateX(-50%) translateY(0);
//         }

//         .dropdown-menu a {
//           display: block;
//           padding: 0.8rem 1rem;
//           text-decoration: none;
//           color: var(--text-muted);
//           font-size: 0.875rem;
//           border-radius: 8px;
//           transition: all 0.2s;
//         }

//         .dropdown-menu a:hover {
//           background: #f1f5f9;
//           color: var(--brand-primary);
//           transform: translateX(4px);
//         }

//         /* Modern Button */
//         .contact-btn {
//           background: var(--brand-primary);
//           color: white !important;
//           padding: 0.6rem 1.4rem;
//           border-radius: 50px; /* Pill shape */
//           font-weight: 600 !important;
//           box-shadow: 0 4px 14px rgba(99, 102, 241, 0.3);
//         }

//         .contact-btn:hover {
//           background: var(--brand-secondary);
//           transform: translateY(-1px);
//           box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
//         }

//         .contact-btn::after {
//           display: none; /* Remove underline from button */
//         }

//         .arrow {
//           font-size: 0.6rem;
//           transition: transform 0.3s;
//           opacity: 0.7;
//         }

//         .dropdown:hover .arrow {
//           transform: rotate(180deg);
//         }
//       `}</style>

//       <header className="navbar">
//         <div className="nav-container">
//           <div className="logo">
//             <Link to="/" className="logo-link">
//               <div className="logo-icon">G</div>
//               <span className="logo-text">GALACTICOS <span>NETWORK</span></span>
//             </Link>
//           </div>

//           <nav className="nav-menu">
//             <Link className="nav-link" to="/">HOME</Link>
//             <Link className="nav-link" to="/about-us">ABOUT US</Link>

//             <div className="dropdown">
//               <div className="dropdown-trigger">
//                 SERVICES <span className="arrow">▼</span>
//               </div>

//               <div className="dropdown-menu">
//                 <Link to="/services/application-engineering">Application Engineering</Link>
//                 <Link to="/services/cloud">Cloud Solutions</Link>
//                 <Link to="/services/devops">DevOps & Automation</Link>
//                 <Link to="/services/data-engineering">Data Engineering</Link>
//                 <Link to="/services/cloud-saas">Cloud SaaS</Link>
//                 <Link to="/services/quality-engineering">Quality Engineering</Link>
//                 <Link to="/services/ui-ux">UX / UI Design</Link>
//                 <Link to="/services/mobility">Mobility</Link>
//               </div>
//             </div>

//             <Link className="nav-link" to="/investors">INVESTORS</Link>
//             <Link className="nav-link" to="/careers">CAREERS</Link>
//             <Link className="nav-link contact-btn" to="/contact">CONTACT US</Link>
//           </nav>
//         </div>
//       </header>
//     </>
//   );
// }



import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <style>{`
        :root {
          --brand-primary: #6366f1;
          --brand-secondary: #4338ca;
          --text-main: #0f172a;
          --text-muted: #64748b;
          --glass-bg: rgba(255, 255, 255, 0.65);
          --glass-border: rgba(255, 255, 255, 0.4);
        }

        /* ================= NAVBAR ================= */

        .navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          height: 76px;
          background: var(--glass-bg);
          backdrop-filter: blur(18px) saturate(160%);
          -webkit-backdrop-filter: blur(18px) saturate(160%);
          border-bottom: 1px solid var(--glass-border);
          box-shadow:
            0 10px 30px rgba(15, 23, 42, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.6);
          display: flex;
          align-items: center;
          font-family: "Inter", system-ui, -apple-system, sans-serif;
        }

        .nav-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        /* ================= LOGO ================= */

        .logo-link {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .logo-img {
          width: 42px;
          height: 42px;
          object-fit: contain;
          border-radius: 10px;
          background: rgba(255,255,255,0.6);
          padding: 6px;
          box-shadow:
            0 6px 20px rgba(0,0,0,0.08),
            inset 0 0 0 1px rgba(255,255,255,0.6);
        }

        .logo-text {
          font-size: 1.3rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: var(--text-main);
          line-height: 1;
        }

        .logo-text span {
          background: linear-gradient(
            135deg,
            var(--brand-primary),
            var(--brand-secondary)
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* ================= MENU ================= */

        .nav-menu {
          display: flex;
          align-items: center;
          gap: 1.6rem;
        }

        .nav-link {
          position: relative;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-muted);
          padding: 0.5rem 0;
          transition: color 0.25s ease;
        }

        .nav-link:hover {
          color: var(--brand-primary);
        }

        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 0;
          height: 2px;
          background: linear-gradient(
            to right,
            var(--brand-primary),
            var(--brand-secondary)
          );
          transition: width 0.3s ease;
          border-radius: 2px;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        /* ================= DROPDOWN ================= */

        .dropdown {
          position: relative;
          padding: 1.2rem 0;
        }

        .dropdown-trigger {
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .arrow {
          font-size: 0.65rem;
          transition: transform 0.35s ease;
          opacity: 0.7;
        }

        .dropdown:hover .arrow {
          transform: rotate(180deg);
        }

        .dropdown::before {
          content: "";
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          height: 18px;
        }

        .dropdown-menu {
          position: absolute;
          top: calc(100% + 12px);
          left: 50%;
          transform: translateX(-50%) translateY(12px);
          min-width: 260px;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(16px);
          border-radius: 14px;
          padding: 0.6rem;
          box-shadow:
            0 30px 60px rgba(15, 23, 42, 0.15),
            inset 0 0 0 1px rgba(255,255,255,0.5);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          z-index: 999;
        }

        .dropdown:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }

        .dropdown-menu a {
          display: block;
          padding: 0.75rem 1rem;
          border-radius: 10px;
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-muted);
          transition: all 0.25s ease;
        }

        .dropdown-menu a:hover {
          background: rgba(99,102,241,0.08);
          color: var(--brand-primary);
          transform: translateX(6px);
        }

        /* ================= CTA BUTTON ================= */

        .contact-btn {
          padding: 0.6rem 1.5rem;
          border-radius: 999px;
          background: linear-gradient(
            135deg,
            var(--brand-primary),
            var(--brand-secondary)
          );
          color: #fff !important;
          font-weight: 700;
          box-shadow:
            0 10px 25px rgba(99,102,241,0.35);
        }

        .contact-btn::after {
          display: none;
        }

        .contact-btn:hover {
          transform: translateY(-1px);
          box-shadow:
            0 14px 30px rgba(99,102,241,0.45);
        }
      `}</style>

      <header className="navbar">
        <div className="nav-container">
          
          {/* LOGO */}
          <Link to="/" className="logo-link">
            <img
              src="/brand-logo.png"
              alt="Galacticos Network"
              className="logo-img"
            />
            <div className="logo-text">
              GALACTICOS <span>NETWORK</span>
            </div>
          </Link>

          {/* NAV */}
          <nav className="nav-menu">
            <Link className="nav-link" to="/">HOME</Link>
            <Link className="nav-link" to="/about-us">ABOUT US</Link>

            <div className="dropdown">
              <div className="dropdown-trigger">
                SERVICES <span className="arrow">▼</span>
              </div>

              <div className="dropdown-menu">
                <Link to="/services/application-engineering">Application Engineering</Link>
                <Link to="/services/cloud">Cloud Solutions</Link>
                <Link to="/services/devops">DevOps & Automation</Link>
                <Link to="/services/data-engineering">Data Engineering</Link>
                <Link to="/services/cloud-saas">Cloud SaaS</Link>
                <Link to="/services/quality-engineering">Quality Engineering</Link>
                <Link to="/services/ui-ux">UX / UI Design</Link>
                <Link to="/services/mobility">Mobility</Link>
              </div>
            </div>

            <Link className="nav-link" to="/investors">INVESTORS</Link>
            <Link className="nav-link" to="/careers">CAREERS</Link>
            <Link className="nav-link contact-btn" to="/contact">CONTACT US</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
