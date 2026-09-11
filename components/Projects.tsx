'use client';
import { useTranslation } from 'react-i18next';
import SectionHeader from './ui/SectionHeader';
import { colors, fonts, shadows } from '@/lib/theme';

const projects = [
  {
    key: 'betterpdp',
    type_key: 'projects.betterpdp_tag',
    title_key: 'projects.betterpdp_title',
    desc_key: 'projects.betterpdp_desc',
    stack: ['AI visibility scoring', 'Multi-engine checks', 'Built solo'],
    link: 'https://betterpdp.com',
    screenshot: 'https://api.microlink.io/?url=https://betterpdp.com&screenshot=true&meta=false&embed=screenshot.url&force=true',
  },
  {
    key: 'camilla',
    type_key: 'projects.camilla_tag',
    title_key: 'projects.camilla_title',
    desc_key: 'projects.camilla_desc',
    stack: ['Built for search', 'Fast on mobile', 'WhatsApp booking'],
    link: 'https://www.camillagalli.com',
    screenshot: 'https://api.microlink.io/?url=https://www.camillagalli.com&screenshot=true&meta=false&embed=screenshot.url',
  },
  {
    // Not a build — a consulting engagement. Kept honest via the tag and the
    // "scope" pills below, which read as advisory work, not a tech stack.
    key: 'mountainhorses',
    type_key: 'projects.mountainhorses_tag',
    title_key: 'projects.mountainhorses_title',
    desc_key: 'projects.mountainhorses_desc',
    stack: ['Positioning', 'AI search visibility', 'Content strategy'],
    link: 'https://mountainhorsesoutfitters.nz',
    // Their site sits behind bot protection (Cloudflare-style challenge),
    // so Microlink can't screenshot it live — it just captures the
    // "verifying you are not a robot" page. Using a manually captured
    // static image instead. Drop the file at public/mountainhorses.jpeg.
    screenshot: '/mountainhorses.jpeg',
  },
];

export default function Projects() {
  const { t } = useTranslation('common');

  return (
    <section id="projects" style={{ paddingBottom: '48px', scrollMarginTop: '32px' }}>
      <SectionHeader label={t('projects.title')} />

      {/* auto-fit instead of a fixed 2-col grid: handles 2 or 3 cards cleanly
          without an orphaned card on its own row, and still collapses to 1
          column on narrow screens without needing the .grid-2 media query. */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
        {projects.map((p) => (
          <a key={p.key} href={p.link} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
            <div
              style={{ background: colors.surface, border: `1px solid ${colors.border}`, borderRadius: '20px', overflow: 'hidden', boxShadow: shadows.card, cursor: 'pointer' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = shadows.cardHover;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = shadows.card;
              }}
            >
              <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', background: colors.skyLight }}>
                <img src={p.screenshot} alt={t(p.title_key)} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
              </div>
              <div style={{ padding: '20px 24px' }}>
                <p style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.1em', color: colors.sky, marginBottom: '5px' }}>
                  {t(p.type_key)}
                </p>
                <h2 style={{ fontFamily: fonts.serif, fontSize: '18px', fontWeight: 600, color: colors.ink, marginBottom: '8px', letterSpacing: '-0.01em' }}>
                  {t(p.title_key)}
                </h2>
                <p style={{ fontSize: '13px', color: colors.inkSubtle, lineHeight: 1.6, marginBottom: '14px' }}>{t(p.desc_key)}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '5px' }}>
                  {p.stack.map((s) => (
                    <span key={s} style={{ background: colors.bgSubtle, border: `1px solid ${colors.border}`, color: colors.inkSoft, fontSize: '11px', fontWeight: 600, padding: '2px 10px', borderRadius: '100px' }}>
                      {s}
                    </span>
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