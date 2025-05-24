// import { GoogleGenAI } from "@google/genai";

// const apiUrl = import.meta.env.VITE_AI_API_KEY;
// const ai = new GoogleGenAI({
//   apiKey: apiUrl,
// });

// export async function getResponse(data: string) {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.0-flash",
//     contents: `imagine you are a operations head here for a company, respond to this text ${data} and respons in only 6 lines, just the main content`,
//   });
//   console.log(response.text);
//   return response.text;
// }

// export async function getSuggestion(data: string) {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.0-flash",
//     contents: `You are a model that gives suggestions to customer service representative. Based of on this conversation: ${data}, give a suggestion that the customer service representative might require to ask the user in just 4 words`,
//   });
//   console.log(response.text);
//   return response.text;
// }
//-------------------------------------------------------------------
import { GoogleGenAI } from "@google/genai";
import type { Message } from "../types/userTypes";

const apiUrl = import.meta.env.VITE_AI_API_KEY;
const ai = new GoogleGenAI({
  apiKey: apiUrl,
});

// Company context for the AI assistant
const COMPANY_CONTEXT = `
You are an AI assistant for customer service representatives at an e-commerce platform. 

COMPANY INFORMATION:
- We are a leading e-commerce platform serving millions of customers
- We offer electronics, fashion, home goods, books, and more
- We have a 30-day return policy for most items
- Free shipping on orders over $50
- We offer premium membership with faster shipping and exclusive deals
- Customer service hours: 9 AM - 9 PM EST, Monday-Sunday
- We support multiple payment methods including credit cards, PayPal, and digital wallets

COMMON POLICIES:
- Refunds: 30-day return window, items must be in original condition
- Shipping: Standard (5-7 days), Express (2-3 days), Overnight available
- Exchanges: Free exchanges within 30 days
- Price matching: We match competitor prices on identical items
- Account issues: Can reset passwords, update payment methods, modify addresses
- Order modifications: Can be made within 1 hour of placement

YOUR ROLE:
- Help customer service representatives provide accurate, helpful responses
- Suggest appropriate next steps or questions to ask customers
- Provide professional, empathetic communication templates
- Ensure all responses align with company policies
`;

export async function getSuggestion(data: string, conversation: Message[]) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `${COMPANY_CONTEXT}

Customer Query: ${data}
Conversation history: ${conversation}

Based on this customer query and conversation history, suggest what the customer service representative should ask or do next. 

Provide a brief, actionable suggestion in 6-8 words that helps move the conversation forward productively and do not add double quotes to your response. Examples:
- Ask for order number
- Offer refund or exchange option
- Check shipping address details
- Verify payment method status
- Suggest premium membership benefits

Focus on the most logical next step to resolve the customer's issue.`,
    });

    console.log(response.text);
    return response.text;
  } catch (error) {
    console.error("Error getting AI suggestion:", error);
    throw new Error("Failed to get suggestion. Please try again.");
  }
}

// Alternative version with more specific context
export async function getResponse(
  customerQuery: string,
  conversationHistory?: Message[]
) {
  console.log(conversationHistory);
  try {
    const contextualPrompt = `${COMPANY_CONTEXT}

CONVERSATION HISTORY: ${conversationHistory}

CURRENT CUSTOMER QUERY: ${customerQuery}

Based on the conversation history and current query, provide a tailored response that acknowledges the previous interaction and addresses the current concern professionally.
Provide a brief, actionable suggestion in 4-5 lines that helps move the conversation forward productively. Just send what the
customer serveice representative would send do not add anything extra and do not send the response in double quotes.`;

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
