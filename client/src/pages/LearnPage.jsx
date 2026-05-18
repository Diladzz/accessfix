import { Link } from "react-router-dom";
import LevelHero from "../components/level/LevelHero";
import "../styles/pages/learnpage.css";

function LearnPage() {
  return (
    <div className="container py-5">
      <LevelHero
        title="Lerne die wichtigsten Prinzipien"
        lead="Barrierefreiheit im Web bedeutet, dass Webseiten so gestaltet werden, dass möglichst viele Menschen sie wahrnehmen, verstehen und bedienen können."
        text="Dazu gehören ausreichende Kontraste, gut lesbare Texte, verständliche Buttons und sichtbare Fokuszustände."
      />

      <section className="learn-card mb-4">
        <h2 className="learn-section-title mb-3">
          Die vier WCAG-Prinzipien
        </h2>

        <p className="learn-card-text">
          Die WCAG beschreiben zentrale Anforderungen an barrierefreie Webseiten.
        </p>

        <div className="principle-item">
          <h3>1. Wahrnehmbar</h3>

          <p>
            Inhalte müssen so dargestellt werden, dass Nutzerinnen und Nutzer
            sie wahrnehmen können.
          </p>
        </div>

        <div className="principle-item">
          <h3>2. Bedienbar</h3>

          <p>
            Eine Webseite muss auch ohne Maus bedienbar sein.
          </p>
        </div>

        <div className="principle-item">
          <h3>3. Verständlich</h3>

          <p>
            Inhalte und Funktionen sollen klar und nachvollziehbar sein.
          </p>
        </div>

        <div className="principle-item">
          <h3>4. Robust</h3>

          <p>
            Webseiten sollten technisch sauber aufgebaut sein.
          </p>
        </div>
      </section>

      <section className="learn-card mb-4">
        <h2 className="learn-section-title mb-3">
          Worauf achtest du in der Übung?
        </h2>

        <ul className="learn-list">
          <li>
            <strong>Farbkontrast:</strong> Text muss gut lesbar sein.
          </li>

          <li>
            <strong>Schriftgröße:</strong> Texte sollten groß genug sein.
          </li>

          <li>
            <strong>Buttons:</strong> Schaltflächen brauchen klare Beschriftungen.
          </li>

          <li>
            <strong>Fokuszustände:</strong> Ausgewählte Elemente müssen sichtbar sein.
          </li>
        </ul>
      </section>

      <section className="learn-card text-center">
        <h2 className="learn-section-title mb-3">
          Bereit für die Praxis?
        </h2>

        <p className="page-text mb-4">
          Im nächsten Schritt verbesserst du selbst eine Webseite.
        </p>

        <Link to="/level" className="btn btn-primary btn-lg">
          Zu den Levels
        </Link>
      </section>
    </div>
  );
}

export default LearnPage;