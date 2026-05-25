export default function Contact() {
  return (
    <section style={{ paddingBottom: "48px" }}>
      <div style={{ background: "#1a1a2e", borderRadius: "20px", padding: "32px 36px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>
        <div>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "22px", fontWeight: 600, color: "#fff", letterSpacing: "-0.01em", marginBottom: "6px" }}>Got a project in mind?</h2>
          <p style={{ fontSize: "13px", color: "#8b9cb8" }}>15-minute call · no commitment · Sydney timezone</p>
        </div>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <a href="https://wa.me/393343613449" target="_blank" rel="noreferrer" style={{ background: "#fff", color: "#1a1a2e", fontSize: "13px", fontWeight: 700, padding: "11px 22px", borderRadius: "100px", textDecoration: "none" }}>WhatsApp me →</a>
          <a href="mailto:federico.demicco@gmail.com" style={{ background: "transparent", color: "#fff", fontSize: "13px", fontWeight: 500, padding: "11px 22px", borderRadius: "100px", textDecoration: "none", border: "0.5px solid #3b4a6b" }}>Send an email</a>
        </div>
      </div>
      <p style={{ fontSize: "11px", color: "#9ca3af", textAlign: "center", marginTop: "20px" }}>ABN 55 205 599 547 · federico.demicco@gmail.com</p>
    </section>
  );
}
