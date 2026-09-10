'use client';
import { useTranslation } from 'react-i18next';
import SectionHeader from './ui/SectionHeader';
import Card from './ui/Card';

const icons = ['👻', '🧩', '🔗'];

export default function Shift() {
  const { t } = useTranslation('common');
  const points = t('shift.points', { returnObjects: true }) as Array<{ title: string; desc: string }>;

  return (
    <section style={{ paddingBottom: '48px' }}>
      <SectionHeader label={t('shift.tag')} />

      <Card>
        <h2
          style={{
            fontFamily: "'Fraunces', serif",
            fontSize: '20px',
            fontWeight: 600,
            color: '#111827',
            marginBottom: '10px',
            letterSpacing: '-0.01em',
            maxWidth: '560px',
          }}
        >
          {t('shift.title')}
        </h2>
        <p style={{ fontSize: '14px', color: '#5a6475', lineHeight: 1.7, marginBottom: '26px', maxWidth: '560px' }}>
          {t('shift.subtitle')}
        </p>

        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '22px' }}>
          {points.map((item, i) => (
            <div key={i} style={{ background: '#eef1f5', borderRadius: '14px', padding: '20px 22px' }}>
              <div style={{ fontSize: '24px', marginBottom: '10px' }}>{icons[i]}</div>
              <h3
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#111827',
                  marginBottom: '6px',
                  letterSpacing: '-0.01em',
                }}
              >
                {item.title}
              </h3>
              <p style={{ fontSize: '12.5px', color: '#5a6475', lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <p style={{ fontSize: '13.5px', color: '#2563ab', fontWeight: 600, lineHeight: 1.6 }}>{t('shift.closing')}</p>
      </Card>
    </section>
  );
}
