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
            <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
              <User size={14} className="text-gray-500" />
            </div>
          )}
        </div>
      )}

      <div
        className={`max-w-md px-2 py-1 rounded-xl ${
          isCurrentUser
            ? "bg-blue-100 text-gray-900 ml-auto"
            : "bg-gray-100 text-gray-900"
        }`}
      >
        <p className="text-xs leading-relaxed">{props.data.text}</p>
        <p
          className={`text-[7px] ${
            isCurrentUser ? "text-gray-500 text-end" : "text-gray-500"
          }`}
        >
          {props.data.timestamp}
        </p>
      </div>

      {isCurrentUser && (
        <div className="flex-shrink-0 mt-1">
          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
            <User size={14} className="text-black" />
          </div>
        </div>
      )}
    </div>
  );
}
