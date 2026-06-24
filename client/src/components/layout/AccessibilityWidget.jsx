import { useState } from "react";
import "../../styles/layout/accessibility.css";

import { IoAccessibility } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";

function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [darkContrast, setDarkContrast] = useState(false);
  const [monochrome, setMonochrome] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [highlightHeadings, setHighlightHeadings] = useState(false);

  function toggleBodyClass(className, value) {
    document.body.classList.toggle(className, value);
  }

  function handleDarkContrast() {
    const newValue = !darkContrast;
    setDarkContrast(newValue);
    toggleBodyClass("access-dark-contrast", newValue);
  }

  function handleMonochrome() {
    const newValue = !monochrome;
    setMonochrome(newValue);
    toggleBodyClass("access-monochrome", newValue);
  }

  function handleLinks() {
    const newValue = !highlightLinks;
    setHighlightLinks(newValue);
    toggleBodyClass("access-highlight-links", newValue);
  }

  function handleHeadings() {
    const newValue = !highlightHeadings;
    setHighlightHeadings(newValue);
    toggleBodyClass("access-highlight-headings", newValue);
  }

  function resetAll() {
    setDarkContrast(false);
    setMonochrome(false);
    setHighlightLinks(false);
    setHighlightHeadings(false);

    document.body.classList.remove(
      "access-dark-contrast",
      "access-monochrome",
      "access-highlight-links",
      "access-highlight-headings",
    );
  }

  return (
    <>
      <button
        className="access-button"
        onClick={() => setOpen(true)}
        aria-label="Eingabehilfen öffnen"
        title="Eingabehilfen öffnen"
      >
        <IoAccessibility   />
        <span className="access-tooltip">
          Eingabehilfen öffnen
        </span>
      </button>

      {open && (
        <div className="access-panel">
          <div className="access-panel-header">
            <h2>Eingabehilfen</h2>

            <button
              className="access-close"
              onClick={() => setOpen(false)}
              aria-label="Eingabehilfen schließen"
            >
              <FaTimes />
            </button>
          </div>

          <div className="access-options">
            <button
              className={
                darkContrast
                  ? "access-option active"
                  : "access-option"
              }
              onClick={handleDarkContrast}
            >
              Dunkler Kontrast
            </button>

            <button
              className={
                monochrome
                  ? "access-option active"
                  : "access-option"
              }
              onClick={handleMonochrome}
            >
              Monochrom
            </button>

            <button
              className={
                highlightLinks
                  ? "access-option active"
                  : "access-option"
              }
              onClick={handleLinks}
            >
              Links hervorheben
            </button>

            <button
              className={
                highlightHeadings
                  ? "access-option active"
                  : "access-option"
              }
              onClick={handleHeadings}
            >
              Überschriften hervorheben
            </button>

            <button
              className="access-reset"
              onClick={resetAll}
            >
              Alle zurücksetzen
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default AccessibilityWidget;