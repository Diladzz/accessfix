import { useState } from "react";
import {
  FiEye,
  FiRefreshCw,
  FiInfo,
  FiAlertTriangle,
  FiHeart,
  FiRepeat,
} from "react-icons/fi";
import { FaTree, FaLeaf } from "react-icons/fa";

import "../styles/pages/simulatorpage.css";

function SimulatorPage() {
  const [redGreen, setRedGreen] = useState(false);
  const [lowVision, setLowVision] = useState(false);
  const [lowContrast, setLowContrast] = useState(false);
  const [achromatopsia, setAchromatopsia] = useState(false);
  const [tunnelVision, setTunnelVision] = useState(false);

  const activeEffects = [
    redGreen ? "sim-red-green" : "",
    lowVision ? "sim-low-vision" : "",
    lowContrast ? "sim-low-contrast" : "",
    achromatopsia ? "sim-achromatopsia" : "",
    tunnelVision ? "sim-tunnel-vision" : "",
  ].join(" ");

  function resetSimulator() {
    setRedGreen(false);
    setLowVision(false);
    setLowContrast(false);
    setAchromatopsia(false);
    setTunnelVision(false);
  }

  const activeInfo = tunnelVision
    ? {
        icon: <FiEye />,
        title: "Tunnelblick",
        text: "Bei einem eingeschränkten Gesichtsfeld wird nur ein kleiner Bereich in der Mitte deutlich wahrgenommen. Randbereiche können stark eingeschränkt sein.",
        change: "Der äußere Bereich der Webseite wird abgedunkelt, sodass nur die Mitte gut sichtbar bleibt.",
        recommendation:
          "Wichtige Inhalte sollten klar strukturiert und nicht nur am Rand der Seite platziert werden.",
        wcag: "1.3.2 Meaningful Sequence, 2.4.3 Focus Order",
      }
    : achromatopsia
    ? {
        icon: <FiEye />,
        title: "Achromatopsie",
        text: "Menschen mit Achromatopsie nehmen Farben kaum oder gar nicht wahr. Inhalte erscheinen hauptsächlich in Graustufen.",
        change:
          "Farben verschwinden fast vollständig. Unterschiede zwischen grünen, roten oder gelben Elementen sind schwer erkennbar.",
        recommendation:
          "Informationen sollten nicht nur über Farbe vermittelt werden, sondern zusätzlich durch Text, Symbole oder Struktur.",
        wcag: "1.4.1 Use of Color",
      }
    : lowContrast
    ? {
        icon: <FiEye />,
        title: "Kontrastschwäche",
        text: "Bei einer Kontrastschwäche werden Unterschiede zwischen Vordergrund und Hintergrund schlechter wahrgenommen.",
        change:
          "Texte, Buttons und Flächen wirken blasser und sind schwieriger voneinander zu unterscheiden.",
        recommendation:
          "Texte und Bedienelemente sollten ausreichend Kontrast zum Hintergrund haben.",
        wcag: "1.4.3 Contrast Minimum",
      }
    : lowVision
    ? {
        icon: <FiEye />,
        title: "Sehschwäche",
        text: "Menschen mit Sehschwäche nehmen kleine Texte und feine Details oft unscharf oder weniger deutlich wahr.",
        change:
          "Die Webseite wird unscharf dargestellt. Besonders kleine Texte und Details sind schwerer lesbar.",
        recommendation:
          "Texte sollten gut lesbar, ausreichend groß und klar strukturiert sein.",
        wcag: "1.4.4 Resize Text",
      }
    : redGreen
    ? {
        icon: <FiAlertTriangle />,
        title: "Rot-Grün-Schwäche",
        text: "Bei einer Rot-Grün-Schwäche können rote und grüne Farbtöne schwer voneinander unterschieden werden.",
        change:
          "Grüne Elemente wirken gelblicher, rote Elemente wirken bräunlicher. Farbunterschiede werden weniger eindeutig.",
        recommendation:
          "Wichtige Informationen sollten nicht ausschließlich durch Rot oder Grün dargestellt werden.",
        wcag: "1.4.1 Use of Color",
      }
    : {
        icon: <FiInfo />,
        title: "Warum ist das wichtig?",
        text: "Menschen nehmen Webseiten unterschiedlich wahr. Der Simulator zeigt, wie visuelle Einschränkungen die Nutzung beeinflussen können.",
        change:
          "Aktiviere links eine Einschränkung, um die Auswirkungen auf die Beispiel-Webseite zu sehen.",
        recommendation: "",
        wcag: "",
      };

  return (
    <main className="simulator-page">
      <section className="simulator-header">
        <h1>Accessibility Simulator</h1>
        <p>
          Erlebe, wie sich eine Webseite mit verschiedenen visuellen
          Einschränkungen verändert.
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
            <span>Achromatopsie</span>
            <input
              type="checkbox"
              checked={achromatopsia}
              onChange={() => setAchromatopsia(!achromatopsia)}
            />
          </label>

          <label className="sim-option">
            <span>Tunnelblick</span>
            <input
              type="checkbox"
              checked={tunnelVision}
              onChange={() => setTunnelVision(!tunnelVision)}
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

                <button>Produkte entdecken</button>
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
          <div className="sim-info-header">
            <div className="sim-info-icon">
              {activeInfo.icon}
            </div>

            <div>
              <h2>{activeInfo.title}</h2>

              <span className="sim-wcag-inline">
                {activeInfo.wcag}
              </span>
            </div>
          </div>

          <p>{activeInfo.text}</p>

          <div className="change-box">
            <strong>Was verändert sich?</strong>
            <p>{activeInfo.change}</p>
          </div>

          <div className="recommendation-box">
            <strong>Empfehlung</strong>
            <p>{activeInfo.recommendation}</p>
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