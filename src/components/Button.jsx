export default function Button({ label, color = "green", onClick }) {
  return (
    <button
      className="btn"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {label}
    </button>
  );
}