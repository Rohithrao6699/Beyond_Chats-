import { MessageBubble } from "../UI/MessageBubble";
import { Input } from "./Input";
import { useSelectedUserStore } from "../store/selectUser";
import { useToggleStore } from "../store/toggleMain";

export function Main() {
  const selectedUser = useSelectedUserStore((state) => state.selectedUser);
  const isOpen = useToggleStore((state) => state.isOpen);

  return (
    <>
      {isOpen && (
        <div className="flex-1 pl-4 pr-4 pt-6 border-r-1 border-slate-200 dark:border-slate-700 bg-[#fffffe] dark:bg-slate-900 flex flex-col h-full">
          <div className="flex-1 overflow-y-auto flex flex-col gap-2 pb-2">
            {selectedUser ? (
              selectedUser.conversation.map((msg, i) => (
                // in UI folder
                <MessageBubble data={msg} index={selectedUser.id} key={i} />
              ))
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-500 dark:text-slate-400 text-base font-medium">
                  Select a conversation
                </p>
              </div>
            )}
          </div>
          {/* in components folder */}
          <Input user={selectedUser} />
        </div>
      )}
    </>
  );
}
