'use client';
import { useTranslation } from 'react-i18next';
import SectionHeader from './ui/SectionHeader';
import Card from './ui/Card';
import { colors, fonts } from '@/lib/theme';

const icons = ['🔍', '🗺️', '🏷️', '📡'];

export default function Addons() {
  const { t } = useTranslation('common');
  const items = t('addons.items', { returnObjects: true }) as Array<{ title: string; desc: string }>;

  return (
    <section style={{ paddingBottom: '40px' }}>
      <SectionHeader label={t('addons.title')} />

      <Card>
        <p style={{ fontSize: '14px', color: colors.inkMuted, lineHeight: 1.7, marginBottom: '22px', maxWidth: '560px' }}>
          {t('addons.subtitle')}
        </p>

        <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {items.map((a, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                gap: '14px',
                alignItems: 'flex-start',
                padding: '16px 18px',
                border: `1px solid ${colors.skyLight}`,
                borderRadius: '14px',
              }}
            >
              <div
                style={{
                  fontSize: '20px',
                  width: '40px',
                  height: '40px',
                  background: colors.bgSubtle,
                  borderRadius: '10px',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {icons[i]}
              </div>
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontFamily: fonts.serif,
                    fontSize: '15px',
                    fontWeight: 600,
                    color: colors.ink,
                    marginBottom: '4px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {a.title}
                </h3>
                <p style={{ fontSize: '12.5px', color: colors.inkMuted, lineHeight: 1.55 }}>{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}
