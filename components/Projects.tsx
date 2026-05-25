"use client";

const projects = [
  {
    title: "Camilla Galli Osteopath",
    type: "Showcase site · Healthcare",
    desc: "Showcase site for a Milan-based osteopath. Goal: drive WhatsApp bookings. Delivered in 5 days.",
    stack: ["Next.js 16", "Tailwind CSS", "TypeScript", "Vercel"],
    link: "https://www.camillagalli.com",
    screenshot: "https://api.microlink.io/?url=https://www.camillagalli.com&screenshot=true&meta=false&embed=screenshot.url",
  },
  {
    title: "BetterPDP",
    type: "B2B SaaS · AI-powered · Solo build",
    desc: "Scores e-commerce product pages for AI search visibility. Built solo: auth, Stripe payments, AI analysis, EN/IT i18n.",
    stack: ["React 18", "Flask", "Supabase", "Stripe", "Railway"],
    link: "https://betterpdp.com",
    screenshot: "https://api.microlink.io/?url=https://betterpdp.com&screenshot=true&meta=false&embed=screenshot.url",
  },
];

export default function Projects() {
  return (
    <section style={{ paddingBottom: "48px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "28px" }}>
        <div style={{ flex: 1, height: "1.5px", background: "#c8d3e0" }} />
        <span style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.14em", color: "#3b82c4", whiteSpace: "nowrap" as const }}>Selected work</span>
        <div style={{ flex: 1, height: "1.5px", background: "#c8d3e0" }} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        {projects.map((p) => (
          <a key={p.title} href={p.link} target="_blank" rel="noreferrer" style={{ textDecoration: "none", display: "block" }}>
            <div
              style={{ background: "#fff", border: "1px solid #c8d3e0", borderRadius: "20px", overflow: "hidden", boxShadow: "0 2px 16px rgba(26,26,46,0.07)", cursor: "pointer" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 28px rgba(26,26,46,0.13)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 16px rgba(26,26,46,0.07)";
              }}
            >
              <div style={{ width: "100%", aspectRatio: "16/9", overflow: "hidden", background: "#e4eaf2" }}>
                <img src={p.screenshot} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
              </div>
              <div style={{ padding: "20px 24px" }}>
                <p style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.1em", color: "#3b82c4", marginBottom: "5px" }}>{p.type}</p>
                <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "18px", fontWeight: 600, color: "#111827", marginBottom: "8px", letterSpacing: "-0.01em" }}>{p.title}</h2>
                <p style={{ fontSize: "13px", color: "#6b7280", lineHeight: 1.6, marginBottom: "14px" }}>{p.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "5px" }}>
                  {p.stack.map(s => (
                    <span key={s} style={{ background: "#eef1f5", border: "1px solid #c8d3e0", color: "#374151", fontSize: "11px", fontWeight: 600, padding: "2px 10px", borderRadius: "100px" }}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
