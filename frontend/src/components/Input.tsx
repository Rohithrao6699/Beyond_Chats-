import { Smile, ChevronDown, Zap, BookMarked } from "lucide-react";
import { Button } from "../UI/button";
import { Chat } from "../assets/icons/chat";
import type { Users } from "../types/userTypes";
import { useRef } from "react";
import { useSelectedUserStore } from "../store/selectUser";
import { useUserStore } from "../store/allUsers";

interface InputProps {
  user: Users | null;
}

export function Input(props: InputProps) {
  const filteredUsers = useUserStore((state) => state.filteredUsers);
  const setFilteredUsers = useUserStore((state) => state.setFilteredUsers);
  const setUsers = useUserStore((state) => state.setUsers);
  const Users = useUserStore((state) => state.users);
  const SetselectedUser = useSelectedUserStore(
    (state) => state.setSelectedUser
  );

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (props.user) {
      const data = textAreaRef.current?.value;
      const user = props.user;
      if (data) {
        //updating the selcted users conversation
        const updatedUser = {
          ...user,
          conversation: [
            ...(user?.conversation || []),
            { sender: "Rohith", text: data, timestamp: "1m ago" },
          ],
        };
        console.log(updatedUser);
        SetselectedUser(updatedUser);

        //updating the global users state
        const updatedUsers = Users.map((u) =>
          u.id === user.id ? updatedUser : u
        );
        setUsers(updatedUsers);

        //updating the filtered users state
        const updatedFilteredUsers = filteredUsers.map((u) =>
          u.id === user.id ? updatedUser : u
        );
        setFilteredUsers(updatedFilteredUsers);
      }

      if (textAreaRef.current) {
        textAreaRef.current.value = "";
      }
    }
  }

  function handleChatClick() {
    console.log("clicked on chat");
  }
  return (
    <div className="border-t border-slate-200 dark:border-slate-700 p-2 lg:p-4">
      <div className="flex flex-col justify-start items-start bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-xl px-2 lg:px-3 py-1 lg:py-2 shadow-xl transition-all duration-300 ease-in-out">
        <form onSubmit={handleSubmit} className="w-full">
          {/* in UI folder */}
          <Button
            onClick={handleChatClick}
            variant="chat"
            size="sm"
            textstyles="sm"
            content="Chat"
            icon={<Chat size="md" />}
            icon2={
              <ChevronDown
                size={14}
                color="black"
                className="dark:text-white"
              />
            }
          />
          <textarea
            ref={textAreaRef}
            placeholder="Use ⌘K for shortcuts"
            className="flex-1 outline-none text-sm min-h-5 lg:min-h-10 w-full px-2 py-2 resize-none overflow-auto align-top transition-all duration-300 ease-in-out bg-transparent text-black dark:text-white placeholder-gray-500 dark:placeholder-slate-400"
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
                className="text-black dark:text-white cursor-pointer hover:text-slate-700 dark:hover:text-slate-300"
                fill="black"
              />
              <Smile
                size={16}
                className="text-black dark:text-white cursor-pointer hover:text-slate-700 dark:hover:text-slate-300"
                stroke="white"
                fill="black"
              />
              <BookMarked
                size={16}
                className="text-black dark:text-white cursor-pointer hover:text-slate-700 dark:hover:text-slate-300"
                stroke="white"
                fill="black"
              />
            </div>
            <button
              type="submit"
              className="flex items-center border-none text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 px-2 py-1 rounded text-xs"
            >
              Send |
              <ChevronDown size={14} className="ml-1" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
