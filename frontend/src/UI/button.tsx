import type { JSX } from "react";

interface ButtonProps {
  type: "primary" | "icon" | "noborder" | "chat";
  size: "sm" | "lg";
  content?: string;
  icon?: JSX.Element;
  icon2?: JSX.Element;
  textstyles: "sm" | "md" | "lg";
}

const typeStyles = {
  primary:
    "bg-black text-white rounded-lg h-6 lg:h-8 px-1 lg:px-2 cursor-pointer",
  icon: "text-black rounded-lg bg-[#edecec] h-6 lg:h-8 px-1 lg:px-2 cursor-pointer transition-all duration-300 ease-in-out",
  noborder:
    "text-[#747474] h-full px-2 cursor-pointer text-start pb-5 hover:text-transparent hover:border-b-1 hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#373fc4] hover:via-[#7481bd] hover:to-[#b7a9c4]",
  chat: "text-black font-semibold h-full text-start h-8 px-2 cursor-pointer",
};

const sizeStyles = {
  sm: "p-0",
  lg: "p-2",
};

const textstyles = {
  sm: "font-normal text-xs",
  md: "font-normal text-sm",
  lg: "font-medium text-sm",
};

export function Button(props: ButtonProps) {
  return (
    <button
      className={`${typeStyles[props.type]} ${sizeStyles[props.size]} ${
        textstyles[props.textstyles]
      } ${props.type === "noborder" ? "relative group" : ""}`}
    >
      {props.type === "primary" && (
        <div className="flex flex-row gap-1 items-center justify-center">
          {props.icon} {props.content}
        </div>
      )}
      {props.type === "icon" && <>{props.icon}</>}
      {props.type === "noborder" && (
        <>
          <div className="flex flex-row gap-1 items-center justify-center">
            {props.icon} {props.content}
          </div>
          {/* Gradient bottom border */}
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#282ea4] via-[#546093] to-[#aca5b2] opacity-0 group-hover:opacity-100 transition-opacity" />
        </>
      )}
      {props.type === "chat" && (
        <div className="flex flex-row gap-1 items-center justify-center">
          {props.icon} {props.content} {props.icon2}
        </div>
      )}
    </button>
  );
}
