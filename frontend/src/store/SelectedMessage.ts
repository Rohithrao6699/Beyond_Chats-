import { create } from "zustand";

interface selectedMessageType {
  selectedMessage: string | null;
  setSelectedMessage: (value: string) => void;
}
export const useSelectedMessageStore = create<selectedMessageType>((set) => ({
  selectedMessage: null,
  setSelectedMessage: (value) => set({ selectedMessage: value }),
}));
