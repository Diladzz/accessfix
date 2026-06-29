import { Link, useLocation } from "react-router-dom";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

import "../styles/pages/resultpage.css";

function ResultPage() {
  const location = useLocation();

  const score = location.state?.score ?? 0;
  const feedback = location.state?.feedback ?? [];
  const retryPath = location.state?.retryPath ?? "/level";
  const nextPath = location.state?.nextPath;

  let scoreClass = "score-high";

  if (score < 30) {
    scoreClass = "score-low";
  } else if (score < 60) {
    scoreClass = "score-medium";
  }

  return (
    <main className="result-page">
      <section className="result-header">
        <h1>Dein Ergebnis</h1>
        <p>
          Du hast die Webseite zu <strong>{score}%</strong> barrierefreier
          gestaltet.
        </p>
      </section>

      <section className="result-card">
        <div className="text-center mb-4">
          <div className={`score-circle ${scoreClass} mx-auto mb-3`}>
            <span>{score}%</span>
          </div>

          <h2 className="result-section-title">Lernfeedback</h2>

          <p className="result-text mb-0">
            Hier siehst du, welche Verbesserungen bereits umgesetzt wurden und
            welche Punkte noch fehlen.
          </p>
        </div>

        <div className="feedback-list">
          {feedback.length > 0 ? (
            feedback.map((item, index) => {
              const isOldFeedback = typeof item === "string";
              const success = isOldFeedback ? false : item.success;

              return (
                <div
                  key={index}
                  className={`feedback-item ${
                    success ? "feedback-success" : "feedback-error"
                  }`}
                >
                  <span className="feedback-icon">
                    {success ? <FaCheckCircle /> : <FaTimesCircle />}
                  </span>

                  <div>
                    <strong>
                      {isOldFeedback
                        ? "Rückmeldung"
                        : item.label}
                    </strong>
                    <p>
                      {isOldFeedback
                        ? item
                        : item.text}
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="feedback-item feedback-error">
              <span className="feedback-icon">
                <FaTimesCircle />
              </span>

              <div>
                <strong>Keine Ergebnisse</strong>
                <p>Es sind noch keine Ergebnisse vorhanden.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      <div className="result-actions">
        <Link to={retryPath} className="btn btn-primary">
          Nochmal versuchen
        </Link>

        {nextPath ? (
          <Link to={nextPath} className="btn result-btn-secondary">
            Zum nächsten Level
          </Link>
        ) : (
          <Link to="/simulator" className="btn result-btn-secondary">
            Zum Simulator
          </Link>
        )}
      </div>
    </main>
  );
}

export default ResultPage;