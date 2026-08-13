import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ukrainian from "./locales/ukrainian.json";
import english from "./locales/english.json";

i18n.use(initReactI18next).init({
  resources: {
    ua: { translation: ukrainian },
    en: { translation: english },
  },
  lng: "en",
  fallbackLng: "en",
});

export default i18n;
