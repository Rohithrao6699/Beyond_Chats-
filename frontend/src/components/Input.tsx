import { Smile, ChevronDown, Zap, BookMarked } from "lucide-react";
import { Button } from "../UI/button";
import { Chat } from "../assets/icons/chat";

export function Input() {
  return (
    <div className="border-t border-slate-200 p-2 lg:p-4">
      <div className="flex flex-col justify-start items-start bg-white border border-slate-200 rounded-xl px-2 lg:px-3 py-1 lg:py-2 shadow-xl transition-all duration-300 ease-in-out">
        <Button
          type="chat"
          size="sm"
          textstyles="sm"
          content="Chat"
          icon={<Chat size="md" />}
          icon2={<ChevronDown size={14} color="black" />}
        />
        <textarea
          placeholder="Use ⌘K for shortcuts"
          className="flex-1 outline-none text-sm min-h-5 lg:min-h-10 w-full px-2 py-2 resize-none overflow-auto align-top transition-all duration-300 ease-in-out"
          style={{
            verticalAlign: "top",
            paddingTop: "8px",
            lineHeight: "1.5",
          }}
        />
        <div className="flex flex-row justify-between items-center w-full px-2">
          <div className="hidden lg:flex flex-row gap-1 lg:gap-2">
            <Zap
              size={16}
              className="text-black cursor-pointer hover:text-slate-700"
              fill="black"
            />
            <Smile
              size={16}
              className="text-black cursor-pointer hover:text-slate-700"
              stroke="white"
              fill="black"
            />
            <BookMarked
              size={16}
              className="text-black cursor-pointer hover:text-slate-700"
              stroke="white"
              fill="black"
            />
          </div>
          <button className="flex items-center border-none text-slate-500 hover:bg-slate-200 px-2 py-1 rounded text-xs">
            Send |
            <ChevronDown size={14} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
