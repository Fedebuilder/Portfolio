const items = [
  {
    icon: "🛠️",
    title: "30 days of free bug fixes",
    desc: "After launch, you get a full month where I fix anything that breaks, at no cost. Most issues surface in the first few weeks — that's when I cover them.",
  },
  {
    icon: "🔑",
    title: "You own the code",
    desc: "Full source on GitHub, transferred to your account. If we ever stop working together, any developer can pick up exactly where I left off.",
  },
  {
    icon: "📬",
    title: "Want changes later? Just ask",
    desc: "Need updates after the first month? Send me a message — small tweaks are quick and cheap, bigger redesigns get a clear quote. No retainer, no surprise invoices.",
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

      <div className="card-pad" style={{ background: "#fff", border: "1px solid #c8d3e0", borderRadius: "20px", padding: "28px 32px", boxShadow: "0 2px 16px rgba(26,26,46,0.07)" }}>
        <p style={{ fontSize: "14px", color: "#5a6475", lineHeight: 1.7, marginBottom: "22px", maxWidth: "560px" }}>
          A common worry: <em style={{ color: "#111827" }}>what if you disappear and I&apos;m stuck with a site I can&apos;t touch?</em>{" "}
          Fair question. Here&apos;s how I make sure that&apos;s never a problem.
        </p>

        <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
          {items.map(i => (
            <div key={i.title} style={{ background: "#eef1f5", borderRadius: "14px", padding: "20px 22px" }}>
              <div style={{ fontSize: "24px", marginBottom: "10px" }}>{i.icon}</div>
              <h3 style={{
                fontFamily: "'Fraunces', serif", fontSize: "15px", fontWeight: 600,
                color: "#111827", marginBottom: "6px", letterSpacing: "-0.01em"
              }}>{i.title}</h3>
              <p style={{ fontSize: "12.5px", color: "#5a6475", lineHeight: 1.6 }}>{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}