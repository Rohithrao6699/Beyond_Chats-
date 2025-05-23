import { ChevronDown } from "lucide-react";
import { useUserStore } from "../store/allUsers";

interface DropdownProps {
  options: string[];
}

export function Dropdown(props: DropdownProps) {
  const users = useUserStore((state) => state.users);
  const setFilteredUsers = useUserStore((state) => state.setFilteredUsers);
  const filteredUsers = useUserStore((state) => state.filteredUsers);

  function parseTimeToMinutes(timeStr: string): number {
    const match = timeStr.match(/^(\d+)([mh])$/); // matches "25m", "1h"
    if (!match) return 0;
    const value = parseInt(match[1], 10);
    const unit = match[2];
    return unit === "h" ? value * 60 : value;
  }

  function handleOptionClick(option: string) {
    console.log(users);
    if (option === "2 Open") {
      console.log("reached 2 open");
      setFilteredUsers(users.slice(0, 2));
    } else if (option === "4 Open") {
      console.log("reached 4 open");
      console.log(option);
      setFilteredUsers(users.slice(0, 4));
    } else if (option === "Waiting longest") {
      console.log("reached waiting longest");
      // Sort by oldest message first (e.g., sort by `time`)
      const sorted = [...filteredUsers].sort((a, b) => {
        // You can improve this with actual timestamp parsing if needed
        return parseTimeToMinutes(b.time) - parseTimeToMinutes(a.time);
      });
      setFilteredUsers(sorted);
    } else if (option === "Recently added") {
      console.log("reached Recently added");
      // Assuming newest users are added last, just reverse
      setFilteredUsers([...filteredUsers].reverse());
    } else if (option === "Alphabetical") {
      console.log("reached Alphabetical");
      const sorted = [...filteredUsers].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setFilteredUsers(sorted);
    } else {
      console.log("all open");
      setFilteredUsers(users);
    }
  }

  return (
    <>
      <div className="relative text-center flex flex-row items-center justify-center py-1">
        <select
          className="appearance-none bg-transparent border-none text-xs font-normal ml:font-medium focus:outline-none cursor-pointer pr-4"
          onChange={(e) => handleOptionClick(e.target.value)}
        >
          {props.options.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>
        <ChevronDown className="absolute right-0 top-1/2 transform -translate-y-1/2 h-4 w-4 pointer-events-none" />
      </div>
    </>
  );
}
