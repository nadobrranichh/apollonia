import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import english from "./locales/english.json";
import ukrainian from "./locales/ukrainian.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: english },
    uk: { translation: ukrainian },
  },
  lng: "en",
  fallbackLng: "en",
});

export default i18n;
