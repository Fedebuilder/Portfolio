import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Fraunces } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

// This is now the ONLY layout with <html>/<body>. Fonts moved here (they don't
// change per locale) so app/[locale]/layout.tsx can stop nesting a second
// <html>/<body> inside this one — that was invalid and is why it needed fixing.
export const metadata: Metadata = {
  metadataBase: new URL('https://www.federicodemicco.dev'),
  title: {
    default: 'Federico De Micco — Web Developer & AI Search Visibility',
    template: '%s · Federico De Micco',
  },
  description:
    'Full-stack developer and marketing strategist based in Sydney. Sites and AI-search visibility for health & wellness practitioners.',
  // No more robots: 'noindex, nofollow' — that was hiding this entire site
  // from Google and from the AI engines it's meant to prove you're findable to.
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}
