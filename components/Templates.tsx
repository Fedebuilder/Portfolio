"use client";
import { useState } from "react";

const included = [
  "Mobile-first responsive design",
  "WhatsApp direct contact integration",
  "SEO basics (meta tags, sitemap)",
  "Contact form with email forwarding",
  "Google Business setup hooks",
  "Fast hosting on Vercel (free)",
];

// =============== INDIVIDUAL TEMPLATE COMPONENTS ===============

// 1. PHYSIOTHERAPIST — verde salvia, foto nuova, layout pulito classico
function PhysioTemplate() {
  const bg = "#f4f7f5", text = "#1a2e2a", muted = "#5a6b65", accent = "#2d6a4f";
  return (
    <div style={{ background: bg, borderRadius: "16px", overflow: "hidden", border: "1px solid #c8d3e0", boxShadow: "0 8px 30px rgba(26,26,46,0.08)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <BrowserBar domain="sarahmitchell.com.au" textColor="#9ca3af" />
      <div style={{ padding: "14px 28px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "0.5px solid rgba(0,0,0,0.07)" }}>
        <div>
          <div style={{ fontFamily: "'Fraunces', serif", fontSize: "15px", fontWeight: 600, color: text, letterSpacing: "-0.01em" }}>Sarah Mitchell</div>
          <div style={{ fontSize: "8px", letterSpacing: "0.18em", color: muted, textTransform: "uppercase", marginTop: "1px" }}>Physiotherapist · Bondi</div>
        </div>
        <div style={{ display: "flex", gap: "18px", fontSize: "11px", color: muted, alignItems: "center" }}>
          <span>Services</span><span>About</span><span>Reviews</span><span>Contact</span>
          <span style={{ background: accent, color: "#fff", padding: "5px 12px", borderRadius: "100px", fontSize: "10px", fontWeight: 600, marginLeft: "4px" }}>Book now</span>
        </div>
      </div>
      <div style={{ display: "flex", minHeight: "340px" }}>
        <div style={{ flex: "1 1 56%", padding: "36px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "14px" }}>
          <Badge bg="#dcf2e6" color={accent} dot={true}>Accepting new patients · Bondi</Badge>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "34px", fontWeight: 600, color: text, letterSpacing: "-0.025em", lineHeight: 1.05, margin: 0 }}>
            Move better,<br />
            <span style={{ fontStyle: "italic", fontWeight: 500, color: accent }}>live stronger.</span>
          </h1>
          <p style={{ fontSize: "13px", color: muted, lineHeight: 1.6, margin: 0, maxWidth: "330px" }}>
            Sports rehab and chronic pain recovery in Bondi. Tailored treatment plans, no guesswork, no rushed appointments.
          </p>
          <CTAs primary="📱 Book on WhatsApp" secondary="See services →" accent={accent} accentText="#fff" borderColor="#c8d3c2" textColor={text} />
          <Stats items={[{v:"10+",l:"Years exp."},{v:"800+",l:"Patients"},{v:"★ 5.0",l:"Google reviews"}]} textColor={text} subtleColor="#7a8a85" displayFont="'Fraunces', serif" borderColor="rgba(0,0,0,0.1)" />
        </div>
        <div style={{ flex: "0 0 44%", position: "relative", background: `url("https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80&auto=format&fit=crop") center/cover`, margin: "20px 20px 20px 0", borderRadius: "14px" }}>
          <FloatingCard label="Next available" value="Tomorrow, 10am" displayFont="'Fraunces', serif" />
        </div>
      </div>
    </div>
  );
}

// 2. CAFÉ — brutalist tipografico, NO foto, testo enorme
function CafeTemplate() {
  const bg = "#FFEC3D", text = "#0d0d0d";
  return (
    <div style={{ background: bg, borderRadius: "16px", overflow: "hidden", border: "1px solid #0d0d0d", boxShadow: "0 8px 30px rgba(26,26,46,0.08)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <BrowserBar domain="folkandcrumb.com.au" textColor="#666" />
      <div style={{ padding: "14px 28px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `2px solid ${text}` }}>
        <div style={{ fontSize: "15px", fontWeight: 900, color: text, letterSpacing: "-0.02em", textTransform: "uppercase" }}>★ Folk &amp; Crumb ★</div>
        <div style={{ display: "flex", gap: "16px", fontSize: "11px", color: text, fontWeight: 600, alignItems: "center" }}>
          <span style={{ textDecoration: "underline" }}>Menu</span>
          <span>Find us</span>
          <span>Wholesale</span>
          <span style={{ background: text, color: bg, padding: "6px 14px", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>View menu →</span>
        </div>
      </div>
      <div style={{ padding: "40px 36px 30px", display: "flex", flexDirection: "column", gap: "20px", minHeight: "300px", justifyContent: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ fontSize: "11px", fontWeight: 800, color: text, letterSpacing: "0.18em", textTransform: "uppercase", display: "flex", justifyContent: "space-between" }}>
          <span>● Newtown</span>
          <span>● Open today · 7am — 3pm</span>
          <span>● Est. 2019</span>
        </div>
        <h1 style={{ fontSize: "72px", fontWeight: 900, color: text, letterSpacing: "-0.04em", lineHeight: 0.88, margin: 0, textTransform: "uppercase" }}>
          Slow coffee.<br />
          <span style={{ WebkitTextStroke: `2px ${text}`, WebkitTextFillColor: "transparent" }}>Good bread.</span>
        </h1>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "10px", gap: "24px" }}>
          <p style={{ fontSize: "13px", color: text, lineHeight: 1.5, margin: 0, maxWidth: "300px", fontWeight: 500 }}>
            Specialty espresso and sourdough, baked fresh every morning. A quiet corner spot to start the day right.
          </p>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <div style={{ background: text, color: bg, padding: "12px 16px", fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em" }}>☕ Today&apos;s menu</div>
            <div style={{ border: `2px solid ${text}`, color: text, padding: "10px 14px", fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em" }}>Find us →</div>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: text, color: bg, padding: "8px 28px", fontSize: "10px", fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", display: "flex", justifyContent: "space-between" }}>
          <span>★ Croissants out at 8am</span>
          <span>★ Single origin espresso</span>
          <span>★ Sourdough daily</span>
        </div>
      </div>
    </div>
  );
}

// 3. PERSONAL TRAINER — nero/giallo neon
function PersonalTrainerTemplate() {
  const bg = "#0d0d0d", text = "#fff", muted = "#b8b8b8", accent = "#e8ff00";
  return (
    <div style={{ background: bg, borderRadius: "16px", overflow: "hidden", border: "1px solid #2a2a2a", boxShadow: "0 8px 30px rgba(26,26,46,0.08)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <BrowserBar domain="maxreilly.com.au" textColor="#7a7a7a" dark />
      <div style={{ padding: "14px 28px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "0.5px solid rgba(255,255,255,0.08)" }}>
        <div>
          <div style={{ fontSize: "15px", fontWeight: 700, color: text, letterSpacing: "-0.01em" }}>MAX REILLY</div>
          <div style={{ fontSize: "8px", letterSpacing: "0.22em", color: accent, textTransform: "uppercase", marginTop: "1px", fontWeight: 600 }}>Strength coach · Surry Hills</div>
        </div>
        <div style={{ display: "flex", gap: "18px", fontSize: "11px", color: muted, alignItems: "center" }}>
          <span>Programs</span><span>Results</span><span>Pricing</span><span>Contact</span>
          <span style={{ background: accent, color: "#0d0d0d", padding: "5px 12px", borderRadius: "100px", fontSize: "10px", fontWeight: 700, marginLeft: "4px" }}>Start now</span>
        </div>
      </div>
      <div style={{ display: "flex", minHeight: "340px" }}>
        <div style={{ flex: "1 1 56%", padding: "36px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "14px" }}>
          <Badge bg="#1f1f1f" color={accent} dot>3 spots open this month</Badge>
          <h1 style={{ fontSize: "38px", fontWeight: 800, color: text, letterSpacing: "-0.035em", lineHeight: 0.95, margin: 0, textTransform: "uppercase" }}>
            Train smart.<br />
            <span style={{ color: accent }}>Get strong.</span>
          </h1>
          <p style={{ fontSize: "13px", color: muted, lineHeight: 1.6, margin: 0, maxWidth: "330px" }}>
            1-on-1 strength coaching in Surry Hills. Real progress, real numbers, no quick fixes or gimmicks.
          </p>
          <CTAs primary="⚡ Get my plan" secondary="See results →" accent={accent} accentText="#0d0d0d" borderColor="#2a2a2a" textColor={text} />
          <Stats items={[{v:"120+",l:"Clients trained"},{v:"8 yrs",l:"Coaching"},{v:"★ 4.9",l:"Avg rating"}]} textColor={text} subtleColor="#7a7a7a" displayFont="'Plus Jakarta Sans', sans-serif" borderColor="rgba(255,255,255,0.12)" />
        </div>
        <div style={{ flex: "0 0 44%", position: "relative", background: `url("https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80&auto=format&fit=crop") center/cover`, margin: "20px 20px 20px 0", borderRadius: "14px" }}>
          <FloatingCard label="Free intro session" value="This week only" displayFont="'Plus Jakarta Sans', sans-serif" bold />
        </div>
      </div>
    </div>
  );
}

// 4. TATTOO ARTIST — playful, rosa/viola/arancio, forme arrotondate
function TattooArtistTemplate() {
  const bg = "#FFE5D9", text = "#2a1a3e", muted = "#6b5478", accent = "#FF4D6D", accent2 = "#7B2CBF";
  return (
    <div style={{ background: bg, borderRadius: "16px", overflow: "hidden", border: "1px solid #f0c8b8", boxShadow: "0 8px 30px rgba(26,26,46,0.08)", fontFamily: "'Plus Jakarta Sans', sans-serif", position: "relative" }}>
      {/* Decorative blob in background */}
      <div style={{ position: "absolute", top: "-40px", right: "-60px", width: "240px", height: "240px", background: "#FFC4D6", borderRadius: "50%", opacity: 0.6, pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-30px", left: "20%", width: "160px", height: "160px", background: "#E0B0FF", borderRadius: "50%", opacity: 0.4, pointerEvents: "none" }} />

      <BrowserBar domain="leelovesink.com.au" textColor="#9c8499" />

      <div style={{ padding: "14px 28px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "0.5px solid rgba(123, 44, 191, 0.15)", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: accent, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>🌸</div>
          <div>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: "16px", fontWeight: 600, color: text, letterSpacing: "-0.01em", fontStyle: "italic" }}>Lee Loves Ink</div>
            <div style={{ fontSize: "8px", letterSpacing: "0.18em", color: muted, textTransform: "uppercase", marginTop: "1px" }}>Tattoo studio · Newtown</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: "18px", fontSize: "11px", color: muted, alignItems: "center" }}>
          <span>Gallery</span><span>Styles</span><span>FAQ</span><span>Contact</span>
          <span style={{ background: text, color: bg, padding: "7px 16px", borderRadius: "100px", fontSize: "10px", fontWeight: 700, marginLeft: "4px" }}>Book a session</span>
        </div>
      </div>

      <div style={{ display: "flex", minHeight: "340px", position: "relative", zIndex: 1 }}>
        <div style={{ flex: "1 1 56%", padding: "36px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "14px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#fff", color: accent2, fontSize: "10px", fontWeight: 700, padding: "5px 13px", borderRadius: "100px", width: "fit-content", border: `1.5px solid ${accent2}` }}>
            <span style={{ width: "5px", height: "5px", background: accent, borderRadius: "50%" }} />
            Books open for September ✨
          </div>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "38px", fontWeight: 600, color: text, letterSpacing: "-0.025em", lineHeight: 1, margin: 0 }}>
            Tiny tattoos.<br />
            <span style={{ fontStyle: "italic", fontWeight: 500, color: accent }}>Big </span>
            <span style={{ fontStyle: "italic", fontWeight: 500, color: accent2 }}>feelings.</span>
          </h1>
          <p style={{ fontSize: "13px", color: muted, lineHeight: 1.6, margin: 0, maxWidth: "330px" }}>
            Fine-line and floral work in a sunny Newtown studio. Walk-ins on Saturdays, custom designs by appointment.
          </p>
          <div style={{ display: "flex", gap: "8px", marginTop: "4px", flexWrap: "wrap" }}>
            <span style={{ background: text, color: bg, fontSize: "11px", fontWeight: 700, padding: "10px 20px", borderRadius: "100px", display: "inline-flex", alignItems: "center", gap: "6px" }}>
              🌷 Book your piece
            </span>
            <span style={{ background: "transparent", color: text, fontSize: "11px", fontWeight: 600, padding: "10px 20px", borderRadius: "100px", border: `1.5px solid ${text}` }}>See gallery →</span>
          </div>
          {/* Pill-style stats */}
          <div style={{ display: "flex", gap: "8px", marginTop: "16px", flexWrap: "wrap" }}>
            <span style={{ background: "#fff", color: text, padding: "6px 13px", borderRadius: "100px", fontSize: "11px", fontWeight: 600, border: `1px solid ${accent}33` }}>
              ✨ <strong style={{ color: accent }}>500+</strong> happy clients
            </span>
            <span style={{ background: "#fff", color: text, padding: "6px 13px", borderRadius: "100px", fontSize: "11px", fontWeight: 600, border: `1px solid ${accent2}33` }}>
              🌟 <strong style={{ color: accent2 }}>5.0</strong> on Google
            </span>
          </div>
        </div>
        <div style={{ flex: "0 0 44%", position: "relative", background: `url("https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=800&q=80&auto=format&fit=crop") center/cover`, margin: "20px 20px 20px 0", borderRadius: "24px" }}>
          <div style={{ position: "absolute", bottom: "16px", left: "16px", background: "#fff", borderRadius: "100px", padding: "8px 14px 8px 8px", boxShadow: "0 4px 16px rgba(0,0,0,0.12)", display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: accent, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px" }}>🌷</div>
            <div>
              <div style={{ fontSize: "8px", color: "#7a8a85", letterSpacing: "0.06em", textTransform: "uppercase" }}>Next slot</div>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: "12px", fontWeight: 600, color: text, fontStyle: "italic" }}>Sat at 2pm</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 5. YOGA STUDIO — struttura diversa: foto full-width in alto, contenuto centrato sotto
function YogaTemplate() {
  const bg = "#f4f1ec", text = "#3a342a", muted = "#7a7263", accent = "#8b6f47";
  return (
    <div style={{ background: bg, borderRadius: "16px", overflow: "hidden", border: "1px solid #d6c9b5", boxShadow: "0 8px 30px rgba(26,26,46,0.08)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <BrowserBar domain="stillstudio.com.au" textColor="#9c9485" />
      {/* Navbar minimale centrata */}
      <div style={{ padding: "14px 28px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", gap: "18px", fontSize: "11px", color: muted, alignItems: "center" }}>
          <span>Classes</span><span>Teachers</span>
        </div>
        <div style={{ fontFamily: "'Fraunces', serif", fontSize: "17px", fontWeight: 500, color: text, letterSpacing: "0.04em", fontStyle: "italic" }}>still studio</div>
        <div style={{ display: "flex", gap: "18px", fontSize: "11px", color: muted, alignItems: "center" }}>
          <span>Pricing</span>
          <span style={{ background: accent, color: "#fff", padding: "5px 12px", borderRadius: "100px", fontSize: "10px", fontWeight: 600 }}>Book</span>
        </div>
      </div>
      {/* Foto full-width con titolo in overlay */}
      <div style={{ position: "relative", height: "200px", margin: "0 20px", borderRadius: "16px", overflow: "hidden", background: `url("https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1200&q=80&auto=format&fit=crop") center 40%/cover` }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(58,52,42,0.1), rgba(58,52,42,0.55))" }} />
        <div style={{ position: "absolute", bottom: "20px", left: 0, right: 0, textAlign: "center" }}>
          <div style={{ fontSize: "9px", color: "#fff", letterSpacing: "0.32em", textTransform: "uppercase", marginBottom: "8px", opacity: 0.9 }}>Yoga &amp; meditation · Mosman</div>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "40px", fontWeight: 400, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1, margin: 0 }}>
            Breathe. Move. <span style={{ fontStyle: "italic" }}>Return.</span>
          </h1>
        </div>
      </div>
      {/* Contenuto sotto, centrato */}
      <div style={{ padding: "28px 36px 36px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "16px" }}>
        <p style={{ fontFamily: "'Fraunces', serif", fontSize: "14px", color: muted, lineHeight: 1.7, margin: 0, maxWidth: "440px", fontStyle: "italic" }}>
          Vinyasa, yin and meditation in a quiet, light-filled studio. All levels welcome — drop in any time, or join a course.
        </p>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <span style={{ background: text, color: bg, padding: "11px 26px", fontSize: "10px", fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", borderRadius: "100px" }}>Book a class</span>
          <span style={{ color: text, padding: "11px 6px", fontSize: "10px", fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", borderBottom: `0.5px solid ${text}` }}>Timetable</span>
        </div>
        {/* Riga info orizzontale invece di stats verticali */}
        <div style={{ display: "flex", gap: "0", marginTop: "10px", borderTop: `0.5px solid ${accent}33`, paddingTop: "18px", width: "100%", maxWidth: "440px", justifyContent: "space-around" }}>
          {[{v:"20+",l:"Classes weekly"},{v:"8",l:"Teachers"},{v:"First free",l:"New students"}].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: "16px", fontWeight: 500, color: text, fontStyle: "italic" }}>{s.v}</div>
              <div style={{ fontSize: "8px", color: muted, letterSpacing: "0.08em", textTransform: "uppercase", marginTop: "2px" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// =============== SHARED SMALL COMPONENTS ===============

function BrowserBar({ domain, textColor, dark }: { domain: string; textColor: string; dark?: boolean }) {
  return (
    <div style={{ background: dark ? "#1f1f1f" : "#ffffff", padding: "10px 14px", borderBottom: dark ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.06)", display: "flex", alignItems: "center", gap: "6px" }}>
      <div style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#ff5f57" }} />
      <div style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#febc2e" }} />
      <div style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#28c840" }} />
      <div style={{ flex: 1, marginLeft: "10px", fontSize: "11px", color: textColor }}>{domain}</div>
    </div>
  );
}

function Badge({ bg, color, dot, children }: { bg: string; color: string; dot?: boolean; children: React.ReactNode }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: bg, color, fontSize: "10px", fontWeight: 600, padding: "4px 11px", borderRadius: "100px", width: "fit-content" }}>
      {dot && <span style={{ width: "5px", height: "5px", background: color, borderRadius: "50%" }} />}
      {children}
    </div>
  );
}

function CTAs({ primary, secondary, accent, accentText, borderColor, textColor }: { primary: string; secondary: string; accent: string; accentText: string; borderColor: string; textColor: string }) {
  return (
    <div style={{ display: "flex", gap: "8px", marginTop: "4px", flexWrap: "wrap" }}>
      <span style={{ background: accent, color: accentText, fontSize: "11px", fontWeight: 600, padding: "9px 18px", borderRadius: "100px", display: "inline-flex", alignItems: "center", gap: "6px" }}>{primary}</span>
      <span style={{ background: "transparent", color: textColor, fontSize: "11px", fontWeight: 500, padding: "9px 18px", borderRadius: "100px", border: `1px solid ${borderColor}` }}>{secondary}</span>
    </div>
  );
}

function Stats({ items, textColor, subtleColor, displayFont, borderColor }: { items: { v: string; l: string }[]; textColor: string; subtleColor: string; displayFont: string; borderColor: string }) {
  return (
    <div style={{ display: "flex", gap: "20px", marginTop: "16px", paddingTop: "16px", borderTop: `0.5px solid ${borderColor}` }}>
      {items.map(s => (
        <div key={s.l}>
          <div style={{ fontFamily: displayFont, fontSize: "17px", fontWeight: 600, color: textColor }}>{s.v}</div>
          <div style={{ fontSize: "9px", color: subtleColor, letterSpacing: "0.05em", textTransform: "uppercase" }}>{s.l}</div>
        </div>
      ))}
    </div>
  );
}

function FloatingCard({ label, value, displayFont, bold }: { label: string; value: string; displayFont: string; bold?: boolean }) {
  return (
    <div style={{ position: "absolute", bottom: "16px", left: "16px", background: "#fff", borderRadius: "12px", padding: "10px 14px", boxShadow: "0 4px 16px rgba(0,0,0,0.12)" }}>
      <div style={{ fontSize: "9px", color: "#7a8a85", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "2px" }}>{label}</div>
      <div style={{ fontFamily: displayFont, fontSize: "13px", fontWeight: bold ? 700 : 600, color: "#1a2e2a" }}>{value}</div>
    </div>
  );
}

// =============== MAIN COMPONENT ===============

const tabs = [
  { name: "Physiotherapist", style: "Classic", comp: <PhysioTemplate /> },
  { name: "Café", style: "Brutalist", comp: <CafeTemplate /> },
  { name: "Personal trainer", style: "Bold", comp: <PersonalTrainerTemplate /> },
  { name: "Yoga studio", style: "Editorial", comp: <YogaTemplate /> },
  { name: "Tattoo artist", style: "Playful", comp: <TattooArtistTemplate /> },
];

export default function Templates() {
  const [idx, setIdx] = useState(0);
  return (
    <section style={{ paddingBottom: "40px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "28px" }}>
        <div style={{ flex: 1, height: "1.5px", background: "#c8d3e0" }} />
        <span style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#3b82c4", whiteSpace: "nowrap" }}>What yours could look like</span>
        <div style={{ flex: 1, height: "1.5px", background: "#c8d3e0" }} />
      </div>

      <div style={{ background: "#fff", border: "1px solid #c8d3e0", borderRadius: "20px", padding: "28px 32px", boxShadow: "0 2px 16px rgba(26,26,46,0.07)" }}>
        <p style={{ fontSize: "14px", color: "#5a6475", lineHeight: 1.7, marginBottom: "22px", maxWidth: "560px" }}>
          Five totally different design directions to show what&apos;s possible — your site can lean classic, bold, minimal, brutalist, whatever fits your brand. Pick a vibe and we&apos;ll shape it around you.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "18px" }}>
          {tabs.map((t, i) => (
            <button key={t.name} onClick={() => setIdx(i)} style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "12px", fontWeight: 600,
              padding: "6px 14px", borderRadius: "100px",
              border: i === idx ? "1px solid #1a1a2e" : "1px solid #c8d3e0",
              background: i === idx ? "#1a1a2e" : "#fff",
              color: i === idx ? "#fff" : "#374151",
              cursor: "pointer",
              transition: "all 0.15s",
              display: "inline-flex", alignItems: "center", gap: "8px",
            }}>
              <span>{t.name}</span>
              <span style={{ fontSize: "9px", opacity: 0.6, fontWeight: 500 }}>{t.style}</span>
            </button>
          ))}
        </div>

        <div style={{ marginBottom: "20px" }}>{tabs[idx].comp}</div>

        <div style={{ background: "#eef1f5", borderRadius: "14px", padding: "18px 22px" }}>
          <p style={{ fontSize: "12px", fontWeight: 700, color: "#2563ab", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
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