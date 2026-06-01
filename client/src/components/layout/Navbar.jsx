import { Link } from "react-router-dom";
import { FiHome, FiBookOpen, FiLayers } from "react-icons/fi";
import "../../styles/navbar.css";

function Navbar() {
  return (
    <nav className="site-navbar">
      <div className="container">
        <Link to="/" className="site-navbar-brand">
          AccessFix
        </Link>

        <div className="site-navbar-links">
          <Link to="/" className="site-navbar-link">
            <FiHome className="nav-icon" />
            Startseite
          </Link>

          <Link to="/lernen" className="site-navbar-link">
            <FiBookOpen className="nav-icon" />
            Lernen
          </Link>

          <Link to="/level" className="site-navbar-link">
            <FiLayers className="nav-icon" />
            Level
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;