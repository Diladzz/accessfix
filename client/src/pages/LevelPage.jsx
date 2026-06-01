import { Link } from "react-router-dom";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

import leveloneImage from "../assets/levelone.png";
import leveltwoImage from "../assets/leveltwo.png";

import "../styles/pages/levelpage.css";

function LevelPage() {
  return (
    <main className="level-page">
      <section className="level-hero">
        <span className="level-badge">
          Interaktive Übungen
        </span>

        <h1 className="level-title">Wähle dein Level</h1>

        <p className="level-lead">
          Wende dein Wissen praktisch an und verbessere Beispiel-Webseiten mit
          typischen Problemen der Web-Barrierefreiheit.
        </p>
      </section>

      <section className="level-wrapper">
        <article className="level-card">
          <div className="level-image-box">
            <img
              src={leveloneImage}
              className="level-image"
              alt="Illustration für Level 1"
            />
          </div>

          <div className="level-card-content">
            <p className="level-card-badge">Einsteigerlevel</p>

            <h2 className="level-card-title">Level 1</h2>

            <p className="level-card-text">
              Verbessere eine einfache Webseite und achte besonders auf
              Lesbarkeit, Kontrast und verständliche Bedienelemente.
            </p>

            <Link to="/level/1" className="btn btn-primary level-button">
              Level starten
              <FaArrowRight className="button-icon-right" />
            </Link>
          </div>
        </article>

        <article className="level-card">
          <div className="level-image-box">
            <img
              src={leveltwoImage}
              className="level-image"
              alt="Illustration für Level 2"
            />
          </div>

          <div className="level-card-content">
            <p className="level-card-badge">Aufbaulevel</p>

            <h2 className="level-card-title">Level 2</h2>

            <p className="level-card-text">
              Analysiere komplexere Probleme der Barrierefreiheit und achte auf
              Kontrastverhältnisse, Fokuszustände und klare Struktur.
            </p>

            <Link to="/level/2" className="btn btn-primary level-button">
              Level starten
              <FaArrowRight className="button-icon-right" />
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}

export default LevelPage;