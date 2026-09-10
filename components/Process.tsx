'use client';
import { useTranslation } from 'react-i18next';
import SectionHeader from './ui/SectionHeader';
import Card from './ui/Card';
import { colors, fonts } from '@/lib/theme';

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
                borderBottom: i < steps.length - 1 ? `1px solid ${colors.bgSubtle}` : 'none',
              }}
            >
              <div
                style={{
                  fontFamily: fonts.serif,
                  fontSize: '22px',
                  fontWeight: 600,
                  color: colors.sky,
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
                    fontFamily: fonts.serif,
                    fontSize: '16px',
                    fontWeight: 600,
                    color: colors.ink,
                    marginBottom: '5px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ fontSize: '13px', color: colors.inkMuted, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}
