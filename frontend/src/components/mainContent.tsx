import { MessageBubble } from "../UI/MessageBubble";
import { Input } from "./Input";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { useSelectedUserStore } from "../store/selectUser";

export function Main() {
  const selectedUser = useSelectedUserStore((state) => state.selectedUser);

  const isDektop = useMediaQuery("(min-width: 880px)");
  console.log(isDektop);

  return (
    <>
      {isDektop && (
        <div className="flex-1 pl-4 pr-4 pt-6 border-r-1 border-slate-200 bg-[#fffffe] flex flex-col h-full">
          <div className="flex-1 overflow-y-auto flex flex-col gap-2">
            {selectedUser ? (
              selectedUser.conversation.map((msg, i) => (
                <MessageBubble data={msg} index={selectedUser.id} key={i} />
              ))
            ) : (
              <div>Select a convo</div>
            )}
          </div>
          <Input user={selectedUser} />
        </div>
      )}
    </>
  );
}
