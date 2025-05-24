import { create } from "zustand";

// Define the store state interface
interface SelectedUserState {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  toggleIsOpen: () => void;
}

// Create the store with proper typing
export const useToggleStore = create<SelectedUserState>((set, get) => ({
  isOpen: true,
  setIsOpen: (value) => set({ isOpen: value }),
  toggleIsOpen: () => set({ isOpen: !get().isOpen }),
}));
