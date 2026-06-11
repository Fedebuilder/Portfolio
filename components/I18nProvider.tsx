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
  }, [locale]);

  // Avoid flash of wrong language on first render
  if (!ready) return null;

  return <>{children}</>;
}
