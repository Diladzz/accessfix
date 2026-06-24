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
    const feedbackList = [
      {
        label: "Labels sichtbar",
        success: labelsVisible,
        text: labelsVisible
          ? "Die Eingabefelder haben sichtbare Labels."
          : "Die Eingabefelder brauchen sichtbare Labels.",
      },
      {
        label: "Pflichtfelder markiert",
        success: requiredVisible,
        text: requiredVisible
          ? "Pflichtfelder sind klar gekennzeichnet."
          : "Pflichtfelder sollten deutlich markiert werden.",
      },
      {
        label: "Fokus sichtbar",
        success: focusVisible,
        text: focusVisible
          ? "Der Fokuszustand ist deutlich sichtbar."
          : "Der Fokuszustand sollte besser sichtbar sein.",
      },
      {
        label: "Fehlermeldung verständlich",
        success: errorClear,
        text: errorClear
          ? "Die Fehlermeldung erklärt das Problem verständlich."
          : "Die Fehlermeldung sollte genauer erklären, was falsch ist.",
      },
      {
        label: "Passwort-Hinweis vorhanden",
        success: passwordHint,
        text: passwordHint
          ? "Der Passwort-Hinweis unterstützt die Eingabe."
          : "Ein Hinweis zum Passwort würde die Eingabe erleichtern.",
      },
      {
        label: "Checkbox vergrößert",
        success: checkboxLarge,
        text: checkboxLarge
          ? "Die Checkbox hat eine größere Klickfläche."
          : "Die Checkbox sollte größer und leichter bedienbar sein.",
      },
      {
        label: "Button verbessert",
        success: buttonClear,
        text: buttonClear
          ? "Der Button ist klarer und verständlicher gestaltet."
          : "Der Button sollte deutlicher erkennbar sein.",
      },
    ];

    const points = feedbackList.filter((item) => item.success).length;

    navigate("/ergebnis", {
      state: {
        score: Math.round((points / feedbackList.length) * 100),
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
            labelsVisible={labelsVisible}
            requiredVisible={requiredVisible}
            focusVisible={focusVisible}
            errorClear={errorClear}
            passwordHint={passwordHint}
            checkboxLarge={checkboxLarge}
            buttonClear={buttonClear}
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