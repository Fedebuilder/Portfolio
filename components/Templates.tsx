"use client";
import { useState } from "react";

type Template = {
  profession: string;
  // Business
  businessName: string;
  businessTagline: string;  // shown under logo in navbar
  domain: string;
  // Navbar
  navLinks: string[];
  ctaNav: string;
  // Badge
  badgeText: string;
  // Hero copy
  titleLine1: string;
  titleLine2: string;       // italicised + accent colored
  bio: string;
  ctaPrimary: string;
  ctaPrimaryIcon: string;
  ctaSecondary: string;
  // Stats (3 mini-stats)
  stats: { value: string; label: string }[];
  // Floating card on image
  floatLabel: string;
  floatValue: string;
  // Colors
  bg: string;
  surface: string;
  text: string;
  textMuted: string;
  textSubtle: string;
  accent: string;
  accentText: string;
  accentBorder: string;
  badgeBg: string;
  badgeText2: string;
  // Fonts
  fontSans: string;
  fontDisplay: string;
  italicAccent: string;
  // Image
  imageUrl: string;
};

const templates: Template[] = [
  {
    profession: "Physiotherapist",
    businessName: "Sarah Mitchell",
    businessTagline: "Physiotherapist · Bondi",
    domain: "sarahmitchell.com.au",
    navLinks: ["Services", "About", "Reviews", "Contact"],
    ctaNav: "Book now",
    badgeText: "Accepting new patients · Bondi",
    titleLine1: "Move better,",
    titleLine2: "live stronger.",
    bio: "Sports rehab and chronic pain recovery in Bondi. Tailored treatment plans, no guesswork, no rushed appointments.",
    ctaPrimary: "Book on WhatsApp",
    ctaPrimaryIcon: "📱",
    ctaSecondary: "See services →",
    stats: [
      { value: "10+", label: "Years exp." },
      { value: "800+", label: "Patients" },
      { value: "★ 5.0", label: "Google reviews" },
    ],
    floatLabel: "Next available",
    floatValue: "Tomorrow, 10am",
    bg: "#f4f7f5",
    surface: "#ffffff",
    text: "#1a2e2a",
    textMuted: "#5a6b65",
    textSubtle: "#7a8a85",
    accent: "#2d6a4f",
    accentText: "#ffffff",
    accentBorder: "#c8d3c2",
    badgeBg: "#dcf2e6",
    badgeText2: "#2d6a4f",
    fontSans: "'Plus Jakarta Sans', sans-serif",
    fontDisplay: "'Fraunces', serif",
    italicAccent: "#2d6a4f",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80&auto=format&fit=crop",
  },
  {
    profession: "Personal trainer",
    businessName: "Max Reilly",
    businessTagline: "Strength coach · Surry Hills",
    domain: "maxreilly.com.au",
    navLinks: ["Programs", "Results", "Pricing", "Contact"],
    ctaNav: "Start now",
    badgeText: "3 spots open this month",
    titleLine1: "Train smart.",
    titleLine2: "Get strong.",
    bio: "1-on-1 strength coaching in Surry Hills. Real progress, real numbers, no quick fixes or gimmicks.",
    ctaPrimary: "Get my plan",
    ctaPrimaryIcon: "⚡",
    ctaSecondary: "See results →",
    stats: [
      { value: "120+", label: "Clients trained" },
      { value: "8 yrs", label: "Coaching" },
      { value: "★ 4.9", label: "Average rating" },
    ],
    floatLabel: "Free intro session",
    floatValue: "This week only",
    bg: "#0d0d0d",
    surface: "#181818",
    text: "#ffffff",
    textMuted: "#b8b8b8",
    textSubtle: "#7a7a7a",
    accent: "#e8ff00",
    accentText: "#0d0d0d",
    accentBorder: "#2a2a2a",
    badgeBg: "#1f1f1f",
    badgeText2: "#e8ff00",
    fontSans: "'Plus Jakarta Sans', sans-serif",
    fontDisplay: "'Plus Jakarta Sans', sans-serif",
    italicAccent: "#e8ff00",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80&auto=format&fit=crop",
  },
  {
    profession: "Dentist",
    businessName: "Coogee Smile",
    businessTagline: "Dental clinic · Coogee Beach",
    domain: "coogeesmile.com.au",
    navLinks: ["Treatments", "Team", "Fees", "Contact"],
    ctaNav: "Book check-up",
    badgeText: "Bulk-billing available · Coogee",
    titleLine1: "Modern dentistry,",
    titleLine2: "gentle care.",
    bio: "General and cosmetic dentistry by the beach. Family-friendly, anxiety-aware, and never in a hurry.",
    ctaPrimary: "Book a check-up",
    ctaPrimaryIcon: "📅",
    ctaSecondary: "Meet the team →",
    stats: [
      { value: "15+", label: "Years caring" },
      { value: "2,000+", label: "Happy patients" },
      { value: "★ 4.9", label: "Google reviews" },
    ],
    floatLabel: "Open today",
    floatValue: "Until 6:30 pm",
    bg: "#f7faff",
    surface: "#ffffff",
    text: "#0f2540",
    textMuted: "#5a6c80",
    textSubtle: "#8a99b0",
    accent: "#2563eb",
    accentText: "#ffffff",
    accentBorder: "#cad8eb",
    badgeBg: "#dbeafe",
    badgeText2: "#1d4ed8",
    fontSans: "'Plus Jakarta Sans', sans-serif",
    fontDisplay: "'Fraunces', serif",
    italicAccent: "#2563eb",
    imageUrl: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80&auto=format&fit=crop",
  },
  {
    profession: "Lawyer",
    businessName: "Hartwell & Co.",
    businessTagline: "Commercial law · Sydney CBD",
    domain: "hartwellco.com.au",
    navLinks: ["Practice areas", "Team", "Insights", "Contact"],
    ctaNav: "Request a call",
    badgeText: "Fixed fees · No surprises",
    titleLine1: "Clear legal advice.",
    titleLine2: "No jargon.",
    bio: "Commercial law and contracts for Sydney small businesses. Straight answers, transparent pricing, and quick turnarounds.",
    ctaPrimary: "Request a consult",
    ctaPrimaryIcon: "✉",
    ctaSecondary: "Our work →",
    stats: [
      { value: "20 yrs", label: "Combined exp." },
      { value: "300+", label: "Matters resolved" },
      { value: "★ 5.0", label: "Client reviews" },
    ],
    floatLabel: "Response time",
    floatValue: "Under 4 hours",
    bg: "#f5f3ef",
    surface: "#ffffff",
    text: "#1f1d17",
    textMuted: "#6b6558",
    textSubtle: "#8c8674",
    accent: "#1f1d17",
    accentText: "#f5f3ef",
    accentBorder: "#d6cfbe",
    badgeBg: "#ece4d3",
    badgeText2: "#6b5a35",
    fontSans: "'Plus Jakarta Sans', sans-serif",
    fontDisplay: "'Fraunces', serif",
    italicAccent: "#a07c3e",
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80&auto=format&fit=crop",
  },
  {
    profession: "Café",
    businessName: "Folk & Crumb",
    businessTagline: "Coffee & bakery · Newtown",
    domain: "folkandcrumb.com.au",
    navLinks: ["Menu", "Find us", "Wholesale", "Contact"],
    ctaNav: "View menu",
    badgeText: "Open today · 7am to 3pm",
    titleLine1: "Slow coffee,",
    titleLine2: "good bread.",
    bio: "Specialty espresso and sourdough, baked fresh every morning. A quiet corner spot in Newtown to start the day right.",
    ctaPrimary: "See today's menu",
    ctaPrimaryIcon: "☕",
    ctaSecondary: "Find us →",
    stats: [
      { value: "6am", label: "Bakers in" },
      { value: "12+", label: "Pastries daily" },
      { value: "★ 4.8", label: "Google reviews" },
    ],
    floatLabel: "Just out of the oven",
    floatValue: "Croissants, 8am",
    bg: "#faf6f0",
    surface: "#ffffff",
    text: "#3d2817",
    textMuted: "#7a6553",
    textSubtle: "#9b8b78",
    accent: "#c4612a",
    accentText: "#ffffff",
    accentBorder: "#e5d3bc",
    badgeBg: "#fce8d4",
    badgeText2: "#a04a18",
    fontSans: "'Plus Jakarta Sans', sans-serif",
    fontDisplay: "'Fraunces', serif",
    italicAccent: "#c4612a",
    imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80&auto=format&fit=crop",
  },
  {
    profession: "Yoga studio",
    businessName: "Still Studio",
    businessTagline: "Yoga & meditation · Mosman",
    domain: "stillstudio.com.au",
    navLinks: ["Classes", "Teachers", "Pricing", "Contact"],
    ctaNav: "Book a class",
    badgeText: "First class free · Mosman",
    titleLine1: "Breathe. Move.",
    titleLine2: "Return.",
    bio: "Vinyasa, yin and meditation in a quiet, light-filled studio. All levels welcome — drop in any time, or join a course.",
    ctaPrimary: "Book a class",
    ctaPrimaryIcon: "🧘",
    ctaSecondary: "See timetable →",
    stats: [
      { value: "20+", label: "Classes weekly" },
      { value: "8", label: "Teachers" },
      { value: "★ 5.0", label: "Student reviews" },
    ],
    floatLabel: "Next class",
    floatValue: "Today, 6pm yin",
    bg: "#f4f1ec",
    surface: "#ffffff",
    text: "#3a342a",
    textMuted: "#7a7263",
    textSubtle: "#9c9485",
    accent: "#8b6f47",
    accentText: "#ffffff",
    accentBorder: "#d6c9b5",
    badgeBg: "#ebe2d3",
    badgeText2: "#6e5836",
    fontSans: "'Plus Jakarta Sans', sans-serif",
    fontDisplay: "'Fraunces', serif",
    italicAccent: "#8b6f47",
    imageUrl: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80&auto=format&fit=crop",
  },
];

function MiniHero({ t }: { t: Template }) {
  const isDark = t.bg === "#0d0d0d";
  return (
    <div style={{
      background: t.bg,
      borderRadius: "16px",
      overflow: "hidden",
      border: `1px solid ${isDark ? "#2a2a2a" : "#c8d3e0"}`,
      width: "100%",
      boxShadow: "0 8px 30px rgba(26,26,46,0.08)",
      fontFamily: t.fontSans,
    }}>
      {/* Browser bar */}
      <div style={{
        background: isDark ? "#1f1f1f" : "#ffffff",
        padding: "10px 14px",
        borderBottom: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`,
        display: "flex", alignItems: "center", gap: "6px",
      }}>
        <div style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#ff5f57" }} />
        <div style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#febc2e" }} />
        <div style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#28c840" }} />
        <div style={{ flex: 1, marginLeft: "10px", fontSize: "11px", color: t.textSubtle }}>
          {t.domain}
        </div>
      </div>

      {/* Mini navbar */}
      <div style={{
        background: t.bg,
        padding: "14px 28px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        borderBottom: `0.5px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)"}`,
      }}>
        <div>
          <div style={{
            fontFamily: t.fontDisplay, fontSize: "15px",
            fontWeight: 600, color: t.text, letterSpacing: "-0.01em",
          }}>{t.businessName}</div>
          <div style={{
            fontSize: "8px", letterSpacing: "0.18em",
            color: t.textMuted, textTransform: "uppercase" as const, marginTop: "1px",
          }}>{t.businessTagline}</div>
        </div>
        <div style={{ display: "flex", gap: "18px", fontSize: "11px", color: t.textMuted, alignItems: "center" }}>
          {t.navLinks.map(l => <span key={l}>{l}</span>)}
          <span style={{
            background: t.accent, color: t.accentText,
            padding: "5px 12px", borderRadius: "100px",
            fontSize: "10px", fontWeight: 600, marginLeft: "4px",
          }}>{t.ctaNav}</span>
        </div>
      </div>

      {/* Hero content */}
      <div style={{ display: "flex", minHeight: "340px" }}>
        {/* Left: text */}
        <div style={{
          flex: "1 1 56%",
          padding: "36px 36px 32px",
          display: "flex", flexDirection: "column" as const, justifyContent: "center", gap: "14px",
        }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "6px",
            background: t.badgeBg, color: t.badgeText2,
            fontSize: "10px", fontWeight: 600,
            padding: "4px 11px", borderRadius: "100px",
            width: "fit-content",
          }}>
            <span style={{ width: "5px", height: "5px", background: t.badgeText2, borderRadius: "50%" }} />
            {t.badgeText}
          </div>

          <h1 style={{
            fontFamily: t.fontDisplay,
            fontSize: "34px", fontWeight: 600,
            color: t.text, letterSpacing: "-0.025em",
            lineHeight: 1.05, margin: 0,
          }}>
            {t.titleLine1}<br />
            <span style={{ fontStyle: "italic" as const, fontWeight: 500, color: t.italicAccent }}>
              {t.titleLine2}
            </span>
          </h1>

          <p style={{
            fontSize: "13px", color: t.textMuted, lineHeight: 1.6,
            margin: 0, maxWidth: "330px",
          }}>{t.bio}</p>

          <div style={{ display: "flex", gap: "8px", marginTop: "4px", flexWrap: "wrap" as const }}>
            <span style={{
              background: t.accent, color: t.accentText,
              fontSize: "11px", fontWeight: 600,
              padding: "9px 18px", borderRadius: "100px",
              display: "inline-flex", alignItems: "center", gap: "6px",
            }}>
              <span>{t.ctaPrimaryIcon}</span> {t.ctaPrimary}
            </span>
            <span style={{
              background: "transparent", color: t.text,
              fontSize: "11px", fontWeight: 500,
              padding: "9px 18px", borderRadius: "100px",
              border: `1px solid ${t.accentBorder}`,
            }}>{t.ctaSecondary}</span>
          </div>

          {/* Stats row */}
          <div style={{
            display: "flex", gap: "20px", marginTop: "16px",
            paddingTop: "16px",
            borderTop: `0.5px solid ${isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)"}`,
          }}>
            {t.stats.map(s => (
              <div key={s.label}>
                <div style={{ fontFamily: t.fontDisplay, fontSize: "17px", fontWeight: 600, color: t.text }}>{s.value}</div>
                <div style={{ fontSize: "9px", color: t.textSubtle, letterSpacing: "0.05em", textTransform: "uppercase" as const }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: image */}
        <div style={{
          flex: "0 0 44%",
          position: "relative" as const,
          background: `url("${t.imageUrl}") center/cover`,
          margin: "20px 20px 20px 0",
          borderRadius: "14px",
        }}>
          <div style={{
            position: "absolute" as const,
            bottom: "16px", left: "16px",
            background: "#ffffff",
            borderRadius: "12px",
            padding: "10px 14px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
          }}>
            <div style={{ fontSize: "9px", color: "#7a8a85", letterSpacing: "0.06em", textTransform: "uppercase" as const, marginBottom: "2px" }}>{t.floatLabel}</div>
            <div style={{ fontFamily: t.fontDisplay, fontSize: "13px", fontWeight: 600, color: "#1a2e2a" }}>{t.floatValue}</div>
          </div>
        </div>
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