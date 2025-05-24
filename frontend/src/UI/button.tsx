import type { JSX } from "react";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  variant: "primary" | "icon" | "noborder" | "chat";
  size: "sm" | "lg";
  content?: string;
  icon?: JSX.Element;
  icon2?: JSX.Element;
  textstyles: "sm" | "md" | "lg";
};

const typeStyles = {
  primary:
    "bg-black dark:bg-white text-white dark:text-black rounded-lg h-6 lg:h-8 px-2 lg:px-3 cursor-pointer font-medium tracking-tight",
  icon: "text-black dark:text-white rounded-lg bg-[#edecec] dark:bg-slate-700 h-6 lg:h-8 px-2 lg:px-3 cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#e2e1e1] dark:hover:bg-slate-600",
  noborder:
    "text-[#747474] dark:text-slate-400 h-full px-3 cursor-pointer text-start pb-1 font-medium tracking-tight hover:text-transparent hover:border-b-1 hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#373fc4] hover:via-[#7481bd] hover:to-[#b7a9c4] dark:hover:from-[#5f67d4] dark:hover:via-[#8b98d1] dark:hover:to-[#c9bdd4]",
  chat: "text-black dark:text-white font-semibold h-full text-start h-8 px-3 cursor-pointer tracking-tight",
};

const sizeStyles = {
  sm: "p-0",
  lg: "p-2",
};

const textStyles = {
  sm: "font-medium text-xs tracking-tight",
  md: "font-medium text-sm tracking-tight",
  lg: "font-semibold text-sm tracking-tight",
};

export function Button({
  variant,
  size,
  content,
  icon2,
  icon,
  textstyles,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={`${typeStyles[variant]} ${sizeStyles[size]} ${
        textStyles[textstyles]
      } ${
        variant === "noborder" ? "relative group" : ""
      } flex items-center justify-center`}
    >
      {variant === "primary" && (
        <div className="flex flex-row gap-2 items-center justify-center">
          {icon}
          <span className="whitespace-nowrap">{content}</span>
        </div>
      )}
      {variant === "icon" && <>{icon}</>}
      {variant === "noborder" && (
        <>
          <div className="flex flex-row gap-2 items-center justify-center">
            {icon}
            <span className="whitespace-nowrap">{content}</span>
          </div>
          {/* Gradient bottom border */}
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#282ea4] via-[#546093] to-[#aca5b2] dark:from-[#4c54c4] dark:via-[#6470a3] dark:to-[#beb7c2] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </>
      )}
      {variant === "chat" && (
        <div className="flex flex-row gap-2 items-center justify-center">
          {icon}
          <span className="whitespace-nowrap">{content}</span>
          {icon2}
        </div>
      )}
    </button>
  );
}
