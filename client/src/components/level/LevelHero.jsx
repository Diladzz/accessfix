function LevelHero({ badge, title, lead, text }) {
  return (
    <section className="level-hero-box text-center mb-5">
        
    {badge && <p className="page-badge mb-3">{badge}</p>}

      <h1 className="page-title mb-4">{title}</h1>

      {lead && <p className="page-lead mb-3">{lead}</p>}

      {text && <p className="page-text mb-0">{text}</p>}
    </section>
  );
}

export default LevelHero;