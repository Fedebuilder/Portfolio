import type { Metadata } from 'next';
import I18nProvider from '@/components/I18nProvider';

const LOCALES = ['en', 'it'] as const;
type Locale = (typeof LOCALES)[number];

const TITLES: Record<Locale, string> = {
  en: 'Federico De Micco — Web Developer & AI Search Visibility',
  it: 'Federico De Micco — Sviluppatore Web & Visibilità AI',
};

const DESCRIPTIONS: Record<Locale, string> = {
  en: "I build sites and shape AI visibility so health & wellness practitioners come up correctly when patients ask ChatGPT, Perplexity or Google AI Overviews.",
  it: 'Costruisco siti e lavoro sulla visibilità AI perché i professionisti della salute risultino trovabili e ben rappresentati quando i pazienti chiedono a ChatGPT, Perplexity o Google AI Overviews.',
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale: Locale = (LOCALES as readonly string[]).includes(params.locale)
    ? (params.locale as Locale)
    : 'en';

  return {
    title: TITLES[locale],
    description: DESCRIPTIONS[locale],
    alternates: {
      canonical: `/${locale}`,
      languages: { en: '/en', it: '/it' },
    },
    openGraph: {
      title: TITLES[locale],
      description: DESCRIPTIONS[locale],
      url: `https://www.federicodemicco.dev/${locale}`,
      locale: locale === 'it' ? 'it_IT' : 'en_US',
      type: 'website',
    },
  };
}

// NOTE: this used to render its own <html>/<body>, nested inside the root
// layout's <html>/<body>. That's invalid HTML (you can't nest <html> in
// <html>) and was a real bug, not just messy code. Now it only wraps children
// in the i18n provider; the root layout owns the single <html>/<body>.
export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return <I18nProvider locale={params.locale}>{children}</I18nProvider>;
}
