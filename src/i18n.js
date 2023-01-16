import i18n from "i18next";
import {initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(initReactI18next) 
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: {
          "dunyo": "Hello World!",
          "someText":"Hello"
        }
      },
      uz: {
        translation: {
          "dunyo": "Salom Dunyo!",
          "someText":"Salom"
        }
      },
      ru: {
        translation: {
          "dunyo": "Привет мир!",
          "someText":"Привет"
        }
      },
    },
  });
