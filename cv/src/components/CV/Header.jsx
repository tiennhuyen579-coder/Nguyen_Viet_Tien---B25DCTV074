export default function Header({ name, title, email, phone, avatar }) {
  return (
    <header style={{ textAlign: "center", padding: "20px", borderBottom: "2px solid #333" }}>
      {avatar && <img src={avatar} alt={name} style={{ width: "120px", borderRadius: "50%" }} />}
      <h1 style={{ margin: "10px 0 5px 0" }}>{name}</h1>
      <h3 style={{ color: "#666", marginTop: 0 }}>{title}</h3>
      <p style={{ margin: "5px 0" }}>Email: {email} | SĐT: {phone}</p>
    </header>
  );
}