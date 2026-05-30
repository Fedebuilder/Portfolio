"use client";
import { useState } from "react";

const faqs = [
  {
    q: "How long does a website take?",
    a: "A standard showcase site goes live in about 1–2 weeks from the start of the project, including 2 rounds of revisions. Add-ons (booking, SEO, Stripe) add a few days each.",
  },
  {
    q: "What happens if I want changes later?",
    a: "Two options: message me directly for an update — small text or photo changes are usually free, bigger redesigns are quoted separately. Or hand the code to another developer: it's yours, fully documented, anyone can pick it up.",
  },
  {
    q: "Do I need to keep paying you every month?",
    a: "No. You pay once for the build. After that the only recurring cost is your domain (about $20/year, you probably already have it). Hosting on Vercel is free for sites of this size.",
  },
  {
    q: "What if I don't have any content or photos?",
    a: "Totally fine, most clients don't. I can help write the copy based on our intro call, and source professional-quality stock photos for free. If you want custom photos, I can recommend local photographers I trust.",
  },
  {
    q: "What if the site breaks after launch?",
    a: "I fix any bugs for free, no time limit. If it broke because something I built has an issue, that's on me — not on you.",
  },
  {
    q: "Can you also handle Google ads or social media?",
    a: "Not as part of the website build, but with my marketing background I can give you a 30-minute strategy session for free with each project — pointing you at what would actually move the needle for your practice.",
  },
  {
    q: "Why are your prices lower than agencies?",
    a: "Two reasons. First, no overhead — no studio, no team, no monthly retainer. Second, I do this on the side to fund travel and personal projects, not as my main income. So I can price for what the project is worth, not what an agency needs to charge to keep the lights on.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section style={{ paddingBottom: "40px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "28px" }}>
        <div style={{ flex: 1, height: "1.5px", background: "#c8d3e0" }} />
        <span style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.14em", color: "#3b82c4", whiteSpace: "nowrap" as const }}>Common questions</span>
        <div style={{ flex: 1, height: "1.5px", background: "#c8d3e0" }} />
      </div>

      <div style={{ background: "#fff", border: "1px solid #c8d3e0", borderRadius: "20px", padding: "12px 8px", boxShadow: "0 2px 16px rgba(26,26,46,0.07)" }}>
        {faqs.map((f, i) => (
          <div key={f.q} style={{ borderBottom: i < faqs.length - 1 ? "1px solid #eef1f5" : "none" }}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                width: "100%", textAlign: "left" as const,
                background: "none", border: "none", padding: "16px 24px",
                cursor: "pointer", fontFamily: "'Plus Jakarta Sans', sans-serif",
                display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px"
              }}
            >
              <span style={{
                fontFamily: "'Fraunces', serif", fontSize: "15px", fontWeight: 600,
                color: "#111827", letterSpacing: "-0.01em"
              }}>{f.q}</span>
              <span style={{
                color: "#3b82c4", fontSize: "20px", flexShrink: 0,
                transform: open === i ? "rotate(45deg)" : "rotate(0)",
                transition: "transform 0.2s"
              }}>+</span>
            </button>
            {open === i && (
              <div style={{ padding: "0 24px 18px", maxWidth: "640px" }}>
                <p style={{ fontSize: "13.5px", color: "#5a6475", lineHeight: 1.7 }}>{f.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}