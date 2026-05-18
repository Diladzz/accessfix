import { Link } from "react-router-dom";
import LevelHero from "../components/level/LevelHero";

import leveloneImage from "../assets/levelone.png";
import leveltwoImage from "../assets/leveltwo.png";

import "../styles/pages/levelpage.css";

function LevelPage() {
  return (
    <div className="container py-5">
      <LevelHero
        title="Wähle ein Level"
        lead="Wende dein Wissen praktisch an und verbessere Beispiel-Webseiten mit typischen Problemen der Barrierefreiheit."
        text="Jedes Level behandelt bestimmte Accessibility-Grundlagen. Du lernst, Probleme zu erkennen und passende Verbesserungen auszuwählen."
      />

      <section className="level-wrapper">
        <div className="level-card mb-4">
          <div className="row align-items-center g-5">
            <div className="col-lg-5 text-center d-flex justify-content-center">
              <img
                src={leveloneImage}
                className="level-image"
                alt="Illustration für Level 1"
              />
            </div>

            <div className="col-lg-7">
              <div className="level-card-content">
                <p className="level-card-badge mb-3">Einsteigerlevel</p>

                <h2 className="level-card-title mb-3">Level 1</h2>

                <p className="level-card-text mb-4">
                  In diesem Level verbesserst du eine einfache Webseite und
                  achtest besonders auf Lesbarkeit, Kontrast und verständliche
                  Bedienelemente.
                </p>

                <div className="level-topics mb-4">
                  <span>Kontrast</span>
                  <span>Schriftgröße</span>
                  <span>Buttons</span>
                </div>

                <Link to="/level/1" className="btn btn-primary">
                  Level starten
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="level-card">
          <div className="row align-items-center g-5">
            <div className="col-lg-5 text-center d-flex justify-content-center">
              <img
                src={leveltwoImage}
                className="level-image"
                alt="Illustration für Level 2"
              />
            </div>

            <div className="col-lg-7">
              <div className="level-card-content">
                <p className="level-card-badge mb-3">Aufbaulevel</p>

                <h2 className="level-card-title mb-3">Level 2</h2>

                <p className="level-card-text mb-4">
                  In diesem Level analysierst du komplexere Probleme der
                  Barrierefreiheit. Achte besonders auf Kontrastverhältnisse,
                  Fokuszustände und eine klare Struktur.
                </p>

                <div className="level-topics mb-4">
                  <span>Fokus</span>
                  <span>Kontrast prüfen</span>
                  <span>Struktur</span>
                  <span>Usability</span>
                </div>

                <Link to="/level/2" className="btn btn-primary">
                  Level starten
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LevelPage;