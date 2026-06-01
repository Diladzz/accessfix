import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiLogOut, FiInfo } from "react-icons/fi";

import LevelWorkspace from "../components/level/LevelWorkspace";
import BrokenRegisterPreview from "../components/level/BrokenRegisterPreview";
import ControlPanelLevelTwo from "../components/level/ControlPanelLevelTwo";

import "../styles/pages/leveltwo.css";

function LevelTwoPage() {
  const navigate = useNavigate();

  const [selectedElement, setSelectedElement] = useState("");

  const [labelsVisible, setLabelsVisible] = useState(false);
  const [requiredVisible, setRequiredVisible] = useState(false);
  const [focusVisible, setFocusVisible] = useState(false);
  const [errorClear, setErrorClear] = useState(false);
  const [passwordHint, setPasswordHint] = useState(false);
  const [checkboxLarge, setCheckboxLarge] = useState(false);
  const [buttonClear, setButtonClear] = useState(false);

  function handleFinish() {
    let points = 0;
    const feedbackList = [];

    if (labelsVisible) {
      points += 1;
      feedbackList.push("Die Eingabefelder haben jetzt sichtbare Labels.");
    } else {
      feedbackList.push("Die Eingabefelder brauchen sichtbare Labels.");
    }

    if (requiredVisible) {
      points += 1;
      feedbackList.push("Pflichtfelder sind jetzt besser erkennbar.");
    } else {
      feedbackList.push("Pflichtfelder sollten klar gekennzeichnet sein.");
    }

    if (focusVisible) {
      points += 1;
      feedbackList.push("Der Fokuszustand ist jetzt sichtbar.");
    } else {
      feedbackList.push("Der Fokuszustand sollte deutlicher sichtbar sein.");
    }

    if (errorClear) {
      points += 1;
      feedbackList.push("Die Fehlermeldung ist jetzt verständlicher.");
    } else {
      feedbackList.push("Fehlermeldungen sollten genau erklären, was falsch ist.");
    }

    if (passwordHint) {
      points += 1;
      feedbackList.push("Der Passwort-Hinweis hilft bei der Eingabe.");
    } else {
      feedbackList.push("Ein Hinweis zum Passwort würde die Eingabe erleichtern.");
    }

    if (checkboxLarge && buttonClear) {
      points += 1;
      feedbackList.push("Checkbox und Button sind jetzt leichter bedienbar.");
    } else {
      feedbackList.push("Checkbox und Button brauchen noch bessere Bedienbarkeit.");
    }

    navigate("/ergebnis", {
      state: {
        score: Math.round((points / 6) * 100),
        feedback: feedbackList,
        retryPath: "/level/2",
      },
    });
  }

  return (
    <div className="container-fluid level-page-shell">
      <section className="level-topbar">
        <div className="level-topbar-text">
          <h1>Level 2: Barrierefreie Registrierung</h1>
          <p>Verbessere Labels, Fokuszustände und Fehlermeldungen im Formular.</p>
        </div>

        <Link to="/level" className="btn level-exit-btn">
          <FiLogOut className="button-icon" />
          Level verlassen
        </Link>
      </section>

      <LevelWorkspace
        preview={
          <>
            <h2 className="section-title">Registrierungsformular</h2>
            <p className="helper-text">
              Klicke auf ein Formularelement, das du verbessern möchtest.
            </p>

            <BrokenRegisterPreview
              selectedElement={selectedElement}
              setSelectedElement={setSelectedElement}
              labelsVisible={labelsVisible}
              requiredVisible={requiredVisible}
              focusVisible={focusVisible}
              errorClear={errorClear}
              passwordHint={passwordHint}
              checkboxLarge={checkboxLarge}
              buttonClear={buttonClear}
            />
          </>
        }
        controls={
          <ControlPanelLevelTwo
            selectedElement={selectedElement}
            setLabelsVisible={setLabelsVisible}
            setRequiredVisible={setRequiredVisible}
            setFocusVisible={setFocusVisible}
            setErrorClear={setErrorClear}
            setPasswordHint={setPasswordHint}
            setCheckboxLarge={setCheckboxLarge}
            setButtonClear={setButtonClear}
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
            Achte bei Formularen besonders auf sichtbare Labels, klare
            Fehlermeldungen, Pflichtfeld-Hinweise und sichtbare Fokuszustände.
          </p>
        </div>
      </section>
    </div>
  );
}

export default LevelTwoPage;