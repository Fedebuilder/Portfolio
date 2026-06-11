'use client';
import { useTranslation } from 'react-i18next';

const icons = ['📅', '🗺️', '🔍', '💳'];

export default function Addons() {
  const { t } = useTranslation('common');
  const items = t('addons.items', { returnObjects: true }) as Array<{ title: string; desc: string }>;

  return (
    <section style={{ paddingBottom: '40px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
        <div style={{ flex: 1, height: '1.5px', background: '#c8d3e0' }} />
        <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.14em', color: '#3b82c4', whiteSpace: 'nowrap' as const }}>{t('addons.title')}</span>
        <div style={{ flex: 1, height: '1.5px', background: '#c8d3e0' }} />
      </div>

      <div className="card-pad" style={{ background: '#fff', border: '1px solid #c8d3e0', borderRadius: '20px', padding: '28px 32px', boxShadow: '0 2px 16px rgba(26,26,46,0.07)' }}>
        <p style={{ fontSize: '14px', color: '#5a6475', lineHeight: 1.7, marginBottom: '22px', maxWidth: '560px' }}>
          {t('addons.subtitle')}
        </p>

        <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {items.map((a, i) => (
            <div key={i} style={{
              display: 'flex', gap: '14px', alignItems: 'flex-start',
              padding: '16px 18px', border: '1px solid #e4eaf2', borderRadius: '14px'
            }}>
              <div style={{
                fontSize: '20px', width: '40px', height: '40px',
                background: '#eef1f5', borderRadius: '10px', flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>{icons[i]}</div>
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontFamily: "'Fraunces', serif", fontSize: '15px', fontWeight: 600,
                  color: '#111827', marginBottom: '4px', letterSpacing: '-0.01em'
                }}>{a.title}</h3>
                <p style={{ fontSize: '12.5px', color: '#5a6475', lineHeight: 1.55 }}>{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
