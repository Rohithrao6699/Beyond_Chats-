import { create } from "zustand";
import type { Users } from "../types/userTypes";

type UserStore = {
  users: Users[];
  filteredUsers: Users[];
  setUsers: (data: Users[]) => void;
  setFilteredUsers: (data: Users[]) => void;
};

//the uyser field id there to just hold the all the values of array and filteredUsers is just a copy
//that will be shortened and expnded time to time using the original users array
//so we don't actually need to use the users arrya nywhere, we nned to update it with actual value once and done

export const useUserStore = create<UserStore>((set) => ({
  users: [],
  filteredUsers: [],
  setUsers: (data) => set({ users: data }),
  setFilteredUsers: (data) => set({ filteredUsers: data }),
}));
