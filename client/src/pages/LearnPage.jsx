import { Link } from "react-router-dom";
import {
  FaEye,
  FaKeyboard,
  FaComments,
  FaCode,
  FaArrowRight,
  FaFont,
  FaTag,
  FaCircleNotch,
  FaTriangleExclamation,
} from "react-icons/fa6";
import "../styles/pages/learnpage.css";

function LearnPage() {
  return (
    <main className="learn-page">
      <section className="learn-hero">
        <span className="learn-badge">
          Grundlagen der Web-Barrierefreiheit
        </span>

        <h1 className="learn-title">Lerne die wichtigsten Prinzipien</h1>

        <p className="learn-lead">
          Barrierefreiheit im Web bedeutet, dass Webseiten von möglichst vielen
          Menschen wahrgenommen, bedient und verstanden werden können,
          unabhängig von körperlichen oder kognitiven Einschränkungen.
        </p>
      </section>

      {/* --- Die vier WCAG-Prinzipien (POUR) --- */}
      <section className="learn-card">
        <h2 className="learn-section-title">Die vier WCAG-Prinzipien (POUR)</h2>

        <p className="learn-card-text">
          Die Web Content Accessibility Guidelines (WCAG) sind der
          international anerkannte Standard für barrierefreie Webinhalte. Sie
          stützen sich auf vier Grundprinzipien, die nach ihren englischen
          Anfangsbuchstaben POUR genannt werden.
        </p>

        <div className="principles-grid">
          <article className="principle-item">
            <div className="principle-icon">
              <FaEye aria-hidden="true" />
            </div>
            <h3>Wahrnehmbar</h3>
            <p>
              Inhalte müssen so dargestellt werden, dass Nutzende sie
              wahrnehmen können: etwa durch ausreichenden Kontrast und
              vergrößerbarer Schrift.
            </p>
          </article>

          <article className="principle-item">
            <div className="principle-icon">
              <FaKeyboard aria-hidden="true" />
            </div>
            <h3>Bedienbar</h3>
            <p>
              Alle Funktionen müssen sich auch ohne Maus nutzen lassen. Der
              Tastaturfokus muss dabei jederzeit sichtbar bleiben.
            </p>
          </article>

          <article className="principle-item">
            <div className="principle-icon">
              <FaComments aria-hidden="true" />
            </div>
            <h3>Verständlich</h3>
            <p>
              Texte und Bedienung sollen nachvollziehbar sein. Fehlermeldungen
              müssen klar sagen, was zu tun ist.
            </p>
          </article>

          <article className="principle-item">
            <div className="principle-icon">
              <FaCode aria-hidden="true" />
            </div>
            <h3>Robust</h3>
            <p>
              Inhalte müssen technisch sauber aufgebaut sein, damit auch
              Hilfsmittel wie Screenreader sie zuverlässig auswerten können.
            </p>
          </article>
        </div>
      </section>

      {/* --- Warum gerade diese Themen? (WebAIM-Bezug) --- */}
      <section className="learn-card learn-card--accent">
        <h2 className="learn-section-title">Warum gerade diese Themen?</h2>

        <p className="learn-card-text">
          Der jährliche WebAIM Million Report untersucht die Startseiten der
          meistbesuchten Webseiten automatisiert auf Verstöße gegen die WCAG.
          Zwei Fehler treten dabei seit Jahren am häufigsten auf: und genau
          diese übst du in den Levels.
        </p>

        <div className="stat-grid">
          <div className="stat-item">
            <span className="stat-number">83,9 %</span>
            <span className="stat-label">
              der Startseiten haben kontrastarmen Text
            </span>
          </div>
          <div className="stat-item">
            <span className="stat-number">51,0 %</span>
            <span className="stat-label">
              haben Formularfelder ohne passende Beschriftung
            </span>
          </div>
        </div>

        <p className="learn-source">Quelle: WebAIM Million Report 2026</p>
      </section>

      {/* --- Was dich in den Levels erwartet --- */}
      <section className="learn-card">
        <h2 className="learn-section-title">Was dich in den Levels erwartet</h2>

        <p className="learn-card-text">
          Die beiden Level bauen aufeinander auf: von der sichtbaren
          Gestaltung hin zu Struktur und Bedienung.
        </p>

        <div className="level-preview-grid">
          <article className="level-preview">
            <span className="level-tag">Level 1</span>
            <h3>Lesbarkeit</h3>
            <p className="level-preview-intro">
              Du verbesserst eine Beispielseite Schritt für Schritt. Im
              Mittelpunkt steht das Prinzip <strong>Wahrnehmbar</strong>.
            </p>

            <ul className="level-points">
              <li>
                <FaEye aria-hidden="true" />
                <span>Ausreichenden Farbkontrast herstellen</span>
              </li>
              <li>
                <FaFont aria-hidden="true" />
                <span>Schrift groß und lesbar machen</span>
              </li>
              <li>
                <FaKeyboard aria-hidden="true" />
                <span>Buttons klar erkennbar gestalten</span>
              </li>
              <li>
                <FaTag aria-hidden="true" />
                <span>Eine sinnvolle visuelle Hierarchie aufbauen</span>
              </li>
            </ul>
          </article>

          <article className="level-preview">
            <span className="level-tag">Level 2</span>
            <h3>Barrierefreie Formulare</h3>
            <p className="level-preview-intro">
              Am Beispiel eines Registrierungsformulars deckst du alle vier
              POUR-Prinzipien ab.
            </p>

            <ul className="level-points">
              <li>
                <FaTag aria-hidden="true" />
                <span>Felder mit sichtbaren Labels beschriften</span>
              </li>
              <li>
                <FaComments aria-hidden="true" />
                <span>Eingabefelder mit Beschriftungen versehen</span>
              </li>
              <li>
                <FaCircleNotch aria-hidden="true" />
                <span>Den Tastaturfokus sichtbar machen</span>
              </li>
              <li>
                <FaTriangleExclamation aria-hidden="true" />
                <span>Klare Fehlermeldungen und Pflichtfelder zeigen</span>
              </li>
            </ul>
          </article>
        </div>
      </section>

      {/* --- Call to Action --- */}
      <section className="learn-practice-card">
        <div>
          <h2>Bereit für die Praxis?</h2>
          <p>Im nächsten Schritt verbesserst du selbst eine Webseite.</p>
        </div>

        <Link to="/level" className="btn btn-primary btn-lg">
          <FaArrowRight className="button-icon" aria-hidden="true" />
          Zu den Levels
        </Link>
      </section>
    </main>
  );
}

export default LearnPage;
