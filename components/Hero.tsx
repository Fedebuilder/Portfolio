'use client';
import { useTranslation } from 'react-i18next';
import { colors, fonts, shadows } from '@/lib/theme';
import LogoMarquee from './ui/LogoMarquee';

export default function Hero() {
  const { t } = useTranslation('common');

  return (
    <section style={{ padding: '56px 0 48px' }}>
      <div className="hero-wrap" style={{
        display: 'flex',
        gap: '44px',
        alignItems: 'center',
        flexWrap: 'wrap' as const,
      }}>
        {/* Testo a sinistra */}
        <div className="hero-text" style={{ flex: '1 1 420px', minWidth: 0 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '7px',
            background: '#ddeeff', color: colors.skyDark, fontSize: '12px',
            fontWeight: 600, padding: '5px 14px', borderRadius: '100px',
            marginBottom: '20px'
          }}>
            <span style={{ width: '6px', height: '6px', background: colors.sky, borderRadius: '50%', display: 'inline-block' }} />
            {t('hero.tag')}
          </div>
          <h1 className="hero-h1" style={{
            fontFamily: fonts.serif, fontSize: '46px', fontWeight: 600,
            lineHeight: 1.05, letterSpacing: '-0.025em', color: colors.ink, marginBottom: '18px'
          }}>
            {t('hero.title_1')}<br />
            {t('hero.title_2')}{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 500, color: colors.skyDark }}>{t('hero.title_3')}</em>
          </h1>
          <p style={{
            fontSize: '16px', color: colors.inkMuted, lineHeight: 1.65,
            marginBottom: '24px', maxWidth: '480px'
          }}>
            {t('hero.subtitle')}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap' as const, alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
            <a
              href="https://wa.me/393343613449"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: colors.navy, color: '#fff', fontSize: '14px', fontWeight: 700,
                padding: '13px 26px', borderRadius: '100px', textDecoration: 'none',
              }}
            >
              {t('hero.cta_primary')} →
            </a>
            <a
              href="#projects"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                background: 'transparent', color: colors.inkSoft, fontSize: '14px', fontWeight: 600,
                padding: '12px 22px', borderRadius: '100px', textDecoration: 'none',
                border: `1px solid ${colors.border}`,
              }}
            >
              {t('hero.cta_secondary')}
            </a>
            <a
              href="#about"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                background: 'transparent', color: colors.inkSoft, fontSize: '14px', fontWeight: 600,
                padding: '12px 22px', borderRadius: '100px', textDecoration: 'none',
                border: `1px solid ${colors.border}`,
              }}
            >
              {t('hero.cta_tertiary')}
            </a>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '8px', marginBottom: '28px' }}>
            {['Next.js', 'React', 'TypeScript', 'Supabase', 'Stripe', 'Tailwind CSS'].map(tag => (
              <span key={tag} style={{
                background: colors.surface, border: `1px solid ${colors.border}`,
                color: colors.inkSoft, fontSize: '12px', fontWeight: 600,
                padding: '5px 13px', borderRadius: '100px'
              }}>{tag}</span>
            ))}
          </div>

          <p style={{ fontSize: '11px', fontWeight: 700, color: colors.inkFaint, textTransform: 'uppercase' as const, letterSpacing: '0.08em', marginBottom: '12px' }}>
            {t('hero.logos_caption')}
          </p>
          <LogoMarquee />
        </div>

        {/* Foto + caption */}
        <div style={{ flex: '0 0 auto', display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: '14px' }}>
          <div style={{
            width: '260px', height: '320px',
            borderRadius: '24px',
            overflow: 'hidden',
            background: colors.skyLight,
            border: `1px solid ${colors.border}`,
            boxShadow: shadows.photo,
          }}>
            <img
              src="/federico-pups.jpg"
              alt="Federico De Micco"
              style={{
                width: '100%', height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 25%',
                transform: 'scale(1.25)',
                transformOrigin: 'center 30%'
              }}
            />
          </div>
          <p style={{
            fontSize: '13px', color: colors.inkMuted,
            fontStyle: 'italic' as const, textAlign: 'center' as const,
            maxWidth: '260px', lineHeight: 1.5
          }}>
            {t('hero.photo_caption')}
          </p>
        </div>
      </div>
    </section>
  );
}