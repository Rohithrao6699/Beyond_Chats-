import { MessageBubble } from "../UI/MessageBubble";
import { Input } from "./Input";
import data from "../mockData/usersData.json";
import { useMediaQuery } from "../hooks/useMediaQuery";

console.log(data);
export function Main() {
  const isDektop = useMediaQuery("(min-width: 880px)");
  console.log(isDektop);
  return (
    <>
      {isDektop && (
        <div className="flex-1 pl-4 pr-4 pt-6 border-r-1 border-slate-200 bg-[#fffffe] flex flex-col h-full">
          <div className="flex-1 overflow-y-auto flex flex-col gap-4">
            <MessageBubble
              data={data[0]}
              index={data[0].id}
              align={data[0].id % 2 === 0 ? false : true}
            />
            <MessageBubble
              data={data[1]}
              index={data[1].id}
              align={data[1].id % 2 === 0 ? false : true}
            />
          </div>
          <Input />
        </div>
      )}
    </>
  );
}
