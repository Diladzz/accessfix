import urlImage from "../../assets/url.png";

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
      <img src={urlImage} alt="Browser-Leiste" className="fake-browser-url" />

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

          <div className="d-flex gap-2">
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
          className={`fake-page-content fake-selectable ${
            textLarge ? "fake-text-large" : "fake-text-small"
          } ${textDark ? "fake-text-dark" : "fake-text-muted"} ${
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
            Diese Webseite enthält einige typische Probleme, die du Schritt für
            Schritt verbessern kannst. Achte dabei besonders auf gut lesbare
            Texte, ausreichende Kontraste, verständliche Schaltflächen und eine
            klare visuelle Struktur. Durch deine Änderungen soll die Seite für
            möglichst viele Menschen einfacher nutzbar werden.
          </p>

          <button
            className={`btn btn-secondary ${
              buttonLarge ? "btn-lg" : "btn-sm"
            } fake-selectable ${buttonOutline ? "fake-real-border" : ""} ${
              selectedElement === "Button" ? "fake-selected" : ""
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