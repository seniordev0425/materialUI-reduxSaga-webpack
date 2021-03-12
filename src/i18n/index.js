import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from 'react-i18next';
import en from "./en";
import id from "./id";

const resources = {
  en: {
    translation: en,
  },
  id: {
    translation: id,
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: false,
    keySeparator: '.', 
    interpolation: {
      escapeValue: false,
    },

    react: {
      wait: true
    }
  });

export default i18n;
