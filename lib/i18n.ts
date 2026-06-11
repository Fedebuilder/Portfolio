import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';

i18n
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`../public/locales/${language}/${namespace}.json`)
    )
  )
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    supportedLngs: ['en', 'it'],
    ns: ['common'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false, // React already escapes
    },
  });

export default i18n;
