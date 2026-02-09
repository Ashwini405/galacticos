import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="logo">
          <img src="/logo.png" alt="Sagarsoft" />
        </div>

        <nav className="nav-menu">
          <Link className="active" to="/">HOME</Link>
          <Link to="/about-us">ABOUT US</Link>


          <div className="dropdown">
            <span className="dropdown-title">
              SERVICES <span className="arrow">▾</span>
            </span>

            <div className="dropdown-menu">
              <Link to="/services/application-engineering">
                Application Engineering
              </Link>
              <Link to="/services/cloud">Cloud</Link>
              <Link to="/services/devops">DevOps</Link>
              <Link to="/services/data-engineering">Data Engineering</Link>
              <Link to="/services/cloud-saas">Cloud SaaS</Link>
              <Link to="/services/quality-engineering">Quality Engineering</Link>
              <Link to="/services/ui-ux">UX / UI</Link>
              <Link to="/services/mobility">Mobility</Link>
            </div>
          </div>

          <Link to="/investors">INVESTORS</Link>
          <Link to="/careers">CAREERS</Link>
          <Link to="/contact">CONTACT US</Link>
        </nav>
      </div>
    </header>
  );
}
