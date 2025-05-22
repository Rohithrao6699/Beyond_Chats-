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

  const selectedUser = useSelectedUserStore((state) => state.selectedUser);
  const setSelectedUser = useSelectedUserStore(
    (state) => state.setSelectedUser
  );

  console.log(selectedUser?.id);
  let isSelected = selectedUser?.id === props.user.id;

  function handleSelect() {
    console.log(`seleceted chatbox of ${props.user.name}`);
    const updatedUser = users.map((user) =>
      user.id === props.user.id ? { ...user, read: true } : user
    );
    setUsers(updatedUser);
    setSelectedUser({ ...props.user, read: true });
    console.log(selectedUser);
  }

  return (
    <div
      className={`w-full rounded-lg max-h-13 cursor-pointer transition-colors ${
        isSelected ? "bg-[#d6e4ff]" : "hover:bg-[#e7ecf8]"
      }`}
      onClick={handleSelect}
    >
      <div
        key={props.index}
        className="flex flex-row gap-2 flex-1 py-2 border-b-1 border-slate-100 max-h-13"
      >
        <div
          className={`h-7 w-7 rounded-full  ${
            props.user.read ? "bg-slate-100" : "bg-slate-200"
          } flex items-center justify-center`}
        >
          {props.user.avatar ? (
            <img
              src={props.user.avatar}
              alt={props.user.name}
              className="h-10 w-10 rounded-full"
            />
          ) : (
            <User
              size={15}
              className={`${props.user.read ? "text-gray-600" : "text-black"}`}
            />
          )}
        </div>

        <div className="min-w-30 max-w-60 ml:max-w-50 flex flex-col transition-all duration-400 ease-in-out">
          <h3
            className={`text-sm truncate ${
              props.user.read
                ? "text-[#6b7280] font-normal"
                : "text-[#111827] font-semibold"
            }`}
          >
            {props.user.name}
          </h3>
          <div className="flex justify-between items-baseline">
            <p
              className={`text-xs truncate ${
                props.user.read
                  ? "text-[#8b8989] font-normal"
                  : "text-black font-normal"
              }`}
            >
              {props.user.message}
            </p>
            <span
              className={`text-xs ml-2 whitespace-nowrap ${
                props.user.read ? "text-[#8b8989] " : "text-slate-500"
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
