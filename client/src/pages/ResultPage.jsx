import { Link, useLocation } from "react-router-dom";
import "../styles/pages/resultpage.css";

function ResultPage() {
  const location = useLocation();

  const score = location.state?.score ?? 0;
  const feedback = location.state?.feedback ?? [];

  let scoreClass = "";

  if (score < 30) {
    scoreClass = "score-low";
  } else if (score < 60) {
    scoreClass = "score-medium";
  } else {
    scoreClass = "score-high";
  }

  return (
    <div className="container py-5">
      <section className="result-hero text-center mb-5">
        <p className="result-badge mb-3">Auswertung</p>

        <h1 className="result-title mb-4">Dein Ergebnis</h1>

        <p className="result-lead mb-0">
          Du hast die Webseite zu <strong>{score}%</strong> barrierefreier
          gestaltet.
        </p>
      </section>

      <section className="result-card mb-4">
        <div className="text-center mb-4">
          <div className={`score-circle ${scoreClass} mx-auto mb-3`}>
            <span>{score}%</span>
          </div>

          <h2 className="result-section-title">Lernfeedback</h2>

          <p className="result-text mb-0">
            Hier siehst du, welche Verbesserungen bereits gut umgesetzt wurden
            und worauf du noch achten kannst.
          </p>
        </div>

        <div className="feedback-list">
          {feedback.length > 0 ? (
            feedback.map((item, index) => (
              <div key={index} className="feedback-item">
                {item}
              </div>
            ))
          ) : (
            <div className="feedback-item">
              Es sind noch keine Ergebnisse vorhanden.
            </div>
          )}
        </div>
      </section>

      <div className="result-actions text-center">
        <Link to="/level/1" className="btn btn-primary result-btn-primary">
          Nochmal versuchen
        </Link>

        <Link to="/" className="btn result-btn-secondary">
          Zur Startseite
        </Link>
      </div>
    </div>
  );
}

export default ResultPage;