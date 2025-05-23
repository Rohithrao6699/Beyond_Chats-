import { SquareArrowUp, Sparkles } from "lucide-react";
import { useSelectedUserStore } from "../store/selectUser";
import { getResponse, getSuggestion } from "../services/api_calls";
import { useEffect, useRef, useState } from "react";
import { useAiData } from "../store/aiData";

export function RSideBar() {
  const selectedUser = useSelectedUserStore((state) => state.selectedUser);
  const setSuggestions = useAiData((state) => state.setSuggestions);
  const suggestions = useAiData((state) => state.suggestions);
  const aiData = useAiData((state) => state.data);
  const setAiData = useAiData((state) => state.setData);

  const [loading, setLoading] = useState<boolean>(false);
  const [suggestionLoading, setSuggestionLoading] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    try {
      const question = inputRef.current?.value;
      if (question) {
        const response = await getResponse(question);
        console.log(response);
        if (response) {
          setAiData(response);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleSuggestionSubmit() {
    setLoading(true);
    try {
      if (suggestions && suggestions !== "select a convo") {
        const response = await getResponse(suggestions);
        if (response) {
          setAiData(response);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function getSuggestions() {
    setSuggestionLoading(true);
    try {
      const conversation = selectedUser?.conversation[0].text;
      if (conversation) {
        const data = await getSuggestion(conversation);
        if (data) {
          setSuggestions(data);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSuggestionLoading(false);
    }
  }

  useEffect(
    function () {
      getSuggestions();
    },
    [selectedUser]
  );

  return (
    <div className="w-full ml:w-90 border-l border-slate-200 h-full flex flex-col bg-gradient-to-br from-[#fafafa] via-[#eee9fa] to-[#ecd3d1] relative overflow-hidden transition-all duration-500 ease-in-out">
      <div className="flex-1 flex flex-col justify-between p-4 z-10">
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          {aiData ? (
            <div className="flex flex-row gap-1">
              <div className=" self-end bg-slate-900 h-5 min-w-5 rounded-full flex items-center justify-center">
                <Sparkles size={15} className="text-white" />
              </div>
              <div className="font-normal text-sm p-1 shadow-md rounded-md tracking-wide text-left flex justify-between items-center bg-gradient-to-br from-[#fafafa] via-[#e2d9f7] to-[#bc9e9c]">
                {loading ? "loading..." : aiData}
              </div>
            </div>
          ) : (
            <>
              <div className="bg-slate-900 p-2 rounded-lg mb-4">
                <Sparkles size={24} className="text-white" />
              </div>
              {loading ? (
                <div className="font-normal text-sm p-1 shadow-md rounded-md tracking-wide text-left flex justify-between items-center bg-gradient-to-br from-[#fafafa] via-[#e2d9f7] to-[#bc9e9c]">
                  {loading ? "loading..." : aiData}
                </div>
              ) : (
                <>
                  <h3 className="font-bold text-lg mb-1">
                    Hi, I'm Fin AI Copilot
                  </h3>
                  <p className="text-slate-500 text-sm">
                    Ask me anything about this conversation.
                  </p>
                </>
              )}
            </>
          )}
        </div>

        <div className="mt-4">
          <p className="text-xs font-medium text-slate-500 mb-2">Suggested</p>
          <button className="flex items-center bg-white hover:bg-slate-100 rounded-lg px-3 py-1 text-sm mb-2 w-[70%]">
            <Sparkles size={14} className="mr-2 text-yellow-500" />
            <span
              onClick={handleSuggestionSubmit}
              className="text-left cursor-pointer"
            >
              {suggestions
                ? suggestionLoading
                  ? "loading..."
                  : suggestions
                : "select a convo"}
            </span>
          </button>

          <div className="relative mt-4">
            <form className="w-full" onSubmit={handleSubmit}>
              <input
                ref={inputRef}
                type="text"
                placeholder="Ask a question..."
                className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm pr-10 outline-none"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <SquareArrowUp size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
