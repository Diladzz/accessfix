import {
  FiType,
  FiEye,
  FiGlobe,
  FiMaximize2,
  FiSquare,
  FiCheck,
  FiEdit3,
} from "react-icons/fi";

function ControlPanel({
  selectedElement,

  languageExpanded,
  languageOutline,
  headingLarge,
  headingBold,
  headingWhite,
  textLarge,
  textDark,
  buttonLarge,
  buttonOutline,

  setLanguageExpanded,
  setLanguageOutline,
  setHeadingLarge,
  setHeadingBold,
  setHeadingWhite,
  setTextLarge,
  setTextDark,
  setButtonLarge,
  setButtonOutline,
  handleFinish,
}) {
  return (
    <div className="control-panel-wrapper">
      <h3 className="control-panel-title">Bearbeitungsbereich</h3>

      <p className="control-panel-text">
        Wähle ein Element aus, um es zu bearbeiten.
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

      <h4 className="control-group-title">Element bearbeiten</h4>

      {!selectedElement && (
        <div className="control-option-box">
          <p className="mb-0">Bitte wähle zuerst ein Element aus.</p>
        </div>
      )}

      {selectedElement === "Header" && (
        <button
          className={`tool-option ${headingWhite ? "active" : ""}`}
          onClick={() => setHeadingWhite((prev) => !prev)}
        >
          <span>
            <FiEye />
          </span>

          <div>
            <strong>Schriftfarbe weiß machen</strong>
            <p>Verbessert den Kontrast auf dem dunklen Hintergrund.</p>
          </div>
        </button>
      )}

      {selectedElement === "Sprache" && (
        <>
          <button
            className={`tool-option ${languageExpanded ? "active" : ""}`}
            onClick={() => setLanguageExpanded((prev) => !prev)}
          >
            <span>
              <FiGlobe />
            </span>

            <div>
              <strong>Sprache ausschreiben</strong>
              <p>Ersetzt Abkürzungen durch verständliche Bezeichnungen.</p>
            </div>
          </button>

          <button
            className={`tool-option ${languageOutline ? "active" : ""}`}
            onClick={() => setLanguageOutline((prev) => !prev)}
          >
            <span>
              <FiSquare />
            </span>

            <div>
              <strong>Sprachbuttons hervorheben</strong>
              <p>Macht die Auswahl leichter erkennbar.</p>
            </div>
          </button>
        </>
      )}

      {selectedElement === "Überschrift" && (
        <>
          <button
            className={`tool-option ${headingLarge ? "active" : ""}`}
            onClick={() => setHeadingLarge((prev) => !prev)}
          >
            <span>
              <FiType />
            </span>

            <div>
              <strong>Überschrift vergrößern</strong>
              <p>Verbessert die Wahrnehmbarkeit der Überschrift.</p>
            </div>
          </button>

          <button
            className={`tool-option ${headingBold ? "active" : ""}`}
            onClick={() => setHeadingBold((prev) => !prev)}
          >
            <span>
              <FiEdit3 />
            </span>

            <div>
              <strong>Schriftstärke erhöhen</strong>
              <p>Macht die Überschrift leichter lesbar.</p>
            </div>
          </button>

          <button
            className={`tool-option ${headingWhite ? "active" : ""}`}
            onClick={() => setHeadingWhite((prev) => !prev)}
          >
            <span>
              <FiEye />
            </span>

            <div>
              <strong>Schriftfarbe weiß machen</strong>
              <p>Verbessert den Kontrast auf dunklem Hintergrund.</p>
            </div>
          </button>
        </>
      )}

      {selectedElement === "Text" && (
        <>
          <button
            className={`tool-option ${textLarge ? "active" : ""}`}
            onClick={() => setTextLarge((prev) => !prev)}
          >
            <span>
              <FiType />
            </span>

            <div>
              <strong>Fließtext vergrößern</strong>
              <p>Erleichtert das Lesen längerer Texte.</p>
            </div>
          </button>

          <button
            className={`tool-option ${textDark ? "active" : ""}`}
            onClick={() => setTextDark((prev) => !prev)}
          >
            <span>
              <FiEye />
            </span>

            <div>
              <strong>Textfarbe abdunkeln</strong>
              <p>Verbessert die Lesbarkeit des Inhalts.</p>
            </div>
          </button>
        </>
      )}

      {selectedElement === "Button" && (
        <>
          <button
            className={`tool-option ${buttonLarge ? "active" : ""}`}
            onClick={() => setButtonLarge((prev) => !prev)}
          >
            <span>
              <FiMaximize2 />
            </span>

            <div>
              <strong>Button vergrößern</strong>
              <p>Vergrößert die nutzbare Klickfläche.</p>
            </div>
          </button>

          <button
            className={`tool-option ${buttonOutline ? "active" : ""}`}
            onClick={() => setButtonOutline((prev) => !prev)}
          >
            <span>
              <FiSquare />
            </span>

            <div>
              <strong>Button hervorheben</strong>
              <p>Macht die Schaltfläche besser erkennbar.</p>
            </div>
          </button>
        </>
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

export default ControlPanel;