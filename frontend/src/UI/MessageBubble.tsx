import { User } from "lucide-react";

interface MessageBubbleProps {
  data: {
    id: number;
    name: string;
    message: string;
    time: string;
    read: boolean;
    avatar: null;
  };
  index: number;
  align: boolean;
}

export function MessageBubble(props: MessageBubbleProps) {
  return (
    <div
      className={`flex ${
        props.align ? "flex-row" : "flex-row-reverse"
      } min-h-10 gap-1 pt-2`}
    >
      <div className="h-5 w-5 rounded-full bg-slate-200 flex items-center justify-center self-end">
        {props.data.avatar ? (
          <img
            src={props.data.avatar}
            alt={props.data.name}
            className="h-5 w-5 rounded-full"
          />
        ) : (
          <User size={10} className="text-black" />
        )}
      </div>
      <div
        className={`${
          props.align ? "bg-[#eeeeee]" : "bg-blue-100"
        } rounded-md p-2`}
      >
        {props.data.message}
      </div>
    </div>
  );
}
