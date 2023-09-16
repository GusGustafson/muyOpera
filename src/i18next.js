import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "es-ES", // Este es el idioma que mostrará en caso de que haya algún error con un idioma que seleccionemos.
    ns: ["home"], // Esta es la página inicial que definimos como predeterminada de nuestra aplicación. Es una de las de "public/locales".
    debug: true, // Esto es para registrar y ver posibles fallos de i18next.
    interpolation: {
      escapeValue: false, // React already escapes HTML
    },
  });
