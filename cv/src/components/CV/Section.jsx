export default function Section({ title, children }) {
  return (
    <section style={{ margin: "20px 0", padding: "15px", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h2 style={{ color: "#2c3e50", borderBottom: "2px solid #3498db", paddingBottom: "5px" }}>
        {title}
      </h2>
      <div className="section-content">
        {children}
      </div>
    </section>
  );
}