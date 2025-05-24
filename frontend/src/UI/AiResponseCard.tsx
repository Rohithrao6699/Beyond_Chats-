import { Copy, Sparkles, ThumbsDown, ThumbsUp } from "lucide-react";
import { useState } from "react";
import { LoadingLines } from "../components/loadingLines";

interface AIresponseCardProps {
  loading: boolean;
  aiData: string;
}
export function AIrespnseCard(props: AIresponseCardProps) {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = async () => {
    if (props.aiData) {
      try {
        await navigator.clipboard.writeText(props.aiData);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (error) {
        console.error("Failed to copy text:", error);
      }
    }
  };
  return (
    <div className="w-full max-w-sm">
      <div className="bg-gradient-to-br from-white/90 via-purple-50/80 to-pink-50/80 backdrop-blur-sm border border-purple-300/30 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-center gap-2 p-2.5 border-b border-purple-200/20">
          <div className="p-1 bg-gradient-to-br from-purple-500 to-pink-500 rounded-md">
            <Sparkles size={12} className="text-white" />
          </div>
          <span className="text-xs font-semibold text-gray-800">
            AI Response
          </span>
          <div className="ml-auto flex gap-1">
            <button
              onClick={handleCopy}
              className="p-1 hover:bg-purple-100/50 rounded-md transition-colors"
              title="Copy response"
            >
              <Copy
                size={12}
                className={copied ? "text-green-600" : "text-gray-800"}
              />
            </button>
          </div>
        </div>

        <div className="p-3 max-h-32 overflow-y-auto custom-scrollbar">
          {props.loading ? (
            <LoadingLines />
          ) : (
            <div className="text-xs text-gray-800 leading-relaxed whitespace-pre-wrap">
              {props.aiData}
            </div>
          )}
        </div>

        {!props.loading && (
          <div className="flex items-center justify-between px-3 py-1.5 bg-gradient-to-r from-purple-50/40 to-pink-50/40 rounded-b-xl border-t border-purple-200/20">
            <span className="text-xs text-gray-800 font-medium">Helpful?</span>
            <div className="flex gap-1">
              <button className="p-0.5 hover:bg-purple-100/60 rounded transition-colors">
                <ThumbsUp
                  size={10}
                  className="text-gray-800 hover:text-green-600"
                />
              </button>
              <button className="p-0.5 hover:bg-purple-100/60 rounded transition-colors">
                <ThumbsDown
                  size={10}
                  className="text-gray-800 hover:text-red-600"
                />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
