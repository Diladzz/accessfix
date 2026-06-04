import { useState } from "react";
import { Link } from "react-router-dom";
import { FiHome, FiBookOpen, FiLayers, FiMenu, FiX } from "react-icons/fi";
import "./navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <nav className="site-navbar">
        <div className="container site-navbar-container">
          <button
            className="site-navbar-toggle"
            type="button"
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FiMenu />
            <span>Menü</span>
          </button>

          <Link to="/" className="site-navbar-brand" onClick={closeMenu}>
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

      <div
        className={`nav-overlay ${menuOpen ? "is-open" : ""}`}
        onClick={closeMenu}
      />

      <aside className={`mobile-sidebar ${menuOpen ? "is-open" : ""}`}>
        <div className="mobile-sidebar-header">
          <span>AccessFix</span>

          <button
            type="button"
            className="mobile-sidebar-close"
            aria-label="Menü schließen"
            onClick={closeMenu}
          >
            <FiX />
          </button>
        </div>

        <Link to="/" className="mobile-sidebar-link" onClick={closeMenu}>
          <FiHome />
          Startseite
        </Link>

        <Link to="/lernen" className="mobile-sidebar-link" onClick={closeMenu}>
          <FiBookOpen />
          Lernen
        </Link>

        <Link to="/level" className="mobile-sidebar-link" onClick={closeMenu}>
          <FiLayers />
          Level
        </Link>
      </aside>
    </>
  );
}

export default Navbar;