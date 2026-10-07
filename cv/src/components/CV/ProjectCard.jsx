export default function ProjectCard({ projects }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      {projects.map((proj, index) => (
        <div key={index} style={{ background: "#f9f9f9", padding: "12px", borderRadius: "6px", borderLeft: "4px solid #3498db" }}>
          <h3 style={{ margin: "0 0 5px 0" }}>{proj.title}</h3>
          <p style={{ margin: "0 0 8px 0", color: "#555" }}>{proj.description}</p>
          <small><strong>Công nghệ:</strong> {proj.techStack.join(", ")}</small>
        </div>
      ))}
    </div>
  );
}
