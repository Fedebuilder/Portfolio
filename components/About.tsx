const experience = [
  {
    logo: "https://www.google.com/s2/favicons?domain=lindt.com&sz=64",
    company: "Lindt & Sprüngli",
    role: "International Marketing",
    location: "Switzerland · Italy · Australia",
  },
  {
    logo: "https://www.google.com/s2/favicons?domain=amazon.com&sz=64",
    company: "Amazon",
    role: "Project Management",
    location: "Luxembourg",
  },
  {
    logo: "https://www.google.com/s2/favicons?domain=loreal.com&sz=64",
    company: "L'Oréal",
    role: "Brand & Product Management",
    location: "Canada",
  },
];

const extras = [
  "🎵 Organised Fred Again on my rooftop in Naples — YouTube video, 2M+ views",
  "🤿 Competitive water polo athlete at national level (2008–2018)",
  "🌏 6 months solo backpacking across Southeast Asia",
];

export default function About() {
  return (
    <section style={{ paddingBottom: "40px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "28px" }}>
        <div style={{ flex: 1, height: "1.5px", background: "#c8d3e0" }} />
        <span style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.14em", color: "#3b82c4", whiteSpace: "nowrap" as const }}>Background</span>
        <div style={{ flex: 1, height: "1.5px", background: "#c8d3e0" }} />
      </div>

      <div style={{ background: "#fff", border: "1px solid #c8d3e0", borderRadius: "20px", padding: "28px 32px", boxShadow: "0 2px 16px rgba(26,26,46,0.07)" }}>

        {/* Foto + Nome + Tagline */}
        <div style={{ display: "flex", gap: "20px", alignItems: "center", marginBottom: "20px" }}>
          <div style={{
            width: "72px", height: "72px", borderRadius: "50%",
            background: "#e4eaf2", flexShrink: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            border: "1px solid #c8d3e0", overflow: "hidden"
          }}>
            {/* Sostituisci src con la tua foto in /public/federico.jpg */}
            <img
              src="/federico.jpg"
              alt="Federico De Micco"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              
            />
          </div>
          <div>
            <h2 style={{
              fontFamily: "'Fraunces', serif", fontSize: "22px",
              fontWeight: 600, color: "#111827", letterSpacing: "-0.01em",
              marginBottom: "3px"
            }}>Federico De Micco</h2>
            <p style={{ fontSize: "13px", color: "#6b7280" }}>
              Web developer & marketing strategist · Sydney
            </p>
          </div>
        </div>

        <p style={{ fontSize: "14px", color: "#5a6475", lineHeight: 1.7, marginBottom: "24px", maxWidth: "560px" }}>
          I started as a marketer, not a developer. Every site I build is designed around one question:{" "}
          <strong style={{ color: "#111827" }}>does this actually convert?</strong>{" "}
          I bring the same analytical rigour I used at Lindt, Amazon and L&apos;Oréal to every project.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
          {experience.map(e => (
            <div key={e.company} style={{ display: "flex", gap: "14px", alignItems: "center" }}>
              <div style={{
                width: "36px", height: "36px", borderRadius: "10px", flexShrink: 0,
                background: "#f8f8f8", border: "1px solid #e5e7eb",
                display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden"
              }}>
                <img src={e.logo} alt={e.company} style={{ width: "22px", height: "22px", objectFit: "contain" }} />
              </div>
              <div style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" as const, gap: "4px" }}>
                <div>
                  <span style={{ fontSize: "13px", fontWeight: 700, color: "#111827" }}>{e.company}</span>
                  <span style={{ fontSize: "13px", color: "#6b7280" }}> — {e.role}</span>
                </div>
                <span style={{ fontSize: "11px", color: "#9ca3af", fontWeight: 500 }}>{e.location}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ background: "#eef1f5", borderRadius: "14px", padding: "16px 20px", marginBottom: "24px" }}>
          <p style={{ fontSize: "12px", fontWeight: 700, color: "#2563ab", marginBottom: "8px", textTransform: "uppercase" as const, letterSpacing: "0.06em" }}>Education</p>
          <p style={{ fontSize: "13px", color: "#111827", fontWeight: 600, marginBottom: "2px" }}>Double MSc — Bocconi University + HEC Montréal</p>
          <p style={{ fontSize: "12px", color: "#6b7280", marginBottom: "10px" }}>avg 29.8/30 + 4.3/4.3 · Bourse d&apos;Excellence (1 of 4 best MSc students university-wide)</p>
          <p style={{ fontSize: "13px", color: "#111827", fontWeight: 600, marginBottom: "2px" }}>BSc Business Administration — University of Naples Federico II</p>
          <p style={{ fontSize: "12px", color: "#6b7280" }}>110/110 cum laude · Erasmus 6 months in Barcelona</p>
        </div>

        <div>
          <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.08em", color: "#9ca3af", marginBottom: "12px" }}>The stuff I actually talk about at dinner</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {extras.map(e => (
              <p key={e} style={{ fontSize: "13px", color: "#5a6475", lineHeight: 1.5 }}>{e}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}