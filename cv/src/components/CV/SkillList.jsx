export default function SkillList({ skills }) {
  return (
    <ul style={{ display: "flex", flexWrap: "wrap", gap: "10px", listStyle: "none", padding: 0 }}>
      {skills.map((skill, index) => (
        <li 
          key={index} 
          style={{ background: "#e0f7fa", padding: "8px 12px", borderRadius: "15px", fontSize: "14px" }}
        >
          {skill}
        </li>
      ))}
    </ul>
  );
}