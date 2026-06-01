import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiLogOut, FiInfo } from "react-icons/fi";

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
    let points = 0;
    const feedbackList = [];

    const headerContrastGood =
      (headerLight && !headingWhite) || (!headerLight && headingWhite);

    if (languageExpanded && languageOutline) {
      points += 1;
      feedbackList.push("Die Sprachbuttons sind verständlich beschriftet und gut sichtbar.");
    } else {
      feedbackList.push("Die Sprachbuttons sollten ausgeschrieben und visuell gut erkennbar sein.");
    }

    if (headerContrastGood && headingLarge && headingBold) {
      points += 1;
      feedbackList.push("Header und Überschrift haben jetzt einen guten Kontrast.");
    } else {
      feedbackList.push("Header und Überschrift brauchen einen klaren Kontrast.");
    }

    if (textLarge && textDark) {
      points += 1;
      feedbackList.push("Der Fließtext ist jetzt besser lesbar.");
    } else {
      feedbackList.push("Der Fließtext ist noch zu klein oder zu kontrastarm.");
    }

    if (buttonLarge && buttonOutline) {
      points += 1;
      feedbackList.push("Der Button ist jetzt besser sichtbar und leichter nutzbar.");
    } else {
      feedbackList.push("Der Button braucht noch mehr Größe oder einen sichtbaren Rand.");
    }

    navigate("/ergebnis", {
      state: {
        score: Math.round((points / 4) * 100),
        feedback: feedbackList,
        retryPath: "/level/1",
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
            setHeaderLight={setHeaderLight}
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