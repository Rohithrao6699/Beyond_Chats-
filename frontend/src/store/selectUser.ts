import { create } from "zustand";
import type { Users } from "../types/userTypes";

type SelectedUserStore = {
  selectedUser: Users | null;
  setSelectedUser: (user: Users) => void;
};

export const useSelectedUserStore = create<SelectedUserStore>((set) => ({
  selectedUser: null,
  setSelectedUser: (user) => set({ selectedUser: user }),
}));
