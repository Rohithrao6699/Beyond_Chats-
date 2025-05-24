import { Sparkles } from "lucide-react";

interface SuggestionBoxProps {
  loading: boolean;
  suggestionLoading: boolean;
  suggestions: string | null;
  handleSuggestionSubmit: () => Promise<void>;
}
export function SuggestionBox(props: SuggestionBoxProps) {
  return (
    <div>
      <p className="text-xs font-semibold text-gray-800 dark:text-white mb-1.5 uppercase tracking-wide">
        Suggested Action
      </p>
      <button
        className="flex items-center bg-gradient-to-r from-white/70 to-purple-50/60 dark:from-slate-800/70 dark:to-purple-900/60 backdrop-blur-sm hover:from-white/90 hover:to-purple-50/80 dark:hover:from-slate-800/90 dark:hover:to-purple-900/80 border border-purple-300/30 dark:border-purple-500/40 rounded-lg px-3 py-2 text-xs w-full shadow-sm hover:shadow-md transition-all duration-200 disabled:opacity-50"
        disabled={props.suggestionLoading || props.loading}
        onClick={props.handleSuggestionSubmit}
      >
        <div className="p-1 bg-gradient-to-br from-amber-400 to-orange-500 rounded-md mr-2 flex-shrink-0">
          <Sparkles size={10} className="text-white" />
        </div>
        <span className="text-left flex-1 text-gray-800 dark:text-slate-200 truncate font-medium">
          {props.suggestionLoading ? (
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-2.5 w-2.5 border-b-2 border-purple-500 mr-1.5"></div>
              Loading...
            </div>
          ) : (
            props.suggestions || "Select a conversation first"
          )}
        </span>
      </button>
    </div>
  );
}
