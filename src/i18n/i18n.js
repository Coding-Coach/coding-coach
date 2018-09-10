import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        "landing-page-header": "Coding Coach",
        "landing-page-start": "Get Started",
        "landing-page-subheader": "Connecting developers with mentor worldwide"
      }
    },
    fr: {
      translations: {
        "landing-page-header": "Coding Coach",
        "landing-page-start": "Commencez maintenant",
        "landing-page-subheader": "Apprenez avec des mentors partout à travers le monde"
      }
    }
  },
  fallbackLng: "en",
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;