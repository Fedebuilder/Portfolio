'use client';
import { useTranslation } from 'react-i18next';
import { colors, fonts } from '@/lib/theme';

export default function Contact() {
  const { t } = useTranslation('common');

  return (
    <section style={{ paddingBottom: '48px' }}>
      <div style={{ background: colors.navy, borderRadius: '20px', padding: '32px 36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <h2 style={{ fontFamily: fonts.serif, fontSize: '22px', fontWeight: 600, color: '#fff', letterSpacing: '-0.01em', marginBottom: '6px' }}>{t('contact.title')}</h2>
          <p style={{ fontSize: '13px', color: colors.navyMuted }}>{t('contact.subtitle')}</p>
        </div>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <a href="https://wa.me/393343613449" target="_blank" rel="noreferrer" style={{ background: '#fff', color: colors.navy, fontSize: '13px', fontWeight: 700, padding: '11px 22px', borderRadius: '100px', textDecoration: 'none' }}>{t('contact.whatsapp')} →</a>
          <a href="mailto:federico.demicco@gmail.com" style={{ background: 'transparent', color: '#fff', fontSize: '13px', fontWeight: 500, padding: '11px 22px', borderRadius: '100px', textDecoration: 'none', border: `0.5px solid ${colors.navyBorder}` }}>{t('contact.email')}</a>
        </div>
      </div>

      {/* Easter egg: Bubu the avocado */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: '10px', marginTop: '24px'
      }}>
        <div style={{
          width: '30px', height: '30px', borderRadius: '50%',
          overflow: 'hidden', background: '#f0f9ee', flexShrink: 0,
        }}>
          <img
            src="/bubu.jpg"
            alt="Bubu the avocado"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 32%',
              transform: 'scale(1.6)'
            }}
          />
        </div>
        <p style={{ fontSize: '11px', color: colors.inkFaint }}>
          {t('footer.easter_egg')}
        </p>
      </div>

      <p style={{ fontSize: '11px', color: colors.inkFaint, textAlign: 'center', marginTop: '8px' }}>
        ABN 55 205 599 547 · federico.demicco@gmail.com
      </p>
    </section>
  );
}
