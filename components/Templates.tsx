"use client";
import { useState } from "react";

type Template = {
  profession: string;
  business: string;
  tagline: string;
  bio: string;
  ctaPrimary: string;
  ctaSecondary: string;
  bg: string;
  surface: string;
  text: string;
  textMuted: string;
  accent: string;
  accentText: string;
  font: string;
  fontSerif: string;
  italicAccent: string;
  badge: string;
  badgeText: string;
  badgeBg: string;
  imageUrl: string;
};

const templates: Template[] = [
  {
    profession: "Physiotherapist",
    business: "Sarah Mitchell",
    tagline: "Move better. Live stronger.",
    bio: "Sports rehabilitation and chronic pain recovery in Bondi. Personalised treatment plans.",
    ctaPrimary: "Book a session",
    ctaSecondary: "Our methods",
    bg: "#f4f7f5",
    surface: "#ffffff",
    text: "#1a2e2a",
    textMuted: "#5a6b65",
    accent: "#2d6a4f",
    accentText: "#ffffff",
    font: "'Plus Jakarta Sans', sans-serif",
    fontSerif: "'Fraunces', serif",
    italicAccent: "#2d6a4f",
    badge: "Bondi · NSW",
    badgeText: "#2d6a4f",
    badgeBg: "#dcf2e6",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80&auto=format&fit=crop",
  },
  {
    profession: "Personal trainer",
    business: "Max Reilly",
    tagline: "Train smart. Get strong.",
    bio: "1-on-1 strength coaching in Surry Hills. Real progress, no quick fixes.",
    ctaPrimary: "Start training",
    ctaSecondary: "See programs",
    bg: "#0d0d0d",
    surface: "#1a1a1a",
    text: "#ffffff",
    textMuted: "#a3a3a3",
    accent: "#e8ff00",
    accentText: "#0d0d0d",
    font: "'Plus Jakarta Sans', sans-serif",
    fontSerif: "'Plus Jakarta Sans', sans-serif",
    italicAccent: "#e8ff00",
    badge: "Surry Hills",
    badgeText: "#e8ff00",
    badgeBg: "#1a1a1a",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80&auto=format&fit=crop",
  },
  {
    profession: "Dentist",
    business: "Coogee Smile Clinic",
    tagline: "Modern dentistry, gentle care.",
    bio: "General and cosmetic dentistry by the beach. Family-friendly, anxiety-aware.",
    ctaPrimary: "Book a check-up",
    ctaSecondary: "Our team",
    bg: "#f7faff",
    surface: "#ffffff",
    text: "#0f2540",
    textMuted: "#5a6c80",
    accent: "#2563eb",
    accentText: "#ffffff",
    font: "'Plus Jakarta Sans', sans-serif",
    fontSerif: "'Fraunces', serif",
    italicAccent: "#2563eb",
    badge: "Coogee Beach",
    badgeText: "#2563eb",
    badgeBg: "#dbeafe",
    imageUrl: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80&auto=format&fit=crop",
  },
  {
    profession: "Lawyer",
    business: "Hartwell & Co.",
    tagline: "Clear legal advice. No jargon.",
    bio: "Commercial law and contracts for Sydney small businesses. Straight answers, fixed fees.",
    ctaPrimary: "Book a consultation",
    ctaSecondary: "Practice areas",
    bg: "#f5f3ef",
    surface: "#ffffff",
    text: "#1f1d17",
    textMuted: "#6b6558",
    accent: "#1f1d17",
    accentText: "#f5f3ef",
    font: "'Plus Jakarta Sans', sans-serif",
    fontSerif: "'Fraunces', serif",
    italicAccent: "#a07c3e",
    badge: "CBD · Sydney",
    badgeText: "#6b5a35",
    badgeBg: "#ece4d3",
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80&auto=format&fit=crop",
  },
  {
    profession: "Café",
    business: "Folk & Crumb",
    tagline: "Slow coffee, good bread.",
    bio: "Specialty espresso and sourdough, baked fresh every morning. Newtown corner spot.",
    ctaPrimary: "View menu",
    ctaSecondary: "Find us",
    bg: "#faf6f0",
    surface: "#ffffff",
    text: "#3d2817",
    textMuted: "#7a6553",
    accent: "#c4612a",
    accentText: "#ffffff",
    font: "'Plus Jakarta Sans', sans-serif",
    fontSerif: "'Fraunces', serif",
    italicAccent: "#c4612a",
    badge: "Newtown · Open today",
    badgeText: "#c4612a",
    badgeBg: "#fce8d4",
    imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80&auto=format&fit=crop",
  },
  {
    profession: "Yoga studio",
    business: "Still Studio",
    tagline: "Breathe. Move. Return.",
    bio: "Vinyasa, yin and meditation in a quiet Mosman space. All levels welcome.",
    ctaPrimary: "Book a class",
    ctaSecondary: "Timetable",
    bg: "#f4f1ec",
    surface: "#ffffff",
    text: "#3a342a",
    textMuted: "#7a7263",
    accent: "#8b6f47",
    accentText: "#ffffff",
    font: "'Plus Jakarta Sans', sans-serif",
    fontSerif: "'Fraunces', serif",
    italicAccent: "#8b6f47",
    badge: "Mosman",
    badgeText: "#8b6f47",
    badgeBg: "#ebe2d3",
    imageUrl: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80&auto=format&fit=crop",
  },
];

function MiniHero({ t }: { t: Template }) {
  // Stock photo from Unsplash via source.unsplash.com (free)
  const imgUrl = t.imageUrl;
  return (
    <div style={{
      background: t.bg,
      borderRadius: "16px",
      overflow: "hidden",
      border: "1px solid #c8d3e0",
      width: "100%",
      aspectRatio: "16/10",
      display: "flex",
      flexDirection: "column" as const,
      fontFamily: t.font,
      position: "relative" as const,
    }}>
      {/* Mock browser bar */}
      <div style={{
        background: t.surface,
        padding: "8px 12px",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
        display: "flex", alignItems: "center", gap: "6px",
        flexShrink: 0,
      }}>
        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ff5f57" }} />
        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#febc2e" }} />
        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#28c840" }} />
        <div style={{ flex: 1, marginLeft: "8px", fontSize: "9px", color: t.textMuted, opacity: 0.6 }}>
          {t.business.toLowerCase().replace(/\s+/g, "")}.com.au
        </div>
      </div>

      {/* Inner content with side image */}
      <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
        {/* Left: text */}
        <div style={{
          flex: 1, padding: "18px 22px",
          display: "flex", flexDirection: "column" as const, justifyContent: "center", gap: "8px",
          minWidth: 0,
        }}>
          <div style={{
            display: "inline-block",
            background: t.badgeBg, color: t.badgeText,
            fontSize: "8px", fontWeight: 600,
            padding: "3px 8px", borderRadius: "100px",
            width: "fit-content",
          }}>{t.badge}</div>
          <h3 style={{
            fontFamily: t.fontSerif, fontSize: "20px", fontWeight: 600,
            color: t.text, letterSpacing: "-0.02em", lineHeight: 1.05, margin: 0,
          }}>
            {t.tagline.split(" ").slice(0, -1).join(" ")}{" "}
            <span style={{ fontStyle: "italic" as const, color: t.italicAccent }}>
              {t.tagline.split(" ").slice(-1)}
            </span>
          </h3>
          <p style={{ fontSize: "9.5px", color: t.textMuted, lineHeight: 1.45, margin: 0 }}>{t.bio}</p>
          <div style={{ display: "flex", gap: "6px", marginTop: "4px" }}>
            <span style={{
              background: t.accent, color: t.accentText,
              fontSize: "9px", fontWeight: 600,
              padding: "5px 11px", borderRadius: "100px",
            }}>{t.ctaPrimary}</span>
            <span style={{
              background: "transparent", color: t.text,
              fontSize: "9px", fontWeight: 500,
              padding: "5px 11px", borderRadius: "100px",
              border: `1px solid ${t.textMuted}`,
              opacity: 0.7,
            }}>{t.ctaSecondary}</span>
          </div>
        </div>

        {/* Right: image */}
        <div style={{
          width: "38%", flexShrink: 0,
          background: `#d8d0c0 url(${imgUrl}) center/cover`,
        }} />
      </div>
    </div>
  );
}

const included = [
  "Mobile-first responsive design",
  "WhatsApp direct contact integration",
  "SEO basics (meta tags, sitemap)",
  "Contact form with email forwarding",
  "Google Business setup hooks",
  "Fast hosting on Vercel (free)",
];

export default function Templates() {
  const [idx, setIdx] = useState(0);
  const current = templates[idx];

  return (
    <section style={{ paddingBottom: "40px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "28px" }}>
        <div style={{ flex: 1, height: "1.5px", background: "#c8d3e0" }} />
        <span style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.14em", color: "#3b82c4", whiteSpace: "nowrap" as const }}>What yours could look like</span>
        <div style={{ flex: 1, height: "1.5px", background: "#c8d3e0" }} />
      </div>

      <div style={{ background: "#fff", border: "1px solid #c8d3e0", borderRadius: "20px", padding: "28px 32px", boxShadow: "0 2px 16px rgba(26,26,46,0.07)" }}>
        <p style={{ fontSize: "14px", color: "#5a6475", lineHeight: 1.7, marginBottom: "22px", maxWidth: "560px" }}>
          Six starting points to spark imagination — each one fully customised to your business, content and brand. Pick a style you like, and we&apos;ll shape it around you.
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "8px", marginBottom: "18px" }}>
          {templates.map((t, i) => (
            <button
              key={t.profession}
              onClick={() => setIdx(i)}
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "12px", fontWeight: 600,
                padding: "6px 14px", borderRadius: "100px",
                border: i === idx ? "1px solid #1a1a2e" : "1px solid #c8d3e0",
                background: i === idx ? "#1a1a2e" : "#fff",
                color: i === idx ? "#fff" : "#374151",
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {t.profession}
            </button>
          ))}
        </div>

        {/* Mini hero preview */}
        <div style={{ marginBottom: "20px" }}>
          <MiniHero t={current} />
        </div>

        {/* What's included */}
        <div style={{ background: "#eef1f5", borderRadius: "14px", padding: "18px 22px" }}>
          <p style={{ fontSize: "12px", fontWeight: 700, color: "#2563ab", marginBottom: "10px", textTransform: "uppercase" as const, letterSpacing: "0.06em" }}>
            What&apos;s included in the base build
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 18px" }}>
            {included.map(i => (
              <div key={i} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                <span style={{ color: "#3b82c4", fontSize: "12px", flexShrink: 0, marginTop: "2px" }}>✓</span>
                <span style={{ fontSize: "12.5px", color: "#374151", lineHeight: 1.5 }}>{i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}