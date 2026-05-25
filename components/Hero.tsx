export default function Hero() {
  return (
    <section style={{ padding: "56px 0 48px", textAlign: "center" }}>
      <div style={{
        display: "inline-flex", alignItems: "center", gap: "7px",
        background: "#ddeeff", color: "#2563ab", fontSize: "12px",
        fontWeight: 600, padding: "5px 14px", borderRadius: "100px",
        marginBottom: "24px"
      }}>
        <span style={{ width: "6px", height: "6px", background: "#3b82c4", borderRadius: "50%", display: "inline-block" }} />
        Available for projects · Sydney, AU
      </div>
      <h1 style={{
        fontFamily: "'Fraunces', serif", fontSize: "52px", fontWeight: 600,
        lineHeight: 1.05, letterSpacing: "-0.025em", color: "#111827", marginBottom: "20px"
      }}>
        Full-stack developer<br />
        with a{" "}
        <em style={{ fontStyle: "italic", fontWeight: 500, color: "#2563ab" }}>marketing brain</em>
      </h1>
      <p style={{
        fontSize: "16px", color: "#4b5563", lineHeight: 1.7,
        maxWidth: "520px", margin: "0 auto 32px"
      }}>
        I build websites and web apps that look great and actually convert.
        Background at Lindt, Amazon and L&apos;Oréal means I think about growth, not just code.
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center" }}>
        {["Next.js", "React", "TypeScript", "Supabase", "Stripe", "Flask / Python", "Tailwind CSS"].map(t => (
          <span key={t} style={{
            background: "#fff", border: "1px solid #c8d3e0",
            color: "#374151", fontSize: "12px", fontWeight: 600,
            padding: "5px 13px", borderRadius: "100px"
          }}>{t}</span>
        ))}
      </div>
    </section>
  );
}
