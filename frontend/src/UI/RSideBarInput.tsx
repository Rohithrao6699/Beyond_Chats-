import { SquareArrowUp } from "lucide-react";

interface RInputProps {
  loading: boolean;
  reference: React.RefObject<HTMLInputElement | null>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

export function RSideBarInput(props: RInputProps) {
  return (
    <div className="relative">
      <form className="w-full" onSubmit={props.handleSubmit}>
        <div className="relative">
          <input
            ref={props.reference}
            type="text"
            placeholder="Ask about policies or get response templates..."
            className="w-full px-3 py-2 bg-gradient-to-r from-white/70 to-purple-50/60 dark:from-slate-800/70 dark:to-purple-900/60 backdrop-blur-sm border border-purple-300/30 dark:border-purple-500/40 rounded-lg text-xs pr-10 outline-none focus:ring-2 focus:ring-purple-400/30 dark:focus:ring-purple-500/50 focus:border-purple-400/50 dark:focus:border-purple-500/60 transition-all duration-200 disabled:opacity-50 text-gray-800 dark:text-slate-200 placeholder-gray-800 dark:placeholder-slate-400"
            disabled={props.loading}
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-800 dark:text-slate-300 hover:text-gray-800 dark:hover:text-white hover:bg-purple-100/50 dark:hover:bg-purple-800/50 rounded-md transition-all duration-200 disabled:opacity-50"
            disabled={props.loading}
          >
            {props.loading ? (
              <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-purple-500"></div>
            ) : (
              <SquareArrowUp size={14} />
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
