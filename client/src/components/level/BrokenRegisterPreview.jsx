function BrokenRegisterPreview({
  selectedElement,
  setSelectedElement,
  labelsVisible,
  requiredVisible,
  focusVisible,
  errorClear,
  passwordHint,
  checkboxLarge,
  buttonClear,
}) {
  function getInputClass(elementName) {
    if (focusVisible && selectedElement === elementName) {
      return "input-focus-visible";
    }

    if (selectedElement === elementName) {
      return "input-selected-visible";
    }

    return "";
  }

  return (
    <div className="fake-browser">
      <div className="fake-browser-bar">
        <span className="browser-dot dot-red"></span>
        <span className="browser-dot dot-yellow"></span>
        <span className="browser-dot dot-green"></span>

        <div className="fake-url">https://www.registrieren.de</div>
      </div>

      <div className="register-page">
        <div className="register-card">
          <h2>Konto erstellen</h2>
          <p className="register-intro">Registriere dich kostenlos.</p>

          <div className="register-field" onClick={() => setSelectedElement("Name")}>
            {labelsVisible && (
              <label>
                Name {requiredVisible && <span className="required-text">*</span>}
              </label>
            )}

            <input
              className={getInputClass("Name")}
              placeholder={labelsVisible ? "" : "Name"}
              value="Max Müller"
              readOnly
            />
          </div>

          <div className="register-field" onClick={() => setSelectedElement("E-Mail")}>
            {labelsVisible && (
              <label>
                E-Mail {requiredVisible && <span className="required-text">*</span>}
              </label>
            )}

            <input
              className={getInputClass("E-Mail")}
              placeholder={labelsVisible ? "" : "E-Mail"}
              value="falschemail@gmx.de"
              readOnly
            />

            <p className={errorClear ? "register-error clear-error" : "register-error"}>
              {errorClear
                ? "Bitte geben Sie eine gültige E-Mail-Adresse ein."
                : "Fehler"}
            </p>
          </div>

          <div className="register-field" onClick={() => setSelectedElement("Passwort")}>
            {labelsVisible && (
              <label>
                Passwort {requiredVisible && <span className="required-text">*</span>}
              </label>
            )}

            <input
              className={getInputClass("Passwort")}
              placeholder={labelsVisible ? "" : "Passwort"}
              value=""
              type="password"
              readOnly
            />

            {passwordHint && (
              <p className="password-hint">
                Mindestens 8 Zeichen, mit Zahl und Sonderzeichen.
              </p>
            )}
          </div>

          <div
            className={`register-checkbox fake-selectable ${
              checkboxLarge ? "checkbox-large" : ""
            } ${selectedElement === "Checkbox" ? "fake-selected" : ""}`}
            onClick={() => setSelectedElement("Checkbox")}
          >
            <input type="checkbox" readOnly />
            <span>
              Ich akzeptiere die AGB{" "}
              {requiredVisible && <span className="required-text">*</span>}
            </span>
          </div>

          <button
            className={`btn register-button fake-selectable ${
              buttonClear ? "register-button-clear" : ""
            } ${selectedElement === "Button" ? "fake-selected" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedElement("Button");
            }}
          >
            Registrieren
          </button>
        </div>
      </div>
    </div>
  );
}

export default BrokenRegisterPreview;