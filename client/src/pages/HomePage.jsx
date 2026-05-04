import { Link } from "react-router-dom";
import "../styles/pages/homepage.css";

function HomePage() {
  return (
    <div className="container py-5">
      <section className="home-hero text-center">
        <div className="home-hero-content mx-auto">
          <p className="home-badge mb-3">Interaktives Lernen für Web Accessibility</p>

          <h1 className="home-title mb-4">AccessFix</h1>

          <p className="home-lead mb-4">
            Lerne, worauf es bei barrierefreien Webseiten ankommt, und setze
            wichtige Verbesserungen direkt selbst um.
          </p>

          <p className="home-text mb-3">
            AccessFix ist eine interaktive Lernanwendung, mit der du typische
            Probleme der Web-Barrierefreiheit erkennen und schrittweise
            verbessern kannst.
          </p>

          <p className="home-text mb-4">
            Du erhältst zuerst die wichtigsten Grundlagen und wendest dein
            Wissen danach direkt in einer Übung an. So verbindest du Theorie und
            Praxis auf verständliche Weise.
          </p>

          <Link to="/lernen" className="btn btn-primary btn-lg home-button">
            Jetzt loslegen
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;