import { ChevronDown } from "lucide-react";

interface DropdownProps {
  options: string[];
}

export function Dropdown(props: DropdownProps) {
  return (
    <>
      <div className="relative text-center flex flex-row items-center justify-center py-1">
        <select className="appearance-none bg-transparent border-none text-sm font-normal ml:font-medium focus:outline-none cursor-pointer pr-4">
          {props.options.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>
        <ChevronDown className="absolute right-0 top-1/2 transform -translate-y-1/2 h-4 w-4 pointer-events-none" />
      </div>
    </>
  );
}
