const items = [
  {
    icon: "🛠️",
    title: "Free bug support, no time limit",
    desc: "If anything breaks on the site I built, I fix it for free. No monthly retainer, no fine print. It's the right thing to do.",
  },
  {
    icon: "🔑",
    title: "You own the code",
    desc: "Full source on GitHub, transferred to your account. If we ever stop working together, any developer can pick up where I left off.",
  },
  {
    icon: "📬",
    title: "Want changes later? Two ways",
    desc: "Either reach out to me directly for an update, or hand the code to another developer. Your choice, always.",
  },
  {
    icon: "📘",
    title: "Plain-English handover guide",
    desc: "A short doc that explains how to update text, swap photos, or change opening hours yourself — without touching code.",
  },
];

export default function AfterSale() {
  return (
    <section style={{ paddingBottom: "40px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "28px" }}>
        <div style={{ flex: 1, height: "1.5px", background: "#c8d3e0" }} />
        <span style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.14em", color: "#3b82c4", whiteSpace: "nowrap" as const }}>After the site goes live</span>
        <div style={{ flex: 1, height: "1.5px", background: "#c8d3e0" }} />
      </div>

      <div style={{ background: "#fff", border: "1px solid #c8d3e0", borderRadius: "20px", padding: "28px 32px", boxShadow: "0 2px 16px rgba(26,26,46,0.07)" }}>
        <p style={{ fontSize: "14px", color: "#5a6475", lineHeight: 1.7, marginBottom: "22px", maxWidth: "560px" }}>
          A common worry: <em style={{ color: "#111827" }}>what if you disappear and I&apos;m stuck with a site I can&apos;t touch?</em>{" "}
          Fair question. Here&apos;s how I make sure that&apos;s never a problem.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          {items.map(i => (
            <div key={i.title} style={{ background: "#eef1f5", borderRadius: "14px", padding: "18px 20px" }}>
              <div style={{ fontSize: "22px", marginBottom: "8px" }}>{i.icon}</div>
              <h3 style={{
                fontFamily: "'Fraunces', serif", fontSize: "15px", fontWeight: 600,
                color: "#111827", marginBottom: "5px", letterSpacing: "-0.01em"
              }}>{i.title}</h3>
              <p style={{ fontSize: "12.5px", color: "#5a6475", lineHeight: 1.6 }}>{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}