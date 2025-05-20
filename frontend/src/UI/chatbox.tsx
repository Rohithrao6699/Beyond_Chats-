import { User } from "lucide-react";

interface ChatboxProps {
  chat: {
    id: number;
    name: string;
    message: string;
    time: string;
    read: boolean;
    avatar: null;
  };
  index: number;
}
export function Chatbox(props: ChatboxProps) {
  return (
    <div className="w-full hover:bg-[#e7ecf8] rounded-lg">
      <div
        key={props.index}
        className="flex flex-row gap-2 flex-1 py-3 border-b-1 border-slate-100"
      >
        <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center">
          {props.chat.avatar ? (
            <img
              src={props.chat.avatar}
              alt={props.chat.name}
              className="h-10 w-10 rounded-full"
            />
          ) : (
            <User size={20} className="text-black" />
          )}
        </div>

        {/* Chat Content */}
        <div className="max-w-50 flex flex-col gap-1">
          {props.chat.read ? (
            <>
              <h3 className="font-medium text-sm text-[#8b8989] truncate">
                {props.chat.name}
              </h3>
              <div className="flex justify-between items-baseline">
                <p className="text-xs text-[#8b8989] truncate">
                  {props.chat.message}
                </p>
                <span className="text-xs text-[#8b8989] ml-2 whitespace-nowrap">
                  {props.chat.time}
                </span>
              </div>
            </>
          ) : (
            <>
              <h3 className="font-medium text-sm truncate">
                {props.chat.name}
              </h3>
              <div className="flex justify-between items-baseline">
                <p className="text-xs truncate">{props.chat.message}</p>
                <span className="text-xs text-slate-500 ml-2 whitespace-nowrap">
                  {props.chat.time}
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
