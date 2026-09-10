'use client';
import { useTranslation } from 'react-i18next';
import SectionHeader from './ui/SectionHeader';
import Card from './ui/Card';
import { colors, fonts } from '@/lib/theme';

const icons = ['🛠️', '🔑', '📬'];

export default function AfterSale() {
  const { t } = useTranslation('common');
  const boxes = t('aftersale.boxes', { returnObjects: true }) as Array<{ title: string; desc: string }>;

  return (
    <section style={{ paddingBottom: '40px' }}>
      <SectionHeader label={t('aftersale.title')} />

      <Card>
        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {boxes.map((item, i) => (
            <div key={i} style={{ background: colors.bgSubtle, borderRadius: '14px', padding: '20px 22px' }}>
              <div style={{ fontSize: '24px', marginBottom: '10px' }}>{icons[i]}</div>
              <h3
                style={{
                  fontFamily: fonts.serif,
                  fontSize: '15px',
                  fontWeight: 600,
                  color: colors.ink,
                  marginBottom: '6px',
                  letterSpacing: '-0.01em',
                }}
              >
                {item.title}
              </h3>
              <p style={{ fontSize: '12.5px', color: colors.inkMuted, lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}
