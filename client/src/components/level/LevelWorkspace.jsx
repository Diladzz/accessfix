function LevelWorkspace({ preview, controls }) {
  return (
    <section className="level-workspace">
      
      {/* linke seite mit der fake webseite */}
      <div className="preview-card">
        {preview}
      </div>

      {/* rechter werkzeugkasten */}
      <aside className="control-card">
        {controls}
      </aside>

    </section>
  );
}

export default LevelWorkspace;