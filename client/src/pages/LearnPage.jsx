import { Link } from "react-router-dom";
import "../styles/pages/learnpage.css";

function LearnPage() {
  return (
    <div className="container py-5">
      <section className="learn-hero text-center mb-5">
        <p className="learn-badge mb-3">Grundlagen der Barrierefreiheit</p>

        <h1 className="learn-title mb-4">Lerne die wichtigsten Prinzipien</h1>

        <p className="learn-lead mb-4">
          Barrierefreiheit im Web bedeutet, dass Webseiten so gestaltet werden,
          dass möglichst viele Menschen sie wahrnehmen, verstehen und bedienen
          können.
        </p>

        <p className="learn-text">
          Dazu gehören zum Beispiel ausreichende Kontraste, gut lesbare Texte,
          verständliche Buttons, klare Strukturen und sichtbare Fokuszustände.
          Diese Grundlagen helfen nicht nur Menschen mit Einschränkungen,
          sondern verbessern die Nutzung für alle.
        </p>
      </section>

      <section className="learn-card mb-4">
        <h2 className="learn-section-title mb-3">Die vier WCAG-Prinzipien</h2>

        <p>
          Die WCAG, also die Web Content Accessibility Guidelines, beschreiben
          zentrale Anforderungen an barrierefreie Webseiten. Sie basieren auf
          vier Grundprinzipien:
        </p>

        <div className="principle-item">
          <h3>1. Wahrnehmbar</h3>
          <p>
            Inhalte müssen so dargestellt werden, dass Nutzerinnen und Nutzer
            sie wahrnehmen können. Dazu gehören zum Beispiel ausreichender
            Farbkontrast, lesbare Schriftgrößen und Alternativtexte für Bilder.
          </p>
        </div>

        <div className="principle-item">
          <h3>2. Bedienbar</h3>
          <p>
            Eine Webseite muss bedienbar sein, auch ohne Maus. Wichtig sind
            zum Beispiel Tastaturbedienung, sichtbare Fokuszustände und
            ausreichend große klickbare Elemente.
          </p>
        </div>

        <div className="principle-item">
          <h3>3. Verständlich</h3>
          <p>
            Inhalte und Funktionen sollen klar und nachvollziehbar sein.
            Buttons sollten eindeutig beschriftet sein und die Struktur der
            Webseite sollte Nutzerinnen und Nutzer gut führen.
          </p>
        </div>

        <div className="principle-item">
          <h3>4. Robust</h3>
          <p>
            Webseiten sollten technisch sauber aufgebaut sein, damit sie mit
            verschiedenen Browsern, Geräten und assistiven Technologien
            funktionieren.
          </p>
        </div>
      </section>

      <section className="learn-card mb-4">
        <h2 className="learn-section-title mb-3">Worauf achtest du in der Übung?</h2>

        <ul className="learn-list">
          <li>
            <strong>Farbkontrast:</strong> Text muss sich deutlich vom
            Hintergrund abheben.
          </li>
          <li>
            <strong>Schriftgröße:</strong> Texte sollten groß genug und gut
            lesbar sein.
          </li>
          <li>
            <strong>Buttons:</strong> Schaltflächen brauchen klare
            Beschriftungen und eine erkennbare Gestaltung.
          </li>
          <li>
            <strong>Visuelle Hierarchie:</strong> Wichtige Inhalte sollten
            auch optisch wichtig wirken.
          </li>
          <li>
            <strong>Fokuszustände:</strong> Nutzerinnen und Nutzer müssen
            erkennen können, welches Element gerade ausgewählt ist.
          </li>
        </ul>
      </section>

      <section className="learn-card text-center">
        <h2 className="learn-section-title mb-3">Bereit für die Praxis?</h2>

        <p className="learn-text mb-4">
          Im nächsten Schritt wählst du ein Level aus und verbesserst eine
          Beispiel-Webseite mit typischen Accessibility-Problemen.
        </p>

        <Link to="/level" className="btn btn-primary btn-lg">
          Zu den Levels
        </Link>
      </section>
    </div>
  );
}

export default LearnPage;