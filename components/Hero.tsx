export default function Hero() {
  return (
    <section style={{ padding: "56px 0 48px" }}>
      <div style={{
        display: "flex",
        gap: "40px",
        alignItems: "center",
        flexWrap: "wrap" as const,
      }}>
        {/* Testo a sinistra */}
        <div style={{ flex: "1 1 420px", minWidth: 0 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "7px",
            background: "#ddeeff", color: "#2563ab", fontSize: "12px",
            fontWeight: 600, padding: "5px 14px", borderRadius: "100px",
            marginBottom: "20px"
          }}>
            <span style={{ width: "6px", height: "6px", background: "#3b82c4", borderRadius: "50%", display: "inline-block" }} />
            Available for projects · Sydney, AU
          </div>
          <h1 style={{
            fontFamily: "'Fraunces', serif", fontSize: "46px", fontWeight: 600,
            lineHeight: 1.05, letterSpacing: "-0.025em", color: "#111827", marginBottom: "18px"
          }}>
            Full-stack developer<br />
            with a{" "}
            <em style={{ fontStyle: "italic", fontWeight: 500, color: "#2563ab" }}>marketing brain</em>
          </h1>
          <p style={{
            fontSize: "16px", color: "#4b5563", lineHeight: 1.65,
            marginBottom: "24px", maxWidth: "480px"
          }}>
            I build websites and web apps that look great and actually convert.
            Background at Lindt, Amazon and L&apos;Oréal means I think about growth, not just code.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "8px" }}>
            {["Next.js", "React", "TypeScript", "Supabase", "Stripe", "Tailwind CSS"].map(t => (
              <span key={t} style={{
                background: "#fff", border: "1px solid #c8d3e0",
                color: "#374151", fontSize: "12px", fontWeight: 600,
                padding: "5px 13px", borderRadius: "100px"
              }}>{t}</span>
            ))}
          </div>
        </div>

        {/* Foto a destra */}
        <div style={{
          flex: "0 0 auto",
          width: "240px", height: "240px",
          borderRadius: "24px",
          overflow: "hidden",
          background: "#e4eaf2",
          border: "1px solid #c8d3e0",
          boxShadow: "0 8px 30px rgba(26,26,46,0.12)",
        }}>
          <img
            src="/federico.jpg"
            alt="Federico De Micco"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}