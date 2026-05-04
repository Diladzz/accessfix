import urlImage from "../assets/url.png";

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

  const headerIsSelected = selectedElement === "Header";
  const headingIsSelected = selectedElement === "Überschrift";
  const languageIsSelected = selectedElement === "Sprache";
  const textIsSelected = selectedElement === "Text";
  const buttonIsSelected = selectedElement === "Button";

  return (
    <div className="fake-browser">
      <img src={urlImage} alt="Browser-Leiste" className="fake-browser-url" />

      <div className="fake-page">
        <header
          className={`fake-page-header fake-selectable ${
            headerIsSelected ? "fake-selected" : ""
          }`}
          style={{
            backgroundColor: headerLight ? "#f3f8f6" : "#4a4a4a",
          }}
          onClick={() => setSelectedElement("Header")}
        >
          <h2
            className={`fake-page-title fake-selectable ${
              headingIsSelected ? "fake-selected" : ""
            }`}
            style={{
              fontSize: headingLarge ? "32px" : "22px",
              fontWeight: headingBold ? "bold" : "normal",
              color: headingWhite ? "white" : "#222222",
            }}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedElement("Überschrift");
            }}
          >
            Meine Webseite
          </h2>

          <div className="d-flex gap-2">
            <button
              className={`btn btn-light btn-sm fake-selectable ${
                languageIsSelected ? "fake-selected" : ""
              }`}
              style={{
                outline: languageOutline ? "2px solid #3a5ccc" : "none",
                outlineOffset: "2px",
              }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedElement("Sprache");
              }}
            >
              {languageLabelOne}
            </button>

            <button
              className={`btn btn-light btn-sm fake-selectable ${
                languageIsSelected ? "fake-selected" : ""
              }`}
              style={{
                outline: languageOutline ? "2px solid #3a5ccc" : "none",
                outlineOffset: "2px",
              }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedElement("Sprache");
              }}
            >
              {languageLabelTwo}
            </button>
          </div>
        </header>

        <main
          className={`fake-page-content fake-selectable ${
            textIsSelected ? "fake-selected" : ""
          }`}
          style={{
            fontSize: textLarge ? "18px" : "13px",
            color: textDark ? "#222222" : "#666666",
          }}
          onClick={() => setSelectedElement("Text")}
        >
          <h3
            style={{
              fontSize: textLarge ? "26px" : "18px",
              fontWeight: "normal",
            }}
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
          
          <p>
            Überlege außerdem, wie sich die Seite für unterschiedliche Nutzergruppen
            anfühlt. Können alle Inhalte schnell erkannt werden? Sind wichtige
            Informationen klar hervorgehoben? Kleine Anpassungen, wie eine bessere
            Struktur oder deutlichere Beschriftungen, können einen großen Einfluss
            auf die Benutzerfreundlichkeit haben.
          </p>
          
          <button
            className={`btn btn-secondary ${
              buttonLarge ? "btn-lg" : "btn-sm"
            } fake-selectable ${buttonIsSelected ? "fake-selected" : ""}`}
            style={{
              border: buttonOutline
                ? "2px solid black"
                : "2px solid transparent",
            }}
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