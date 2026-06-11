'use client';

import { usePathname, useRouter } from 'next/navigation';

const LOCALES = ['en', 'it'] as const;
type Locale = (typeof LOCALES)[number];

interface LangToggleProps {
  currentLocale: Locale;
}

export default function LangToggle({ currentLocale }: LangToggleProps) {
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = currentLocale === 'en' ? 'it' : 'en';

  function handleSwitch() {
    // Replace the locale segment at the start of the path
    const newPath = pathname.replace(`/${currentLocale}`, `/${switchTo}`);
    router.push(newPath);
  }

  return (
    <button
      onClick={handleSwitch}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        padding: '6px 14px',
        borderRadius: '20px',
        border: '1.5px solid #2563ab',
        background: 'transparent',
        color: '#2563ab',
        fontSize: '13px',
        fontWeight: 600,
        fontFamily: 'inherit',
        cursor: 'pointer',
        letterSpacing: '0.02em',
        transition: 'all 0.15s ease',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = '#2563ab';
        (e.currentTarget as HTMLButtonElement).style.color = '#fff';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
        (e.currentTarget as HTMLButtonElement).style.color = '#2563ab';
      }}
      aria-label={`Switch to ${switchTo === 'en' ? 'English' : 'Italiano'}`}
    >
      <span style={{ fontSize: '15px' }}>{switchTo === 'it' ? '🇮🇹' : '🇬🇧'}</span>
      {switchTo === 'it' ? 'IT' : 'EN'}
    </button>
  );
}
