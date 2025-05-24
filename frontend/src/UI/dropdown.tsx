import { ChevronDown } from "lucide-react";
import { useUserStore } from "../store/allUsers";

interface DropdownProps {
  options: string[];
}

export function Dropdown(props: DropdownProps) {
  const users = useUserStore((state) => state.users);
  const { setFilteredUsers, filteredUsers } = useUserStore((state) => ({
    setFilteredUsers: state.setFilteredUsers,
    filteredUsers: state.filteredUsers,
  }));

  function handleOptionClick(option: string) {
    console.log(users);
    if (option === "2 Open") {
      console.log("reached 2 open");
      setFilteredUsers(users.slice(0, 2));
    } else if (option === "4 Open") {
      console.log("reached 4 open");
      setFilteredUsers(users.slice(0, 4));
    } else if (option === "Recently added") {
      console.log("reached Recently added");
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
    <div className="relative text-center flex flex-row items-center justify-center py-1.5 px-2">
      <select
        className="appearance-none bg-transparent border-none text-sm font-medium text-gray-700 focus:outline-none cursor-pointer pr-5 hover:text-gray-900 transition-colors duration-200"
        onChange={(e) => handleOptionClick(e.target.value)}
      >
        {props.options.map((option, index) => (
          <option key={index} className="text-sm font-medium">
            {option}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-1 top-1/2 transform -translate-y-1/2 h-4 w-4 pointer-events-none text-gray-500" />
    </div>
  );
}
