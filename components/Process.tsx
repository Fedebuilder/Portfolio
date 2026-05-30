const steps = [
  {
    n: "01",
    title: "Free 15-min call",
    desc: "We chat about what you do, who your clients are, and what your site needs to achieve. No pitch, no pressure.",
  },
  {
    n: "02",
    title: "Written proposal",
    desc: "Within 48 hours: scope, price, timeline, and what's included. One page, no jargon, no surprises.",
  },
  {
    n: "03",
    title: "50% upfront, 50% on delivery",
    desc: "Standard freelance terms. I start once the deposit lands, you pay the rest only when you're happy with the result.",
  },
  {
    n: "04",
    title: "Build & feedback",
    desc: "I send the first version in about a week. You get 2 rounds of revisions included — most clients only need one.",
  },
  {
    n: "05",
    title: "Launch & handover",
    desc: "Site goes live on your domain. You get the full code on GitHub and a short guide to update text yourself.",
  },
];

export default function Process() {
  return (
    <section style={{ paddingBottom: "40px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "28px" }}>
        <div style={{ flex: 1, height: "1.5px", background: "#c8d3e0" }} />
        <span style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.14em", color: "#3b82c4", whiteSpace: "nowrap" as const }}>How we work together</span>
        <div style={{ flex: 1, height: "1.5px", background: "#c8d3e0" }} />
      </div>

      <div style={{ background: "#fff", border: "1px solid #c8d3e0", borderRadius: "20px", padding: "28px 32px", boxShadow: "0 2px 16px rgba(26,26,46,0.07)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          {steps.map((s, i) => (
            <div key={s.n} style={{
              display: "flex", gap: "18px", alignItems: "flex-start",
              paddingBottom: i < steps.length - 1 ? "18px" : "0",
              borderBottom: i < steps.length - 1 ? "1px solid #eef1f5" : "none"
            }}>
              <div style={{
                fontFamily: "'Fraunces', serif", fontSize: "22px", fontWeight: 600,
                color: "#3b82c4", flexShrink: 0, lineHeight: 1, width: "36px"
              }}>{s.n}</div>
              <div>
                <h3 style={{
                  fontFamily: "'Fraunces', serif", fontSize: "16px", fontWeight: 600,
                  color: "#111827", marginBottom: "5px", letterSpacing: "-0.01em"
                }}>{s.title}</h3>
                <p style={{ fontSize: "13px", color: "#5a6475", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}