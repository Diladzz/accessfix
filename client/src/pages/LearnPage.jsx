import { Link } from "react-router-dom";
import {
  FaEye,
  FaKeyboard,
  FaComments,
  FaCode,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import "../styles/pages/learnpage.css";

function LearnPage() {
  return (
    <main className="learn-page">
      <section className="learn-hero">
        <span className="learn-badge">
          Grundlagen der Web-Barrierefreiheit
        </span>

        <h1 className="learn-title">
          Lerne die wichtigsten Prinzipien
        </h1>

        <p className="learn-lead">
          Barrierefreiheit im Web bedeutet, dass Webseiten für möglichst viele
          Menschen wahrnehmbar, bedienbar und verständlich sind.
        </p>
      </section>

      <section className="learn-card">
        <h2 className="learn-section-title">Die vier WCAG-Prinzipien</h2>

        <p className="learn-card-text">
          Die WCAG beschreiben zentrale Anforderungen an barrierefreie Webseiten.
        </p>

        <div className="principles-grid">
          <article className="principle-item">
            <div className="principle-icon">
              <FaEye />
            </div>
            <h3>Wahrnehmbar</h3>
            <p>Inhalte müssen so dargestellt werden, dass Nutzerinnen und Nutzer sie wahrnehmen können.</p>
          </article>

          <article className="principle-item">
            <div className="principle-icon">
              <FaKeyboard />
            </div>
            <h3>Bedienbar</h3>
            <p>Eine Webseite muss auch ohne Maus bedienbar sein.</p>
          </article>

          <article className="principle-item">
            <div className="principle-icon">
              <FaComments />
            </div>
            <h3>Verständlich</h3>
            <p>Inhalte und Funktionen sollen klar und nachvollziehbar sein.</p>
          </article>

          <article className="principle-item">
            <div className="principle-icon">
              <FaCode />
            </div>
            <h3>Robust</h3>
            <p>Webseiten sollten technisch sauber aufgebaut sein.</p>
          </article>
        </div>
      </section>

      <section className="learn-card">
        <h2 className="learn-section-title">Worauf achtest du in der Übung?</h2>

        <div className="learn-check-list">
          <div className="learn-check-item">
            <FaCheckCircle />
            <span><strong>Farbkontrast:</strong> Text muss gut lesbar sein.</span>
          </div>

          <div className="learn-check-item">
            <FaCheckCircle />
            <span><strong>Schriftgröße:</strong> Texte sollten groß genug sein.</span>
          </div>

          <div className="learn-check-item">
            <FaCheckCircle />
            <span><strong>Buttons:</strong> Schaltflächen brauchen klare Beschriftungen.</span>
          </div>

          <div className="learn-check-item">
            <FaCheckCircle />
            <span><strong>Fokuszustände:</strong> Ausgewählte Elemente müssen sichtbar sein.</span>
          </div>
        </div>
      </section>

      <section className="learn-practice-card">
        <div>
          <h2>Bereit für die Praxis?</h2>
          <p>Im nächsten Schritt verbesserst du selbst eine Webseite.</p>
        </div>

        <Link to="/level" className="btn btn-primary btn-lg">
          <FaArrowRight className="button-icon" />
          Zu den Levels
        </Link>
      </section>
    </main>
  );
}

export default LearnPage;