'use client';
import { useTranslation } from 'react-i18next';
import { colors, fonts } from '@/lib/theme';

interface MidCTAProps {
  ns?: 'midcta' | 'midcta2';
}

export default function MidCTA({ ns = 'midcta' }: MidCTAProps) {
  const { t } = useTranslation('common');

  return (
    <section style={{ paddingBottom: '48px' }}>
      <div
        style={{
          background: colors.navy,
          borderRadius: '20px',
          padding: '32px 36px',
          textAlign: 'center' as const,
        }}
      >
        <h2
          style={{
            fontFamily: fonts.serif,
            fontSize: '22px',
            fontWeight: 600,
            color: '#fff',
            letterSpacing: '-0.01em',
            marginBottom: '8px',
          }}
        >
          {t(`${ns}.title`)}
        </h2>
        <p style={{ fontSize: '14px', color: colors.navyMuted, marginBottom: '22px' }}>{t(`${ns}.subtitle`)}</p>
        <a
          href="https://wa.me/393343613449"
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: '#fff',
            color: colors.navy,
            fontSize: '14px',
            fontWeight: 700,
            padding: '13px 26px',
            borderRadius: '100px',
            textDecoration: 'none',
          }}
        >
          {t(`${ns}.cta`)} →
        </a>
      </div>
    </section>
  );
}