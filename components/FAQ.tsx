'use client';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SectionHeader from './ui/SectionHeader';
import Card from './ui/Card';

export default function FAQ() {
  const { t } = useTranslation('common');
  const faqs = t('faq.items', { returnObjects: true }) as Array<{ q: string; a: string }>;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section style={{ paddingBottom: '40px' }}>
      <SectionHeader label={t('faq.title')} />

      <Card padding="12px 8px">
        {faqs.map((f, i) => (
          <div key={i} style={{ borderBottom: i < faqs.length - 1 ? '1px solid #eef1f5' : 'none' }}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                width: '100%',
                textAlign: 'left' as const,
                background: 'none',
                border: 'none',
                padding: '16px 24px',
                cursor: 'pointer',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <span
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#111827',
                  letterSpacing: '-0.01em',
                }}
              >
                {f.q}
              </span>
              <span
                style={{
                  color: '#3b82c4',
                  fontSize: '20px',
                  flexShrink: 0,
                  transform: open === i ? 'rotate(45deg)' : 'rotate(0)',
                  transition: 'transform 0.2s',
                }}
              >
                +
              </span>
            </button>
            {open === i && (
              <div style={{ padding: '0 24px 18px', maxWidth: '640px' }}>
                <p style={{ fontSize: '13.5px', color: '#5a6475', lineHeight: 1.7 }}>{f.a}</p>
              </div>
            )}
          </div>
        ))}
      </Card>
    </section>
  );
}
