'use client';
import { useTranslation } from 'react-i18next';

export default function Process() {
  const { t } = useTranslation('common');
  const steps = t('process.steps', { returnObjects: true }) as Array<{ title: string; desc: string }>;

  return (
    <section style={{ paddingBottom: '40px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
        <div style={{ flex: 1, height: '1.5px', background: '#c8d3e0' }} />
        <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.14em', color: '#3b82c4', whiteSpace: 'nowrap' as const }}>{t('process.subtitle')}</span>
        <div style={{ flex: 1, height: '1.5px', background: '#c8d3e0' }} />
      </div>

      <div className="card-pad" style={{ background: '#fff', border: '1px solid #c8d3e0', borderRadius: '20px', padding: '28px 32px', boxShadow: '0 2px 16px rgba(26,26,46,0.07)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {steps.map((s, i) => (
            <div key={i} style={{
              display: 'flex', gap: '18px', alignItems: 'flex-start',
              paddingBottom: i < steps.length - 1 ? '18px' : '0',
              borderBottom: i < steps.length - 1 ? '1px solid #eef1f5' : 'none'
            }}>
              <div style={{
                fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: 600,
                color: '#3b82c4', flexShrink: 0, lineHeight: 1, width: '36px'
              }}>{String(i + 1).padStart(2, '0')}</div>
              <div>
                <h3 style={{
                  fontFamily: "'Fraunces', serif", fontSize: '16px', fontWeight: 600,
                  color: '#111827', marginBottom: '5px', letterSpacing: '-0.01em'
                }}>{s.title}</h3>
                <p style={{ fontSize: '13px', color: '#5a6475', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
