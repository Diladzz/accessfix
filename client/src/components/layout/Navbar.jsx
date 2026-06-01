import { useState } from "react";
import { Link } from "react-router-dom";
import { FiHome, FiBookOpen, FiLayers, FiMenu, FiX } from "react-icons/fi";
import "../../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="site-navbar">
      <div className="container site-navbar-container">
        <Link to="/" className="site-navbar-brand" onClick={closeMenu}>
          AccessFix
        </Link>

        <button
          className="site-navbar-toggle"
          type="button"
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="site-navbar-toggle-text">
            {menuOpen ? "Schließen" : "Menü"}
          </span>

          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <div className={`site-navbar-links ${menuOpen ? "is-open" : ""}`}>
          <Link to="/" className="site-navbar-link" onClick={closeMenu}>
            <FiHome className="nav-icon" />
            Startseite
          </Link>

          <Link to="/lernen" className="site-navbar-link" onClick={closeMenu}>
            <FiBookOpen className="nav-icon" />
            Lernen
          </Link>

          <Link to="/level" className="site-navbar-link" onClick={closeMenu}>
            <FiLayers className="nav-icon" />
            Level
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;