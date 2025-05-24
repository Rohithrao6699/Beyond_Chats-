import { Copy, Sparkles, ThumbsDown, ThumbsUp } from "lucide-react";
import { useState } from "react";
import { LoadingLines } from "./loadingLines";
import toast from "react-hot-toast";

interface AIresponseCardProps {
  loading: boolean;
  aiData: string;
  setAiData: (response: string | null) => void;
}
export function AIrespnseCard(props: AIresponseCardProps) {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = async () => {
    if (props.aiData) {
      try {
        await navigator.clipboard.writeText(props.aiData);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        toast.success("copied to clipboard");
      } catch (error) {
        console.error("Failed to copy text:", error);
      }
    }
  };
  return (
    <div className="w-full max-w-sm">
      <div className="bg-gradient-to-br from-white/90 via-purple-50/80 to-pink-50/80 dark:from-slate-800/90 dark:via-purple-900/60 dark:to-pink-900/40 backdrop-blur-sm border border-purple-300/30 dark:border-purple-500/40 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-center gap-2 p-2.5 border-b border-purple-200/20 dark:border-purple-600/30">
          <div className="p-1 bg-gradient-to-br from-purple-500 to-pink-500 rounded-md">
            <Sparkles size={12} className="text-white" />
          </div>
          <span className="text-xs font-semibold text-gray-800 dark:text-white">
            AI Response
          </span>
          <div className="ml-auto flex gap-1">
            <button
              onClick={handleCopy}
              className="p-1 hover:bg-purple-100/50 dark:hover:bg-purple-800/50 rounded-md transition-colors cursor-pointer"
              title="Copy response"
            >
              <Copy
                size={12}
                className={
                  copied
                    ? "text-green-600 dark:text-green-400"
                    : "text-gray-800 dark:text-slate-300"
                }
              />
            </button>
          </div>
        </div>

        <div className="p-3 max-h-32 overflow-y-auto custom-scrollbar">
          {props.loading ? (
            <LoadingLines />
          ) : (
            <div className="text-xs text-gray-800 dark:text-slate-200 leading-relaxed whitespace-pre-wrap">
              {props.aiData}
            </div>
          )}
        </div>

        {!props.loading && (
          <div className="flex items-center justify-between px-3 py-1.5 bg-gradient-to-r from-purple-50/40 to-pink-50/40 dark:from-purple-900/30 dark:to-pink-900/30 rounded-b-xl border-t border-purple-200/20 dark:border-purple-600/30">
            <span className="text-xs text-gray-800 dark:text-slate-300 font-medium">
              Helpful?
            </span>
            <div className="flex gap-1">
              <button className="p-0.5 hover:bg-purple-100/60 dark:hover:bg-purple-800/60 rounded transition-colors">
                <ThumbsUp
                  size={10}
                  className="text-gray-800 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400"
                />
              </button>
              <button className="p-0.5 hover:bg-purple-100/60 dark:hover:bg-purple-800/60 rounded transition-colors">
                <ThumbsDown
                  size={10}
                  className="text-gray-800 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400"
                />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
