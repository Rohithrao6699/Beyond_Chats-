import { GoogleGenAI } from "@google/genai";
import type { Message } from "../types/userTypes";
import {
  COMPANY_CONTEXT,
  getDetailedResponseData,
  getHumanResponseData,
  getResponseData,
  getsuggestionData,
} from "../utils/company_details";

const apiUrl = import.meta.env.VITE_AI_API_KEY;
const ai = new GoogleGenAI({
  apiKey: apiUrl,
});

export async function getSuggestion(data: string, conversation: Message[]) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `${COMPANY_CONTEXT},
      Customer Query: ${data},
      Conversation history: ${conversation},

      ${getsuggestionData}`,
    });
    console.log(response.text);
    return response.text;
  } catch (error) {
    console.error("Error getting AI suggestion:", error);
    throw new Error("Failed to get suggestion. Please try again.");
  }
}

export async function getResponse(
  customerQuery: string,
  conversationHistory?: Message[]
) {
  try {
    const contextualPrompt = `${COMPANY_CONTEXT},
    CONVERSATION HISTORY: ${conversationHistory},
    CURRENT CUSTOMER QUERY: ${customerQuery},
    ${getResponseData}`;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: contextualPrompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error getting contextual response:", error);
    throw new Error("Failed to get contextual response. Please try again.");
  }
}

export async function getHumanResponse(
  text: string,
  conversationHistory?: Message[]
) {
  try {
    const contextualPrompt = `${COMPANY_CONTEXT}
    CONVERSATION HISTORY: ${conversationHistory},
    CURRENT RESPONSE YOU SENT: ${text},
    ${getHumanResponseData}`;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: contextualPrompt,
    });

    return response.text;
  } catch (error) {
    console.error("Error getting contextual response:", error);
    throw new Error("Failed to get contextual response. Please try again.");
  }
}

export async function getDetailedResponse(
  text: string,
  conversationHistory?: Message[]
) {
  try {
    const contextualPrompt = `${COMPANY_CONTEXT}

CONVERSATION HISTORY: ${conversationHistory},

CURRENT RESPONSE YOU SENT: ${text},

${getDetailedResponseData}`;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: contextualPrompt,
    });

    return response.text;
  } catch (error) {
    console.error("Error getting contextual response:", error);
    throw new Error("Failed to get contextual response. Please try again.");
  }
}
