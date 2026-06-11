'use client';
import { useTranslation } from 'react-i18next';

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
            background: '#ddeeff', color: '#2563ab', fontSize: '12px',
            fontWeight: 600, padding: '5px 14px', borderRadius: '100px',
            marginBottom: '20px'
          }}>
            <span style={{ width: '6px', height: '6px', background: '#3b82c4', borderRadius: '50%', display: 'inline-block' }} />
            {t('hero.tag')}
          </div>
          <h1 className="hero-h1" style={{
            fontFamily: "'Fraunces', serif", fontSize: '46px', fontWeight: 600,
            lineHeight: 1.05, letterSpacing: '-0.025em', color: '#111827', marginBottom: '18px'
          }}>
            {t('hero.title_1')}<br />
            {t('hero.title_2')}{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 500, color: '#2563ab' }}>{t('hero.title_3')}</em>
          </h1>
          <p style={{
            fontSize: '16px', color: '#4b5563', lineHeight: 1.65,
            marginBottom: '24px', maxWidth: '480px'
          }}>
            {t('hero.subtitle')}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '8px' }}>
            {['Next.js', 'React', 'TypeScript', 'Supabase', 'Stripe', 'Tailwind CSS'].map(tag => (
              <span key={tag} style={{
                background: '#fff', border: '1px solid #c8d3e0',
                color: '#374151', fontSize: '12px', fontWeight: 600,
                padding: '5px 13px', borderRadius: '100px'
              }}>{tag}</span>
            ))}
          </div>
        </div>

        {/* Foto + caption */}
        <div style={{ flex: '0 0 auto', display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: '14px' }}>
          <div style={{
            width: '260px', height: '320px',
            borderRadius: '24px',
            overflow: 'hidden',
            background: '#e4eaf2',
            border: '1px solid #c8d3e0',
            boxShadow: '0 8px 30px rgba(26,26,46,0.12)',
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
            fontSize: '13px', color: '#4b5563',
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
