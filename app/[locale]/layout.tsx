// app/[locale]/layout.tsx
// Replace your current app/layout.tsx with this file,
// and move it to app/[locale]/layout.tsx

import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Fraunces } from 'next/font/google';
import I18nProvider from '@/components/I18nProvider';
import '../globals.css'; // adjust path if needed

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'it' }];
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={params.locale} className={`${plusJakarta.variable} ${fraunces.variable}`}>
      <body>
        <I18nProvider locale={params.locale}>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
