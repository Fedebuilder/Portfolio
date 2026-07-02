'use client';
import { useTranslation } from 'react-i18next';

const icons = ['👻', '🧩', '🔗'];

export default function Shift() {
  const { t } = useTranslation('common');
  const points = t('shift.points', { returnObjects: true }) as Array<{ title: string; desc: string }>;

  return (
    <section style={{ paddingBottom: '48px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
        <div style={{ flex: 1, height: '1.5px', background: '#c8d3e0' }} />
        <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.14em', color: '#3b82c4', whiteSpace: 'nowrap' as const }}>{t('shift.tag')}</span>
        <div style={{ flex: 1, height: '1.5px', background: '#c8d3e0' }} />
      </div>

      <div className="card-pad" style={{ background: '#fff', border: '1px solid #c8d3e0', borderRadius: '20px', padding: '28px 32px', boxShadow: '0 2px 16px rgba(26,26,46,0.07)' }}>
        <h2 style={{
          fontFamily: "'Fraunces', serif", fontSize: '20px', fontWeight: 600,
          color: '#111827', marginBottom: '10px', letterSpacing: '-0.01em', maxWidth: '560px'
        }}>{t('shift.title')}</h2>
        <p style={{ fontSize: '14px', color: '#5a6475', lineHeight: 1.7, marginBottom: '26px', maxWidth: '560px' }}>
          {t('shift.subtitle')}
        </p>

        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '22px' }}>
          {points.map((item, i) => (
            <div key={i} style={{ background: '#eef1f5', borderRadius: '14px', padding: '20px 22px' }}>
              <div style={{ fontSize: '24px', marginBottom: '10px' }}>{icons[i]}</div>
              <h3 style={{
                fontFamily: "'Fraunces', serif", fontSize: '15px', fontWeight: 600,
                color: '#111827', marginBottom: '6px', letterSpacing: '-0.01em'
              }}>{item.title}</h3>
              <p style={{ fontSize: '12.5px', color: '#5a6475', lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <p style={{ fontSize: '13.5px', color: '#2563ab', fontWeight: 600, lineHeight: 1.6 }}>
          {t('shift.closing')}
        </p>
      </div>
    </section>
  );
}