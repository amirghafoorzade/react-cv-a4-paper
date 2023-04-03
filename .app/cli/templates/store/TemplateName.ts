import { create } from "zustand";
import { ITemplateNameStore } from "./TemplateName.interface";

const useTemplateNameStore = create<ITemplateNameStore>(set => ({
  bears: 0,
  increase: count => set(state => ({ bears: state.bears + count })),
  removeAllBears: () => set({ bears: 0 }),
}));

export default useTemplateNameStore;
