import { create } from "zustand";
import { ILanguagesStore } from "./Languages.interface";

import { defaultLang } from "constants/Languages";

const useLanguagesStore = create<ILanguagesStore>(set => ({
  lang: defaultLang,
  switchLang: lang => set(state => ({ lang })),
}));

export default useLanguagesStore;
