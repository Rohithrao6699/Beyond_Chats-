import { Bot } from "lucide-react";
import { useSelectedUserStore } from "../store/selectUser";
import { getResponse, getSuggestion } from "../services/api_calls";
import { useEffect, useRef, useState } from "react";
import { useAiData } from "../store/aiData";
import { LoadingDots } from "../UI/loadingDots";
import { RInput } from "../UI/InputRSideBar";
import { SuggestionBox } from "../UI/SuggestionBoxRsideBar";
import { AIrespnseCard } from "../UI/AiResponseCard";

export function RSideBar() {
  const selectedUser = useSelectedUserStore((state) => state.selectedUser);
  const { setSuggestions, suggestions, aiData, setAiData } = useAiData(
    (state) => ({
      setSuggestions: state.setSuggestions,
      suggestions: state.suggestions,
      aiData: state.data,
      setAiData: state.setData,
    })
  );

  const [loading, setLoading] = useState<boolean>(false);
  const [suggestionLoading, setSuggestionLoading] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  //handler when user types in input box and sends for ai response
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    try {
      const question = inputRef.current?.value;
      const conversation = selectedUser?.conversation;
      if (question?.trim()) {
        const response = await getResponse(question, conversation);
        console.log(response);
        if (response) {
          setAiData(response);
          if (inputRef.current) {
            inputRef.current.value = "";
          }
        }
      }
    } catch (error) {
      console.error("Error getting response:", error);
    } finally {
      setLoading(false);
    }
  }

  //handler when user clicks on suggestedData
  async function handleSuggestionSubmit() {
    setLoading(true);
    try {
      if (suggestions && suggestions !== "Select a conversation first") {
        const conversation = selectedUser?.conversation;
        if (conversation) {
          const response = await getResponse(suggestions, conversation);
          if (response) {
            setAiData(response);
          }
        }
      }
    } catch (error) {
      console.error("Error getting suggestion response:", error);
    } finally {
      setLoading(false);
    }
  }

  //function to automatically fetch suggestions
  async function getSuggestionsData() {
    setSuggestionLoading(true);
    try {
      const userQuery = selectedUser?.conversation[0].text;
      const conversation = selectedUser?.conversation;
      console.log(userQuery);
      if (userQuery && conversation) {
        const data = await getSuggestion(userQuery, conversation);
        if (data) {
          setSuggestions(data);
        }
      } else {
        setSuggestions("Select a conversation first");
      }
    } catch (error) {
      console.error("Error getting suggestions:", error);
      setSuggestions("Failed to load suggestions");
    } finally {
      setSuggestionLoading(false);
    }
  }

  useEffect(() => {
    getSuggestionsData();
  }, [selectedUser]);

  return (
    <div className="w-full ml:w-90 border-l border-purple-200/30 h-full flex flex-col bg-gradient-to-br from-[#fafafa] via-[#eee9fa] to-[#ecd3d1] relative overflow-hidden custom-scrollbar-container">
      <div className="flex-1 flex flex-col justify-between p-3">
        <div className="flex-1 flex flex-col items-center justify-center text-center min-h-0">
          {aiData ? (
            <AIrespnseCard loading={loading} aiData={aiData} />
          ) : (
            <>
              {loading ? (
                <div className="bg-white/80 backdrop-blur-sm border border-purple-300/30 rounded-xl shadow-md p-4 w-full max-w-sm">
                  <LoadingDots />
                </div>
              ) : (
                <>
                  <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mb-3 shadow-lg">
                    <Bot size={20} className="text-white" />
                  </div>
                  <h3 className="font-bold text-base mb-1.5 text-gray-800">
                    Customer Service AI
                  </h3>
                  <p className="text-gray-800/80 text-xs max-w-xs leading-relaxed">
                    Ask me about policies, suggest responses, or get guidance.
                  </p>
                </>
              )}
            </>
          )}
        </div>
        <div className="mt-4 space-y-3 flex-shrink-0">
          <SuggestionBox
            loading={loading}
            suggestionLoading={suggestionLoading}
            suggestions={suggestions}
            handleSuggestionSubmit={handleSuggestionSubmit}
          />
          <RInput
            loading={loading}
            reference={inputRef}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}
