'use client';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function FAQ() {
  const { t } = useTranslation('common');
  const faqs = t('faq.items', { returnObjects: true }) as Array<{ q: string; a: string }>;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section style={{ paddingBottom: '40px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
        <div style={{ flex: 1, height: '1.5px', background: '#c8d3e0' }} />
        <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.14em', color: '#3b82c4', whiteSpace: 'nowrap' as const }}>{t('faq.title')}</span>
        <div style={{ flex: 1, height: '1.5px', background: '#c8d3e0' }} />
      </div>

      <div style={{ background: '#fff', border: '1px solid #c8d3e0', borderRadius: '20px', padding: '12px 8px', boxShadow: '0 2px 16px rgba(26,26,46,0.07)' }}>
        {faqs.map((f, i) => (
          <div key={i} style={{ borderBottom: i < faqs.length - 1 ? '1px solid #eef1f5' : 'none' }}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                width: '100%', textAlign: 'left' as const,
                background: 'none', border: 'none', padding: '16px 24px',
                cursor: 'pointer', fontFamily: "'Plus Jakarta Sans', sans-serif",
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px'
              }}
            >
              <span style={{
                fontFamily: "'Fraunces', serif", fontSize: '15px', fontWeight: 600,
                color: '#111827', letterSpacing: '-0.01em'
              }}>{f.q}</span>
              <span style={{
                color: '#3b82c4', fontSize: '20px', flexShrink: 0,
                transform: open === i ? 'rotate(45deg)' : 'rotate(0)',
                transition: 'transform 0.2s'
              }}>+</span>
            </button>
            {open === i && (
              <div style={{ padding: '0 24px 18px', maxWidth: '640px' }}>
                <p style={{ fontSize: '13.5px', color: '#5a6475', lineHeight: 1.7 }}>{f.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
