import { Link } from "react-router-dom";
import "../../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg site-navbar">
      <div className="container">
        <Link to="/" className="navbar-brand site-navbar-brand">
          AccessFix
        </Link>

        <div className="d-flex gap-3">
          <Link to="/" className="nav-link site-navbar-link">
            Startseite
          </Link>
          <Link to="/lernen" className="nav-link site-navbar-link">
            Lernen
          </Link>
          <Link to="/level" className="nav-link site-navbar-link">
            Level
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;