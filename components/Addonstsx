const addons = [
  {
    icon: "📅",
    title: "Online booking calendar",
    desc: "Calendly or similar, embedded so clients book themselves without messaging back and forth.",
    price: "from $150",
  },
  {
    icon: "🗺️",
    title: "Google Business setup",
    desc: "I get you set up on Google Maps and Search so people in your suburb find you first. Includes review request flow.",
    price: "from $200",
  },
  {
    icon: "🔍",
    title: "SEO setup",
    desc: "Meta tags, sitemap, Google Search Console, keyword targeting for your suburb. Built for local search.",
    price: "from $250",
  },
  {
    icon: "💳",
    title: "Stripe payments",
    desc: "Accept deposits, prepaid sessions, or gift cards directly on the site. Money lands in your account.",
    price: "from $300",
  },
];

export default function Addons() {
  return (
    <section style={{ paddingBottom: "40px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "28px" }}>
        <div style={{ flex: 1, height: "1.5px", background: "#c8d3e0" }} />
        <span style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.14em", color: "#3b82c4", whiteSpace: "nowrap" as const }}>Optional add-ons</span>
        <div style={{ flex: 1, height: "1.5px", background: "#c8d3e0" }} />
      </div>

      <div style={{ background: "#fff", border: "1px solid #c8d3e0", borderRadius: "20px", padding: "28px 32px", boxShadow: "0 2px 16px rgba(26,26,46,0.07)" }}>
        <p style={{ fontSize: "14px", color: "#5a6475", lineHeight: 1.7, marginBottom: "22px", maxWidth: "560px" }}>
          The base website covers most needs. If you want more, here are the extras I can bolt on:
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {addons.map(a => (
            <div key={a.title} style={{
              display: "flex", gap: "16px", alignItems: "flex-start",
              padding: "16px 18px", border: "1px solid #e4eaf2", borderRadius: "14px"
            }}>
              <div style={{
                fontSize: "20px", width: "40px", height: "40px",
                background: "#eef1f5", borderRadius: "10px", flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center"
              }}>{a.icon}</div>
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontFamily: "'Fraunces', serif", fontSize: "15px", fontWeight: 600,
                  color: "#111827", marginBottom: "4px", letterSpacing: "-0.01em"
                }}>{a.title}</h3>
                <p style={{ fontSize: "12.5px", color: "#5a6475", lineHeight: 1.55 }}>{a.desc}</p>
              </div>
              <div style={{
                fontSize: "12px", fontWeight: 700, color: "#3b82c4",
                background: "#ddeeff", padding: "5px 12px", borderRadius: "100px",
                flexShrink: 0, alignSelf: "center", whiteSpace: "nowrap" as const
              }}>{a.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}