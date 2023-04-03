import { useCallback } from "react";
import { IUseTranslationProps } from "./useTranslation.interface";
import useLanguagesStore from "stores/Languages";

import _WORDS from "i18n";

const useTranslation = (props?: IUseTranslationProps) => {
  const lang = useLanguagesStore(state => state.lang);

  const t = useCallback(
    (word: string) => {
      return _WORDS[lang][word];
    },
    [lang]
  );

  return { t };
};

export default useTranslation;
