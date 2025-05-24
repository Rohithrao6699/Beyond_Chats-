import { User } from "lucide-react";
import { useSelectedUserStore } from "../store/selectUser";
import type { Users } from "../types/userTypes";
import { useUserStore } from "../store/allUsers";

interface ChatboxProps {
  user: Users;
  index: number;
}

export function Chatbox(props: ChatboxProps) {
  const users = useUserStore((state) => state.users);
  const setUsers = useUserStore((state) => state.setUsers);
  const setFilteredUsers = useUserStore((state) => state.setFilteredUsers);
  const filteredUsers = useUserStore((state) => state.filteredUsers);

  const selectedUser = useSelectedUserStore((state) => state.selectedUser);
  const setSelectedUser = useSelectedUserStore(
    (state) => state.setSelectedUser
  );

  console.log(selectedUser?.id); //intially null on first render
  let isSelected = selectedUser?.id === props.user?.id;

  function handleSelect() {
    console.log(`selected chatbox of ${props.user.name}`);
    const updatedUsers = users.map((user) =>
      user.id === props.user.id ? { ...user, read: true } : user
    );
    const updatedfilteredUsers = filteredUsers.map((user) =>
      user.id === props.user.id ? { ...user, read: true } : user
    );
    setUsers(updatedUsers);
    setSelectedUser({ ...props.user, read: true });
    setFilteredUsers(updatedfilteredUsers);
    console.log(selectedUser);
  }

  return (
    <div
      className={`w-full rounded-lg cursor-pointer transition-all duration-200 ${
        isSelected
          ? "bg-[#d6e4ff] dark:bg-slate-700"
          : "hover:bg-[#e7ecf8] dark:hover:bg-slate-800"
      }`}
      onClick={handleSelect}
    >
      <div
        key={props.index}
        className="flex flex-row gap-3 flex-1 py-3 px-2 border-b border-slate-100 dark:border-slate-700"
      >
        <div
          className={`h-8 w-8 rounded-full ${
            props.user.read
              ? "bg-slate-100 dark:bg-slate-700"
              : "bg-slate-200 dark:bg-slate-600"
          } flex items-center justify-center flex-shrink-0`}
        >
          {props.user.avatar ? (
            <img
              src={props.user.avatar}
              alt={props.user.name}
              className="h-8 w-8 rounded-full object-cover"
            />
          ) : (
            <User
              size={16}
              className={`${
                props.user.read
                  ? "text-gray-600 dark:text-slate-400"
                  : "text-gray-800 dark:text-slate-300"
              }`}
            />
          )}
        </div>

        <div className="min-w-30 max-w-60 ml:max-w-50 flex flex-col justify-center flex-1 transition-all duration-400 ease-in-out">
          <h3
            className={`text-sm leading-tight truncate mb-1 ${
              props.user.read
                ? "text-gray-600 dark:text-slate-400 font-medium"
                : "text-gray-900 dark:text-white font-semibold"
            }`}
          >
            {props.user.name}
          </h3>

          <div className="flex justify-between items-center gap-2">
            <p
              className={`text-xs leading-relaxed truncate flex-1 ${
                props.user.read
                  ? "text-gray-500 dark:text-slate-500 font-normal"
                  : "text-gray-700 dark:text-slate-300 font-medium"
              }`}
            >
              {props.user.message}
            </p>
            <span
              className={`text-xs font-medium whitespace-nowrap ml-2 ${
                props.user.read
                  ? "text-gray-400 dark:text-slate-500"
                  : "text-gray-500 dark:text-slate-400"
              }`}
            >
              {props.user.time}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
