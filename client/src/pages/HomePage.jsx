import { Link } from "react-router-dom";
import {
  FaBookOpen,
  FaBullseye,
  FaTrophy,
  FaShieldAlt,
  FaArrowRight,
  FaEye,
} from "react-icons/fa";
import "../styles/pages/homepage.css";

function HomePage() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <h1 className="home-title">AccessFix</h1>

        <p className="home-lead">
          Lerne Web-Barrierefreiheit <span>praxisnah.</span>
        </p>

        <p className="home-text">
          Erkenne typische Barrieren auf Webseiten, verbessere sie direkt selbst
          und erhalte sofort verständliches Feedback.
        </p>

        <Link to="/lernen" className="btn btn-primary btn-lg home-main-button">
          <FaArrowRight className="button-icon" />
          Jetzt loslegen
        </Link>

        <p className="home-note">
          <FaShieldAlt />
          100% kostenlos · Kein Login erforderlich
        </p>
      </section>

      <section className="home-cards" aria-label="Was du mit AccessFix lernst">
        <Link to="/lernen" className="home-card home-card-blue">
          <div className="home-card-icon home-card-icon-blue">
            <FaBookOpen />
          </div>

          <h2>Lernen</h2>

          <p>Verstehe die Grundlagen der Web-Barrierefreiheit und WCAG.</p>

          <span className="home-card-line home-card-line-blue" />
        </Link>

        <Link to="/level" className="home-card home-card-green">
          <div className="home-card-icon home-card-icon-green">
            <FaBullseye />
          </div>

          <h2>Üben</h2>

          <p>Analysiere echte Webseiten-Probleme und löse interaktive Aufgaben.</p>

          <span className="home-card-line home-card-line-green" />
        </Link>

        <Link to="/level/1" className="home-card home-card-purple">
          <div className="home-card-icon home-card-icon-purple">
            <FaTrophy />
          </div>

          <h2>Verbessern</h2>

          <p>Setze barrierefreie Verbesserungen um und erhalte direktes Feedback.</p>

          <span className="home-card-line home-card-line-purple" />
        </Link>

        <Link to="/simulator" className="home-card home-card-orange">
          <div className="home-card-icon home-card-icon-orange">
            <FaEye />
          </div>

          <h2>Nachempfinden</h2>

          <p>
            Erlebe mit dem Simulator, wie Menschen mit visuellen Einschränkungen
            Webseiten wahrnehmen.
          </p>

          <span className="home-card-line home-card-line-orange" />
        </Link>
      </section>
    </main>
  );
}

export default HomePage;