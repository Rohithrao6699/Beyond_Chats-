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
      <div className="h-4 w-4 lg:h-5 lg:w-5 rounded-full bg-slate-200 flex items-center justify-center self-end transition-all duration-300 ease-in-out">
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
        } rounded-md p-1 lg:p-2 font-normal text-sm lg:text-base transition-all duration-300 ease-in-out`}
      >
        {props.data.message}
      </div>
    </div>
  );
}
