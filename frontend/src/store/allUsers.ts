import { create } from "zustand";
import type { Users } from "../types/userTypes";

type UserStore = {
  users: Users[];
  setUsers: (data: Users[]) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  users: [],
  setUsers: (data) => set({ users: data }),
}));
