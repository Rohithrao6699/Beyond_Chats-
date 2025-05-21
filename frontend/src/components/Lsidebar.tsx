import { Chatbox } from "../UI/chatbox";
import { Dropdown } from "../UI/dropdown";
import { useMediaQuery } from "../hooks/useMediaQuery";
import chats from "../mockData/usersData.json";

console.log(chats);
export function LSideBar() {
  const isMobile = useMediaQuery("(min-width: 640px)");
  console.log(isMobile);
  return (
    <>
      {isMobile && (
        <div className="w-[40%] ml:w-70 border-r-1 border-slate-200 px-2 pt-2 bg-[#fffffe] flex flex-col transition-all duration-400 ease-in-out">
          <div className="flex justify-between items-center py-1 pl-1">
            <Dropdown options={["5 Open", "10 Open", "all Open"]} />
            <Dropdown
              options={["Waiting longest", "Recently added", "Alphabetical"]}
            />
          </div>
          <div className="flex flex-col items-center py-1 rounded-lg cursor-pointer max-w-80 ml:max-w-70 transition-all duration-400 ease-in-out">
            {chats.map((chat, index) => (
              <Chatbox chat={chat} index={index} key={chat.id} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
