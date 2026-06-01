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
          <button className="tool-option" onClick={() => setLabelsVisible(true)}>
            <span>
              <FiTag />
            </span>

            <div>
              <strong>Label hinzufügen</strong>
              <p>Zeige feste Beschriftungen über den Feldern.</p>
            </div>
          </button>

          <button className="tool-option" onClick={() => setRequiredVisible(true)}>
            <span>
              <FiAlertCircle />
            </span>

            <div>
              <strong>Pflichtfelder markieren</strong>
              <p>Kennzeichne wichtige Felder mit einem Stern.</p>
            </div>
          </button>

          <button className="tool-option" onClick={() => setFocusVisible(true)}>
            <span>
              <FiEye />
            </span>

            <div>
              <strong>Fokus sichtbar machen</strong>
              <p>Zeige aktive Felder deutlicher an.</p>
            </div>
          </button>
        </>
      )}

      {selectedElement === "E-Mail" && (
        <button className="tool-option" onClick={() => setErrorClear(true)}>
          <span>
            <FiAlertCircle />
          </span>

          <div>
            <strong>Fehlermeldung verbessern</strong>
            <p>Erkläre den Fehler verständlich.</p>
          </div>
        </button>
      )}

      {selectedElement === "Passwort" && (
        <button className="tool-option" onClick={() => setPasswordHint(true)}>
          <span>
            <FiInfo />
          </span>

          <div>
            <strong>Passwort-Hinweis ergänzen</strong>
            <p>Erkläre die Anforderungen an das Passwort.</p>
          </div>
        </button>
      )}

      {selectedElement === "Checkbox" && (
        <button className="tool-option" onClick={() => setCheckboxLarge(true)}>
          <span>
            <FiCheckSquare />
          </span>

          <div>
            <strong>Checkbox vergrößern</strong>
            <p>Erhöhe die Klickfläche.</p>
          </div>
        </button>
      )}

      {selectedElement === "Button" && (
        <button className="tool-option" onClick={() => setButtonClear(true)}>
          <span>
            <FiMousePointer />
          </span>

          <div>
            <strong>Button verbessern</strong>
            <p>Mache den Button deutlicher erkennbar.</p>
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