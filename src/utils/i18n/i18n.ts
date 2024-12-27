import i18next from "i18next";
import enTranslation from "./locales/en/translation.json";

i18next.init({
  fallbackLng: "en",
  resources: {
    en: {
      translation: enTranslation,
    },
  },
});

const { t } = i18next;

export { i18next, t };
