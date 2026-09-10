'use client';

import { useEffect, useState } from 'react';
import i18n from '@/lib/i18n';

interface I18nProviderProps {
  locale: string;
  children: React.ReactNode;
}

export default function I18nProvider({ locale, children }: I18nProviderProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    i18n.changeLanguage(locale).then(() => setReady(true));
    // Root <html lang="en"> is static (fonts/lang live in the single root
    // layout now). Keep it accurate for /it pages too — small but real for
    // accessibility and how search/AI engines read the page.
    document.documentElement.lang = locale;
  }, [locale]);

  // Avoid flash of wrong language on first render
  if (!ready) return null;

  return <>{children}</>;
}
