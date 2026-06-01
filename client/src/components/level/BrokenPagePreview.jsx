function BrokenPagePreview({
  selectedElement,
  setSelectedElement,
  headerLight,
  languageExpanded,
  languageOutline,
  headingLarge,
  headingBold,
  headingWhite,
  textLarge,
  textDark,
  buttonLarge,
  buttonOutline,
}) {
  const languageLabelOne = languageExpanded ? "English" : "E";
  const languageLabelTwo = languageExpanded ? "Deutsch" : "D";

  return (
    <div className="fake-browser">
      <div className="fake-browser-bar">
        <span className="browser-dot dot-red"></span>
        <span className="browser-dot dot-yellow"></span>
        <span className="browser-dot dot-green"></span>

        <div className="fake-url">https://www.kaputtewebseite.de</div>
      </div>

      <div className="fake-page">
        <header
          className={`fake-page-header fake-selectable ${
            headerLight ? "fake-header-light" : "fake-header-dark"
          } ${selectedElement === "Header" ? "fake-selected" : ""}`}
          onClick={() => setSelectedElement("Header")}
        >
          <h2
            className={`fake-page-title fake-selectable ${
              headingLarge ? "fake-title-large" : "fake-title-small"
            } ${headingBold ? "fake-title-bold" : "fake-title-normal"} ${
              headingWhite ? "fake-title-white" : "fake-title-dark"
            } ${selectedElement === "Überschrift" ? "fake-selected" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedElement("Überschrift");
            }}
          >
            Meine Webseite
          </h2>

          <div className="fake-language-buttons">
            {[languageLabelOne, languageLabelTwo].map((label) => (
              <button
                key={label}
                className={`btn btn-light btn-sm fake-selectable ${
                  languageOutline ? "fake-real-border" : ""
                } ${selectedElement === "Sprache" ? "fake-selected" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedElement("Sprache");
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </header>

        <main
          className={`fake-page-content ${
            textLarge ? "fake-text-large" : "fake-text-small"
          } ${textDark ? "fake-text-dark" : "fake-text-muted"}`}
        >
          <div
            className={`fake-text-box ${
              selectedElement === "Text" ? "fake-selected" : ""
            }`}
            onClick={() => setSelectedElement("Text")}
          >
            <h3
              className={
                textLarge
                  ? "fake-content-title-large"
                  : "fake-content-title-small"
              }
            >
              Willkommen
            </h3>

            <p>
              Diese Webseite enthält einige typische Probleme, die du Schritt
              für Schritt verbessern kannst. Achte dabei besonders auf gut
              lesbare Texte, ausreichende Kontraste, verständliche
              Schaltflächen und eine klare visuelle Struktur.
            </p>
          </div>

          <button
            className={`btn btn-secondary fake-selectable ${
              buttonLarge ? "btn-lg" : "btn-sm"
            } ${
              buttonOutline ? "fake-button-accessible" : ""
            } ${
              selectedElement === "Button" && !buttonOutline
                ? "fake-selected"
                : ""
            }`}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedElement("Button");
            }}
          >
            Mehr
          </button>
        </main>
      </div>
    </div>
  );
}

export default BrokenPagePreview;