import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light border-bottom">
      <div className="container">
        <Link to="/" className="navbar-brand fw-bold">
          AccessFix
        </Link>

        <div className="d-flex gap-3">
          <Link to="/" className="nav-link">
            Startseite
          </Link>
          <Link to="/lernen" className="nav-link">
            Lernen
          </Link>
          <Link to="/level" className="nav-link">
            Level
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;