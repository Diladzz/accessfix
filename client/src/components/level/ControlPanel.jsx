import {
  FiType, FiEye, FiGlobe, FiMaximize2, FiSquare, FiCheck, FiEdit3, FiLayers, FiSun, FiMoon,
} from "react-icons/fi";

function ControlPanel({
  selectedElement,
  setHeaderLight,
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
        <>
          <button className="tool-option" onClick={() => setHeaderLight(false)}>
            <span><FiMoon /></span>
            <div>
              <strong>Hintergrund dunkel</strong>
              <p>Setze den Header dunkel.</p>
            </div>
          </button>

          <button className="tool-option" onClick={() => setHeaderLight(true)}>
            <span><FiSun /></span>
            <div>
              <strong>Hintergrund hell</strong>
              <p>Setze den Header hell.</p>
            </div>
          </button>
        </>
      )}

      {selectedElement === "Sprache" && (
        <>
          <button className="tool-option" onClick={() => setLanguageExpanded(true)}>
            <span><FiGlobe /></span>
            <div>
              <strong>Sprache ausschreiben</strong>
              <p>Nutze verständliche Beschriftungen.</p>
            </div>
          </button>

          <button className="tool-option" onClick={() => setLanguageOutline(true)}>
            <span><FiSquare /></span>
            <div>
              <strong>Rand sichtbar machen</strong>
              <p>Erhöhe die Sichtbarkeit der Buttons.</p>
            </div>
          </button>
        </>
      )}

      {selectedElement === "Überschrift" && (
        <>
          <button className="tool-option" onClick={() => setHeadingLarge(true)}>
            <span><FiType /></span>
            <div>
              <strong>Textgröße ändern</strong>
              <p>Mache die Überschrift größer.</p>
            </div>
          </button>

          <button className="tool-option" onClick={() => setHeadingBold(true)}>
            <span><FiEdit3 /></span>
            <div>
              <strong>Schrift fetter machen</strong>
              <p>Erhöhe die Lesbarkeit.</p>
            </div>
          </button>

          <button className="tool-option" onClick={() => setHeadingWhite(true)}>
            <span><FiEye /></span>
            <div>
              <strong>Kontrast verbessern</strong>
              <p>Nutze helle Schrift auf dunklem Hintergrund.</p>
            </div>
          </button>
        </>
      )}

      {selectedElement === "Text" && (
        <>
          <button className="tool-option" onClick={() => setTextLarge(true)}>
            <span><FiType /></span>
            <div>
              <strong>Text vergrößern</strong>
              <p>Erhöhe die Schriftgröße.</p>
            </div>
          </button>

          <button className="tool-option" onClick={() => setTextDark(true)}>
            <span><FiEye /></span>
            <div>
              <strong>Kontrast verbessern</strong>
              <p>Mache den Text dunkler.</p>
            </div>
          </button>
        </>
      )}

      {selectedElement === "Button" && (
        <>
          <button className="tool-option" onClick={() => setButtonLarge(true)}>
            <span><FiMaximize2 /></span>
            <div>
              <strong>Button vergrößern</strong>
              <p>Erhöhe die Klickfläche.</p>
            </div>
          </button>

          <button className="tool-option" onClick={() => {
    console.log("RAND WURDE GEKLICKT");
    setButtonOutline(true);
  }}>
            <span><FiSquare /></span>
            <div>
              <strong>Rand hinzufügen</strong>
              <p>Mache den Button deutlicher.</p>
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