'use client';
import { useTranslation } from 'react-i18next';
import SectionHeader from './ui/SectionHeader';
import Card from './ui/Card';

export default function Process() {
  const { t } = useTranslation('common');
  const steps = t('process.steps', { returnObjects: true }) as Array<{ title: string; desc: string }>;

  return (
    <section style={{ paddingBottom: '40px' }}>
      <SectionHeader label={t('process.subtitle')} />

      <Card>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {steps.map((s, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                gap: '18px',
                alignItems: 'flex-start',
                paddingBottom: i < steps.length - 1 ? '18px' : '0',
                borderBottom: i < steps.length - 1 ? '1px solid #eef1f5' : 'none',
              }}
            >
              <div
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: '22px',
                  fontWeight: 600,
                  color: '#3b82c4',
                  flexShrink: 0,
                  lineHeight: 1,
                  width: '36px',
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#111827',
                    marginBottom: '5px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ fontSize: '13px', color: '#5a6475', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}
