import { SquareArrowUp, Sparkles } from "lucide-react";

export function RSideBar() {
  return (
    <div className="w-full ml:w-90 border-l border-slate-200 h-full flex flex-col bg-gradient-to-br from-[#fafafa] via-[#eee9fa] to-[#ecd3d1] relative overflow-hidden transition-all duration-500 ease-in-out">
      <div className="flex-1 flex flex-col justify-between p-4 z-10">
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <div className="bg-slate-900 p-2 rounded-lg mb-4">
            <Sparkles size={24} className="text-white" />
          </div>
          <h3 className="font-bold text-lg mb-1">Hi, I'm Fin AI Copilot</h3>
          <p className="text-slate-500 text-sm">
            Ask me anything about this conversation.
          </p>
        </div>

        <div className="mt-4">
          <p className="text-xs font-medium text-slate-500 mb-2">Suggested</p>
          <button className="flex items-center bg-white hover:bg-slate-100 rounded-lg px-3 py-1 text-sm mb-2 w-[70%]">
            <Sparkles size={14} className="mr-2 text-yellow-500" />
            <span className="text-left">How do I get a refund?</span>
          </button>

          <div className="relative mt-4">
            <input
              type="text"
              placeholder="Ask a question..."
              className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm pr-10 outline-none"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600">
              <SquareArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
