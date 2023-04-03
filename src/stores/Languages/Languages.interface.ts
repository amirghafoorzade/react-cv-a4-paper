import { LanguageTypes } from "interfaces/Languages/languages";

export interface ILanguagesStore {
  lang: LanguageTypes;
  switchLang: (lang: LanguageTypes) => void;
}
