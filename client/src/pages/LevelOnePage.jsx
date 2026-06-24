import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiLogOut, FiInfo } from "react-icons/fi";

import LevelWorkspace from "../components/level/LevelWorkspace";
import BrokenPagePreview from "../components/level/BrokenPagePreview";
import ControlPanel from "../components/level/ControlPanel";

import "../styles/pages/levelone.css";

function LevelOnePage() {
  const navigate = useNavigate();

  const [selectedElement, setSelectedElement] = useState("");

  const [headerLight, setHeaderLight] = useState(false);
  const [languageExpanded, setLanguageExpanded] = useState(false);
  const [languageOutline, setLanguageOutline] = useState(false);
  const [headingLarge, setHeadingLarge] = useState(false);
  const [headingBold, setHeadingBold] = useState(false);
  const [headingWhite, setHeadingWhite] = useState(false);
  const [textLarge, setTextLarge] = useState(false);
  const [textDark, setTextDark] = useState(false);
  const [buttonLarge, setButtonLarge] = useState(false);
  const [buttonOutline, setButtonOutline] = useState(false);

  function handleFinish() {
    const feedbackList = [
      {
        label: "Sprache ausgeschrieben",
        success: languageExpanded,
        text: languageExpanded
          ? "Die Sprachbuttons sind ausgeschrieben und verständlicher."
          : "Die Sprachbuttons sollten ausgeschrieben werden.",
      },
      {
        label: "Überschrift vergrößert",
        success: headingLarge,
        text: headingLarge
          ? "Die Überschrift ist größer und besser wahrnehmbar."
          : "Die Überschrift sollte größer dargestellt werden.",
      },
      {
        label: "Schriftstärke erhöht",
        success: headingBold,
        text: headingBold
          ? "Die Überschrift ist durch die stärkere Schrift besser lesbar."
          : "Die Überschrift sollte stärker hervorgehoben werden.",
      },
      {
        label: "Kontrast im Header verbessert",
        success: headingWhite,
        text: headingWhite
          ? "Die weiße Schrift verbessert den Kontrast auf dem dunklen Header."
          : "Die Schrift im Header sollte heller sein.",
      },
      {
        label: "Fließtext vergrößert",
        success: textLarge,
        text: textLarge
          ? "Der Fließtext ist größer und dadurch besser lesbar."
          : "Der Fließtext sollte größer dargestellt werden.",
      },
      {
        label: "Textfarbe verbessert",
        success: textDark,
        text: textDark
          ? "Die dunklere Textfarbe verbessert die Lesbarkeit."
          : "Die Textfarbe sollte dunkler sein.",
      },
      {
        label: "Button vergrößert",
        success: buttonLarge,
        text: buttonLarge
          ? "Der Button hat eine größere Klickfläche."
          : "Der Button sollte größer sein.",
      },
      {
        label: "Button hervorgehoben",
        success: buttonOutline,
        text: buttonOutline
          ? "Der Button ist durch den Rand besser erkennbar."
          : "Der Button sollte durch einen sichtbaren Rand hervorgehoben werden.",
      },
    ];

    const points = feedbackList.filter((item) => item.success).length;

    navigate("/ergebnis", {
      state: {
        score: Math.round((points / feedbackList.length) * 100),
        feedback: feedbackList,
        retryPath: "/level/1",
        nextPath: "/level/2",
      },
    });
  }

  return (
    <div className="container-fluid level-page-shell">
      <section className="level-topbar">
        <div className="level-topbar-text">
          <h1>Level 1: Grundlagen der Lesbarkeit</h1>
          <p>Verbessere die Beispiel-Webseite und achte auf Barrierefreiheit.</p>
        </div>

        <Link to="/level" className="btn level-exit-btn">
          <FiLogOut className="button-icon" />
          Level verlassen
        </Link>
      </section>

      <LevelWorkspace
        preview={
          <>
            <h2 className="section-title">Beispiel-Webseite</h2>

            <p className="helper-text">
              Klicke auf ein Element, das du verbessern möchtest.
            </p>

            <BrokenPagePreview
              selectedElement={selectedElement}
              setSelectedElement={setSelectedElement}
              headerLight={headerLight}
              languageExpanded={languageExpanded}
              languageOutline={languageOutline}
              headingLarge={headingLarge}
              headingBold={headingBold}
              headingWhite={headingWhite}
              textLarge={textLarge}
              textDark={textDark}
              buttonLarge={buttonLarge}
              buttonOutline={buttonOutline}
            />
          </>
        }
        controls={
          <ControlPanel
            selectedElement={selectedElement}
            languageExpanded={languageExpanded}
            languageOutline={languageOutline}
            headingLarge={headingLarge}
            headingBold={headingBold}
            headingWhite={headingWhite}
            textLarge={textLarge}
            textDark={textDark}
            buttonLarge={buttonLarge}
            buttonOutline={buttonOutline}
            setLanguageExpanded={setLanguageExpanded}
            setLanguageOutline={setLanguageOutline}
            setHeadingLarge={setHeadingLarge}
            setHeadingBold={setHeadingBold}
            setHeadingWhite={setHeadingWhite}
            setTextLarge={setTextLarge}
            setTextDark={setTextDark}
            setButtonLarge={setButtonLarge}
            setButtonOutline={setButtonOutline}
            handleFinish={handleFinish}
          />
        }
      />

      <section className="level-hint-box">
        <div className="level-hint-icon">
          <FiInfo />
        </div>

        <div>
          <h2>Hinweis</h2>
          <p>
            Achte besonders auf lesbare Schriftgrößen, ausreichende Kontraste,
            verständliche Buttons und eine klare visuelle Struktur.
          </p>
        </div>
      </section>
    </div>
  );
}

export default LevelOnePage;