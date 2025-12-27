export default function Accordion({ icon, title, children, open, onToggle }) {
  return (
    <div className="accordion">
      <button
        className="accordion-header"
        onClick={onToggle}
        type="button"
      >
        <div className="accordion-title">
          <span className="accordion-icon">{icon}</span>
          <span>{title}</span>
        </div>

        <span className={`arrow ${open ? "open" : ""}`}>▸</span>
      </button>

      {open && (
        <div className="accordion-body">
          {children}
        </div>
      )}
    </div>
  );
}
