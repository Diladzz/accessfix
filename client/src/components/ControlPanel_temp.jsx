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

      <h3 className="control-panel-title mb-4">Bearbeitungsbereich</h3>

      <p className="mb-3">
        Wähle ein Element aus, um es zu bearbeiten.
      </p>

      <div className="mb-4">
        <strong>Ausgewähltes Element:</strong>{" "}
        {selectedElement ? selectedElement : "Noch nichts ausgewählt"}
      </div>

      {!selectedElement && (
        <div className="control-option-box">
          <p className="mb-0">
            Bitte wähle zuerst ein Element auf der Webseite aus.
          </p>
        </div>
      )}

      {/* HEADER */}
      {selectedElement === "Header" && (
        <div className="control-option-box">
          <h5 className="mb-3">Header bearbeiten</h5>

          <p className="mb-2">Hintergrund:</p>
          <button
            className="btn btn-outline-primary btn-sm me-2"
            onClick={() => setHeaderLight(false)}
          >
            Dunkel
          </button>
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => setHeaderLight(true)}
          >
            Hell
          </button>

          <p className="mb-2 mt-3">Textfarbe:</p>
          <button
            className="btn btn-outline-primary btn-sm me-2"
            onClick={() => setHeadingWhite(false)}
          >
            Dunkel
          </button>
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => setHeadingWhite(true)}
          >
            Weiß
          </button>
        </div>
      )}

      {/* SPRACHE */}
      {selectedElement === "Sprache" && (
        <div className="control-option-box">
          <h5 className="mb-3">Sprache bearbeiten</h5>

          <p className="mb-2">Beschriftung:</p>
          <button
            className="btn btn-outline-primary btn-sm me-2"
            onClick={() => setLanguageExpanded(false)}
          >
            E / D
          </button>
          <button
            className="btn btn-outline-primary btn-sm me-2"
            onClick={() => setLanguageExpanded(true)}
          >
            English / Deutsch
          </button>

          <p className="mb-2 mt-3">Sichtbarer Rand:</p>
          <button
            className="btn btn-outline-primary btn-sm me-2"
            onClick={() => setLanguageOutline(false)}
          >
            Aus
          </button>
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => setLanguageOutline(true)}
          >
            An
          </button>
        </div>
      )}

      {/* ÜBERSCHRIFT */}
      {selectedElement === "Überschrift" && (
        <div className="control-option-box">
          <h5 className="mb-3">Überschrift bearbeiten</h5>

          <p className="mb-2">Größe:</p>
          <button
            className="btn btn-outline-primary btn-sm me-2"
            onClick={() => setHeadingLarge(false)}
          >
            Klein
          </button>
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => setHeadingLarge(true)}
          >
            Groß
          </button>

          <p className="mb-2 mt-3">Schriftstärke:</p>
          <button
            className="btn btn-outline-primary btn-sm me-2"
            onClick={() => setHeadingBold(false)}
          >
            Normal
          </button>
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => setHeadingBold(true)}
          >
            Fett
          </button>
        </div>
      )}

      {/* TEXT */}
      {selectedElement === "Text" && (
        <div className="control-option-box">
          <h5 className="mb-3">Text bearbeiten</h5>

          <p className="mb-2">Schriftgröße:</p>
          <button
            className="btn btn-outline-primary btn-sm me-2"
            onClick={() => setTextLarge(false)}
          >
            Klein
          </button>
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => setTextLarge(true)}
          >
            Größer
          </button>

          <p className="mb-2 mt-3">Textfarbe:</p>
          <button
            className="btn btn-outline-primary btn-sm me-2"
            onClick={() => setTextDark(false)}
          >
            Grau
          </button>
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => setTextDark(true)}
          >
            Schwarz
          </button>
        </div>
      )}

      {/* BUTTON */}
      {selectedElement === "Button" && (
        <div className="control-option-box">
          <h5 className="mb-3">Button bearbeiten</h5>

          <p className="mb-2">Größe:</p>
          <button
            className="btn btn-outline-primary btn-sm me-2"
            onClick={() => setButtonLarge(false)}
          >
            Klein
          </button>
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => setButtonLarge(true)}
          >
            Größer
          </button>

          <p className="mb-2 mt-3">Rand hinzufügen:</p>
          <button
            className="btn btn-outline-primary btn-sm me-2"
            onClick={() => setButtonOutline(false)}
          >
            Aus
          </button>
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => setButtonOutline(true)}
          >
            An
          </button>
        </div>
      )}

      <div className="mt-4 text-end">
        <button className="btn btn-primary" onClick={handleFinish}>
          Fertig
        </button>
      </div>
    </div>
  );
}

export default ControlPanel;