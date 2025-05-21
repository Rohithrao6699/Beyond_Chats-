import { User } from "lucide-react";
import { useSelectedUserStore } from "../store/selectUser";
import type { Users } from "../types/userTypes";

interface ChatboxProps {
  user: Users;
  index: number;
}

export function Chatbox(props: ChatboxProps) {
  const setSelectedUser = useSelectedUserStore(
    (state) => state.setSelectedUser
  );

  function handleSelect() {
    console.log(`seleceted chatbox of ${props.user.name}`);
    setSelectedUser(props.user);
  }

  return (
    <div
      className="w-full hover:bg-[#e7ecf8] rounded-lg max-h-13"
      onClick={handleSelect}
    >
      <div
        key={props.index}
        className="flex flex-row gap-2 flex-1 py-2 border-b-1 border-slate-100 max-h-13"
      >
        <div className="h-7 w-7 rounded-full bg-slate-200 flex items-center justify-center">
          {props.user.avatar ? (
            <img
              src={props.user.avatar}
              alt={props.user.name}
              className="h-10 w-10 rounded-full"
            />
          ) : (
            <User size={15} className="text-black" />
          )}
        </div>

        <div className="min-w-30 max-w-60 ml:max-w-50 flex flex-col transition-all duration-400 ease-in-out">
          {props.user.read ? (
            <>
              <h3 className="font-medium text-sm text-[#8b8989] truncate">
                {props.user.name}
              </h3>
              <div className="flex justify-between items-baseline">
                <p className="text-xs text-[#8b8989] truncate">
                  {props.user.message}
                </p>
                <span className="text-xs text-[#8b8989] ml-2 whitespace-nowrap">
                  {props.user.time}
                </span>
              </div>
            </>
          ) : (
            <>
              <h3 className="font-medium text-sm truncate">
                {props.user.name}
              </h3>
              <div className="flex justify-between items-baseline">
                <p className="text-xs truncate">{props.user.message}</p>
                <span className="text-xs text-slate-500 ml-2 whitespace-nowrap">
                  {props.user.time}
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
