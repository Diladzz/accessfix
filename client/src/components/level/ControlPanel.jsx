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
        <strong>Ausgewählt:</strong>{" "}
        {selectedElement || "Noch nichts ausgewählt"}
      </div>

      {!selectedElement && (
        <div className="control-option-box">
          <p className="mb-0">Bitte wähle zuerst ein Element aus.</p>
        </div>
      )}

      {selectedElement === "Header" && (
        <div className="control-option-box">
          <h4>Header bearbeiten</h4>

          <p>Hintergrund:</p>
          <button className="btn btn-outline-primary btn-sm me-2" onClick={() => setHeaderLight(false)}>
            Dunkel
          </button>
          <button className="btn btn-outline-primary btn-sm" onClick={() => setHeaderLight(true)}>
            Hell
          </button>

          <p className="mt-3">Textfarbe:</p>
          <button className="btn btn-outline-primary btn-sm me-2" onClick={() => setHeadingWhite(false)}>
            Dunkel
          </button>
          <button className="btn btn-outline-primary btn-sm" onClick={() => setHeadingWhite(true)}>
            Weiß
          </button>
        </div>
      )}

      {selectedElement === "Sprache" && (
        <div className="control-option-box">
          <h4>Sprache bearbeiten</h4>

          <p>Beschriftung:</p>
          <button className="btn btn-outline-primary btn-sm me-2" onClick={() => setLanguageExpanded(false)}>
            E / D
          </button>
          <button className="btn btn-outline-primary btn-sm" onClick={() => setLanguageExpanded(true)}>
            English / Deutsch
          </button>

          <p className="mt-3">Sichtbarer Rand:</p>
          <button className="btn btn-outline-primary btn-sm me-2" onClick={() => setLanguageOutline(false)}>
            Aus
          </button>
          <button className="btn btn-outline-primary btn-sm" onClick={() => setLanguageOutline(true)}>
            An
          </button>
        </div>
      )}

      {selectedElement === "Überschrift" && (
        <div className="control-option-box">
          <h4>Überschrift bearbeiten</h4>

          <p>Größe:</p>
          <button className="btn btn-outline-primary btn-sm me-2" onClick={() => setHeadingLarge(false)}>
            Klein
          </button>
          <button className="btn btn-outline-primary btn-sm" onClick={() => setHeadingLarge(true)}>
            Groß
          </button>

          <p className="mt-3">Schriftstärke:</p>
          <button className="btn btn-outline-primary btn-sm me-2" onClick={() => setHeadingBold(false)}>
            Normal
          </button>
          <button className="btn btn-outline-primary btn-sm" onClick={() => setHeadingBold(true)}>
            Fett
          </button>
        </div>
      )}

      {selectedElement === "Text" && (
        <div className="control-option-box">
          <h4>Text bearbeiten</h4>

          <p>Schriftgröße:</p>
          <button className="btn btn-outline-primary btn-sm me-2" onClick={() => setTextLarge(false)}>
            Klein
          </button>
          <button className="btn btn-outline-primary btn-sm" onClick={() => setTextLarge(true)}>
            Größer
          </button>

          <p className="mt-3">Textfarbe:</p>
          <button className="btn btn-outline-primary btn-sm me-2" onClick={() => setTextDark(false)}>
            Grau
          </button>
          <button className="btn btn-outline-primary btn-sm" onClick={() => setTextDark(true)}>
            Schwarz
          </button>
        </div>
      )}

      {selectedElement === "Button" && (
        <div className="control-option-box">
          <h4>Button bearbeiten</h4>

          <p>Größe:</p>
          <button className="btn btn-outline-primary btn-sm me-2" onClick={() => setButtonLarge(false)}>
            Klein
          </button>
          <button className="btn btn-outline-primary btn-sm" onClick={() => setButtonLarge(true)}>
            Größer
          </button>

          <p className="mt-3">Rand hinzufügen:</p>
          <button className="btn btn-outline-primary btn-sm me-2" onClick={() => setButtonOutline(false)}>
            Aus
          </button>
          <button className="btn btn-outline-primary btn-sm" onClick={() => setButtonOutline(true)}>
            An
          </button>
        </div>
      )}

      <div className="control-panel-actions">
        <button className="btn btn-primary" onClick={handleFinish}>
          Fertig
        </button>
      </div>
    </div>
  );
}

export default ControlPanel;