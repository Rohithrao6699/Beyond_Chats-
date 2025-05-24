import { User } from "lucide-react";
import toast from "react-hot-toast";
import type { Message } from "../types/userTypes";
import { useUserStore } from "../store/allUsers";
import { useSelectedMessageStore } from "../store/SelectedMessage";

interface MessageBubbleProps {
  data: Message;
  index: number;
}

export function MessageBubble(props: MessageBubbleProps) {
  //we could even use the filtered users list here
  const setSelectedMessage = useSelectedMessageStore(
    (state) => state.setSelectedMessage
  );
  const users = useUserStore((state) => state.users);

  //finding currentSelectedUser
  const user = users.find((u) => u.id === props.index);
  const isRohith = props.data.sender === "Rohith";

  function handleSelectMessage() {
    setSelectedMessage(props.data.text);
    toast.success("message copied to fin AI, click on send");
  }

  return (
    <div
      className={`flex items-start gap-2 ${
        isRohith ? "justify-end" : "justify-start"
      }`}
    >
      {!isRohith && (
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
        onClick={handleSelectMessage}
        className={`max-w-md px-2 py-1 rounded-xl cursor-pointer ${
          isRohith
            ? "bg-blue-100 dark:bg-blue-900 text-gray-900 dark:text-white ml-auto"
            : "bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white"
        }`}
      >
        <p className="text-xs leading-relaxed">{props.data.text}</p>
        <p
          className={`text-[7px] ${
            isRohith
              ? "text-gray-500 dark:text-blue-300 text-end"
              : "text-gray-500 dark:text-slate-400"
          }`}
        >
          {props.data.timestamp}
        </p>
      </div>

      {isRohith && (
        <div className="flex-shrink-0 mt-1">
          <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
            <User size={14} className="text-black dark:text-white" />
          </div>
        </div>
      )}
    </div>
  );
}
