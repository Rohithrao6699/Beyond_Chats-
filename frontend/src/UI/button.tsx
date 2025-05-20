import type { JSX } from "react";

interface ButtonProps {
  type: "primary" | "icon" | "noborder";
  size: "sm" | "lg";
  content?: string;
  icon?: JSX.Element;
  textstyles: "sm" | "md" | "lg";
}

const typeStyles = {
  primary: "bg-black text-white rounded-lg",
  icon: "text-black rounded-lg bg-[#edecec]",
  noborder: "text-[#747474] hover:border-b-1 h-full text-start pb-5",
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

const defaultStyles = "h-8 px-2 cursor-pointer";

export function Button(props: ButtonProps) {
  return (
    <button
      className={`${typeStyles[props.type]} ${sizeStyles[props.size]} ${
        textstyles[props.textstyles]
      } ${defaultStyles}`}
    >
      {props.type === "primary" && (
        <div className="flex flex-row gap-1 items-center justify-center">
          {props.icon} {props.content}
        </div>
      )}
      {props.type === "icon" && <>{props.icon}</>}
      {props.type === "noborder" && <>{props.content}</>}
    </button>
  );
}
