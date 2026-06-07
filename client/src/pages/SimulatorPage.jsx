import { useState } from "react";
import {
  FiEye,
  FiRefreshCw,
  FiInfo,
  FiAlertTriangle,
  FiHeart,
  FiRepeat,
} from "react-icons/fi";
import { FaKeyboard, FaTree, FaLeaf } from "react-icons/fa";

import "../styles/pages/simulatorpage.css";

function SimulatorPage() {
  const [redGreen, setRedGreen] = useState(false);
  const [lowVision, setLowVision] = useState(false);
  const [lowContrast, setLowContrast] = useState(false);
  const [keyboard, setKeyboard] = useState(false);

  const activeEffects = [
    redGreen ? "sim-red-green" : "",
    lowVision ? "sim-low-vision" : "",
    lowContrast ? "sim-low-contrast" : "",
  ].join(" ");

  function resetSimulator() {
    setRedGreen(false);
    setLowVision(false);
    setLowContrast(false);
    setKeyboard(false);
  }

  const activeInfo = keyboard
    ? {
        icon: <FaKeyboard />,
        title: "Tastatur-Navigation",
        text: "Einige Menschen bedienen Webseiten ohne Maus. Deshalb muss sichtbar sein, welches Element gerade fokussiert ist.",
        change: "Der Button erhält einen deutlichen Fokusrahmen.",
        wcag: "2.4.7 Focus Visible",
      }
    : lowContrast
    ? {
        icon: <FiEye />,
        title: "Kontrastschwäche",
        text: "Bei geringem Kontrast heben sich Texte und Bedienelemente schlechter vom Hintergrund ab.",
        change: "Die Webseite wirkt blasser und Inhalte sind schwerer lesbar.",
        wcag: "1.4.3 Contrast Minimum",
      }
    : lowVision
    ? {
        icon: <FiEye />,
        title: "Sehschwäche",
        text: "Bei eingeschränkter Sehschärfe werden kleine Texte und Details schwerer wahrnehmbar.",
        change: "Die Vorschau wird leicht unscharf dargestellt.",
        wcag: "1.4.4 Resize Text",
      }
    : redGreen
    ? {
        icon: <FiAlertTriangle />,
        title: "Rot-Grün-Schwäche",
        text: "Rot und Grün können schwer unterscheidbar sein. Informationen sollten deshalb nicht nur über Farbe vermittelt werden.",
        change:
          "Grüne Elemente wirken gelblicher, rote Elemente wirken bräunlicher.",
        wcag: "1.4.1 Use of Color",
      }
    : {
        icon: <FiInfo />,
        title: "Warum ist das wichtig?",
        text: "Viele Menschen nehmen Webseiten unterschiedlich wahr. Der Simulator zeigt, warum Kontrast, Fokus und klare Strukturen wichtig sind.",
        change: "Aktiviere links eine Einschränkung, um die Auswirkungen zu sehen.",
        wcag: "WCAG: wahrnehmbar, bedienbar, verständlich",
      };

  return (
    <main className="simulator-page">
      <section className="simulator-header">
        <h1>Accessibility Simulator</h1>
        <p>
          Erlebe, wie sich eine Webseite mit verschiedenen Einschränkungen
          verändert.
        </p>
      </section>

      <section className="simulator-layout">
        <aside className="simulator-panel">
          <h2>Einschränkungen</h2>

          <label className="sim-option">
            <span>Rot-Grün-Schwäche</span>
            <input
              type="checkbox"
              checked={redGreen}
              onChange={() => setRedGreen(!redGreen)}
            />
          </label>

          <label className="sim-option">
            <span>Sehschwäche</span>
            <input
              type="checkbox"
              checked={lowVision}
              onChange={() => setLowVision(!lowVision)}
            />
          </label>

          <label className="sim-option">
            <span>Kontrastschwäche</span>
            <input
              type="checkbox"
              checked={lowContrast}
              onChange={() => setLowContrast(!lowContrast)}
            />
          </label>

          <label className="sim-option">
            <span>Tastatur-Navigation</span>
            <input
              type="checkbox"
              checked={keyboard}
              onChange={() => setKeyboard(!keyboard)}
            />
          </label>

          <button className="btn btn-primary sim-reset" onClick={resetSimulator}>
            <FiRefreshCw className="button-icon" />
            Alle zurücksetzen
          </button>
        </aside>

        <section className="sim-preview">
          <div className={`demo-site ${activeEffects}`}>
            <nav className="demo-nav">
              <strong>
                <FaLeaf />
                Naturora
              </strong>

              <div>
                <span>Startseite</span>
                <span>Produkte</span>
                <span>Über uns</span>
                <span>Kontakt</span>
              </div>
            </nav>

            <div className="demo-content">
              <div className="demo-text">
                <h2>
                  Nachhaltige Produkte für eine <span>bessere Zukunft.</span>
                </h2>

                <p>
                  Entdecke umweltfreundliche Produkte und erlebe, warum gute
                  Kontraste und klare Beschriftungen wichtig sind.
                </p>

                <div className="benefit-row">
                  <div>
                    <span className="benefit-icon benefit-green">
                      <FaLeaf />
                    </span>
                    <strong>Natürliche Materialien</strong>
                  </div>

                  <div>
                    <span className="benefit-icon benefit-red">
                      <FiHeart />
                    </span>
                    <strong>Sozial verantwortlich</strong>
                  </div>

                  <div>
                    <span className="benefit-icon benefit-yellow">
                      <FiRepeat />
                    </span>
                    <strong>Recycelbare Verpackung</strong>
                  </div>
                </div>

                <button className={keyboard ? "demo-focus" : ""}>
                  Produkte entdecken
                </button>
              </div>

              <div className="plant-card">
                <div className="plant">🪴</div>
              </div>
            </div>

            <div className="demo-bottom">
              <div className="bottom-green">
                <FaLeaf />
                <div>
                  <strong>Umweltfreundlich</strong>
                  <p>Für eine bessere Zukunft.</p>
                </div>
              </div>

              <div className="bottom-red">
                <FaTree />
                <div>
                  <strong>Weniger Abfall</strong>
                  <p>Für unseren Planeten.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <aside className="sim-info">
          <div className="sim-info-icon">{activeInfo.icon}</div>

          <h2>{activeInfo.title}</h2>
          <p>{activeInfo.text}</p>

          <div className="change-box">
            <strong>Was verändert sich?</strong>
            <p>{activeInfo.change}</p>
          </div>

          <div className="wcag-box">
            <strong>WCAG Bezug</strong>
            <span>{activeInfo.wcag}</span>
          </div>
        </aside>
      </section>

      <p className="simulator-note">
        Hinweis: Diese Simulation dient der Veranschaulichung und ist keine
        medizinisch exakte Darstellung.
      </p>
    </main>
  );
}

export default SimulatorPage;