import { Chatbox } from "../UI/chatbox";
import { Dropdown } from "../UI/dropdown";
import chats from "../mockData/usersData.json";

console.log(chats);
export function LSideBar() {
  return (
    <div className="w-70 border-r-1 border-slate-200 px-2 pt-2 bg-[#fffffe] flex flex-col">
      <div className="flex justify-between items-center py-2 pl-1">
        <Dropdown options={["5 Open", "10 Open", "all Open"]} />
        <Dropdown
          options={["Waiting longest", "Recently added", "Alphabetical"]}
        />
      </div>
      <div className="flex flex-col items-center py-1 rounded-lg cursor-pointer max-w-70">
        {chats.map((chat, index) => (
          <Chatbox chat={chat} index={index} key={chat.id} />
        ))}
      </div>
    </div>
  );
}
