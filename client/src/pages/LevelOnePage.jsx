import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BrokenPagePreview from "../components/level/BrokenPagePreview";
import ControlPanel from "../components/level/ControlPanel_temp";
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
      feedbackList.push(
        "Header und Überschrift brauchen einen klaren Kontrast, z. B. dunkler Hintergrund mit heller Schrift oder heller Hintergrund mit dunkler Schrift."
      );
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

    const calculatedScore = Math.round((points / 4) * 100);

    navigate("/ergebnis", {
      state: {
        score: calculatedScore,
        feedback: feedbackList,
      },
    });
  }

  return (
    <div className="container py-5">
      <section className="level-one-hero text-center mb-5">
        <p className="level-one-badge mb-3">Level 1</p>

        <h1 className="level-one-title mb-4">
          Verbessere eine fehlerhafte Webseite
        </h1>

        <p className="level-one-lead mb-3">
          Klicke auf ein Element und verbessere es im Bearbeitungsbereich.
        </p>
      </section>

      <section className="level-workspace">
        <div className="preview-card">
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
        </div>

        <aside className="control-card">
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
        </aside>
      </section>
    </div>
  );
}

export default LevelOnePage;