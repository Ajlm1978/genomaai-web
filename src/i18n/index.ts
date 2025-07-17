import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import commonEn from './locales/en/common.json';
import homepageEn from './locales/en/homepage.json';
import legalEn from './locales/en/legal.json';

import commonEs from './locales/es/common.json';
import homepageEs from './locales/es/homepage.json';
import legalEs from './locales/es/legal.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false,
    },

    resources: {
      en: {
        common: commonEn,
        homepage: homepageEn,
        legal: legalEn,
      },
      es: {
        common: commonEs,
        homepage: homepageEs,
        legal: legalEs,
      },
    },
  });

export default i18n;