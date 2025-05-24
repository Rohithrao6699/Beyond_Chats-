import { User } from "lucide-react";
import type { Message } from "../types/userTypes";
import { useUserStore } from "../store/allUsers";

interface MessageBubbleProps {
  data: Message;
  index: number;
}

export function MessageBubble(props: MessageBubbleProps) {
  //we could even use the filtered users list here
  const users = useUserStore((state) => state.users);
  const user = users.find((u) => u.id === props.index);

  const isCurrentUser = props.data.sender === "Rohith";

  return (
    <div
      className={`flex items-start gap-2 ${
        isCurrentUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isCurrentUser && (
        <div className="flex-shrink-0 mt-1">
          {user?.avatar ? (
            <img
              src={user.avatar}
              alt={user.name}
              className="w-6 h-6 rounded-full object-cover"
            />
          ) : (
            <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-slate-600 flex items-center justify-center">
              <User size={14} className="text-gray-500 dark:text-slate-300" />
            </div>
          )}
        </div>
      )}

      <div
        className={`max-w-md px-2 py-1 rounded-xl ${
          isCurrentUser
            ? "bg-blue-100 dark:bg-blue-900 text-gray-900 dark:text-white ml-auto"
            : "bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white"
        }`}
      >
        <p className="text-xs leading-relaxed">{props.data.text}</p>
        <p
          className={`text-[7px] ${
            isCurrentUser
              ? "text-gray-500 dark:text-blue-300 text-end"
              : "text-gray-500 dark:text-slate-400"
          }`}
        >
          {props.data.timestamp}
        </p>
      </div>

      {isCurrentUser && (
        <div className="flex-shrink-0 mt-1">
          <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
            <User size={14} className="text-black dark:text-white" />
          </div>
        </div>
      )}
    </div>
  );
}
