import { create } from "zustand";

type DataStore = {
  data: string | null;
  suggestions: string | null;
  setData: (response: string) => void;
  setSuggestions: (suggestion: string) => void;
};

export const useAiData = create<DataStore>((set) => ({
  data: null,
  suggestions: null,
  setData: (response) => set({ data: response }),
  setSuggestions: (suggestion) => set({ suggestions: suggestion }),
}));
