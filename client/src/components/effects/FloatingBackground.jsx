import "./FloatingBackground.css";

export default function FloatingBackground() {
  return (
    <div className="floating-background" aria-hidden="true">
      <span className="soft-orb orb-1" />
      <span className="soft-orb orb-2" />
      <span className="soft-orb orb-3" />
      <span className="soft-orb orb-4" />
      <span className="soft-orb orb-5" />

      <span className="soft-dot dot-1" />
      <span className="soft-dot dot-2" />
      <span className="soft-dot dot-3" />
      <span className="soft-dot dot-4" />
      <span className="soft-dot dot-5" />
    </div>
  );
}