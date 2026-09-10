'use client';
import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation';
import LangToggle from '@/components/LangToggle';
import { colors, fonts } from '@/lib/theme';

export default function Navbar() {
  const { t } = useTranslation('common');
  const pathname = usePathname();
  const locale = pathname.split('/')[1] as 'en' | 'it';

  return (
    <nav style={{ background: colors.bgSubtle, padding: '0 32px' }}>
      <div style={{
        maxWidth: '900px', margin: '0 auto',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '20px 0',
      }}>
        <span style={{
          fontFamily: fonts.serif, fontSize: '17px',
          fontWeight: 600, color: colors.ink, letterSpacing: '-0.01em'
        }}>Federico De Micco</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <LangToggle currentLocale={locale} />
          <a href="https://wa.me/393343613449" target="_blank" rel="noreferrer" style={{
            background: colors.navy, color: '#f2f5f8', fontSize: '13px',
            fontWeight: 600, padding: '9px 20px', borderRadius: '100px',
            textDecoration: 'none'
          }}>{t('nav.contact')}</a>
        </div>
      </div>
    </nav>
  );
}
