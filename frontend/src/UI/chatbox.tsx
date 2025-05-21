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
    <div className="w-full hover:bg-[#e7ecf8] rounded-lg max-h-13">
      <div
        key={props.index}
        className="flex flex-row gap-2 flex-1 py-2 border-b-1 border-slate-100 max-h-13"
      >
        <div className="h-7 w-7 rounded-full bg-slate-200 flex items-center justify-center">
          {props.chat.avatar ? (
            <img
              src={props.chat.avatar}
              alt={props.chat.name}
              className="h-10 w-10 rounded-full"
            />
          ) : (
            <User size={15} className="text-black" />
          )}
        </div>

        <div className="min-w-30 max-w-60 ml:max-w-50 flex flex-col transition-all duration-400 ease-in-out">
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
