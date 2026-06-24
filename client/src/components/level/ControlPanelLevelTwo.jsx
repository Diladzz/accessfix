import {
  FiTag,
  FiAlertCircle,
  FiEye,
  FiInfo,
  FiCheckSquare,
  FiMousePointer,
  FiCheck,
  FiEdit3,
} from "react-icons/fi";

function ControlPanelLevelTwo({
  selectedElement,

  labelsVisible,
  requiredVisible,
  focusVisible,
  errorClear,
  passwordHint,
  checkboxLarge,
  buttonClear,

  setLabelsVisible,
  setRequiredVisible,
  setFocusVisible,
  setErrorClear,
  setPasswordHint,
  setCheckboxLarge,
  setButtonClear,
  handleFinish,
}) {
  return (
    <div className="control-panel-wrapper">
      <h3 className="control-panel-title">Bearbeitungsbereich</h3>

      <p className="control-panel-text">
        Wähle ein Formularelement aus, um es barrierefreier zu machen.
      </p>

      <div className="selected-element-box">
        <span className="selected-icon">
          <FiEdit3 />
        </span>

        <div>
          <strong>Ausgewählt:</strong>
          <p>{selectedElement || "Noch nichts ausgewählt"}</p>
        </div>
      </div>

      <h4 className="control-group-title">Formular bearbeiten</h4>

      {!selectedElement && (
        <div className="control-option-box">
          <p className="mb-0">Bitte wähle zuerst ein Element aus.</p>
        </div>
      )}

      {selectedElement === "Name" && (
        <>
          <button
            className={`tool-option ${labelsVisible ? "active" : ""}`}
            onClick={() => setLabelsVisible((prev) => !prev)}
          >
            <span>
              <FiTag />
            </span>

            <div>
              <strong>Label hinzufügen</strong>
              <p>Zeigt feste Beschriftungen über den Eingabefeldern.</p>
            </div>
          </button>

          <button
            className={`tool-option ${requiredVisible ? "active" : ""}`}
            onClick={() => setRequiredVisible((prev) => !prev)}
          >
            <span>
              <FiAlertCircle />
            </span>

            <div>
              <strong>Pflichtfelder markieren</strong>
              <p>Kennzeichnet notwendige Eingaben deutlich.</p>
            </div>
          </button>

          <button
            className={`tool-option ${focusVisible ? "active" : ""}`}
            onClick={() => setFocusVisible((prev) => !prev)}
          >
            <span>
              <FiEye />
            </span>

            <div>
              <strong>Fokus sichtbar machen</strong>
              <p>Macht die aktuelle Auswahl besser erkennbar.</p>
            </div>
          </button>
        </>
      )}

      {selectedElement === "E-Mail" && (
        <button
          className={`tool-option ${errorClear ? "active" : ""}`}
          onClick={() => setErrorClear((prev) => !prev)}
        >
          <span>
            <FiAlertCircle />
          </span>

          <div>
            <strong>Fehlermeldung verbessern</strong>
            <p>Erklärt den Fehler verständlicher.</p>
          </div>
        </button>
      )}

      {selectedElement === "Passwort" && (
        <button
          className={`tool-option ${passwordHint ? "active" : ""}`}
          onClick={() => setPasswordHint((prev) => !prev)}
        >
          <span>
            <FiInfo />
          </span>

          <div>
            <strong>Passwort-Hinweis ergänzen</strong>
            <p>Zeigt die Passwortregeln direkt an.</p>
          </div>
        </button>
      )}

      {selectedElement === "Checkbox" && (
        <button
          className={`tool-option ${checkboxLarge ? "active" : ""}`}
          onClick={() => setCheckboxLarge((prev) => !prev)}
        >
          <span>
            <FiCheckSquare />
          </span>

          <div>
            <strong>Checkbox vergrößern</strong>
            <p>Vergrößert die nutzbare Klickfläche.</p>
          </div>
        </button>
      )}

      {selectedElement === "Button" && (
        <button
          className={`tool-option ${buttonClear ? "active" : ""}`}
          onClick={() => setButtonClear((prev) => !prev)}
        >
          <span>
            <FiMousePointer />
          </span>

          <div>
            <strong>Button verbessern</strong>
            <p>Macht die Aktion leichter verständlich.</p>
          </div>
        </button>
      )}

      <div className="control-panel-actions">
        <button className="btn btn-primary w-100" onClick={handleFinish}>
          <FiCheck className="button-icon" />
          Fertig
        </button>
      </div>
    </div>
  );
}

export default ControlPanelLevelTwo;