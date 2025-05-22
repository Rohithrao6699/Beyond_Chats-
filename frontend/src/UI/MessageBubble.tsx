import { User } from "lucide-react";
import type { Message } from "../types/userTypes";
import { useUserStore } from "../store/allUsers";

interface MessageBubbleProps {
  data: Message;
  index: number;
}

export function MessageBubble(props: MessageBubbleProps) {
  const users = useUserStore((state) => state.users);
  const user = users.find((u) => u.id === props.index);

  return (
    <div
      className={`flex ${
        props.data.sender === "Rohith" ? "flex-row-reverse" : "flex-row"
      } min-h-9 gap-1 pt-2`}
    >
      <div className="h-3 w-3 lg:h-4 lg:w-4 rounded-full bg-slate-200 flex items-center justify-center self-end transition-all duration-300 ease-in-out">
        {user?.avatar ? (
          <img
            src={user?.avatar}
            alt={user?.name}
            className="h-4 w-4 rounded-full"
          />
        ) : (
          <User size={9} className="text-black" />
        )}
      </div>
      <div
        className={`${
          props.data.sender === "Rohith" ? "bg-blue-100" : "bg-[#eeeeee]"
        } rounded-md p-1 font-normal text-xs lg:text-sm transition-all duration-300 ease-in-out`}
      >
        {props.data.text}
      </div>
    </div>
  );
}
