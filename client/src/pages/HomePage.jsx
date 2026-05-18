import { Link } from "react-router-dom";
import LevelHero from "../components/level/LevelHero";
import "../styles/pages/homepage.css";

function HomePage() {
  return (
    <div className="container py-5">
      <LevelHero
        title="AccessFix"
        lead="Lerne, worauf es bei barrierefreien Webseiten ankommt, und setze wichtige Verbesserungen direkt selbst um."
        text="AccessFix ist eine interaktive Lernanwendung, mit der du typische Probleme der Web-Barrierefreiheit erkennen und schrittweise verbessern kannst."
      />

      <div className="home-action text-center">
        <p className="page-text mb-4">
          Du erhältst zuerst die wichtigsten Grundlagen und wendest dein Wissen
          danach direkt in einer Übung an.
        </p>

        <Link to="/lernen" className="btn btn-primary btn-lg">
          Jetzt loslegen
        </Link>
      </div>
    </div>
  );
}

export default HomePage;