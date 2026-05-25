export default function Navbar() {
  return (
    <nav style={{ background: "#eef1f5", padding: "0 32px" }}>
      <div style={{
        maxWidth: "900px", margin: "0 auto",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "20px 0",
      }}>
        <span style={{
          fontFamily: "'Fraunces', serif", fontSize: "17px",
          fontWeight: 600, color: "#111827", letterSpacing: "-0.01em"
        }}>Federico De Micco</span>
        <a href="https://wa.me/393343613449" target="_blank" rel="noreferrer" style={{
          background: "#1a1a2e", color: "#f2f5f8", fontSize: "13px",
          fontWeight: 600, padding: "9px 20px", borderRadius: "100px",
          textDecoration: "none"
        }}>WhatsApp me</a>
      </div>
    </nav>
  );
}
