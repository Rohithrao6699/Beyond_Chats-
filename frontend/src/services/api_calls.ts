import { GoogleGenAI } from "@google/genai";

const apiUrl = import.meta.env.VITE_AI_API_KEY;
const ai = new GoogleGenAI({
  apiKey: apiUrl,
});

export async function getResponse(data: string) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: `imagine you are a operations head here for a company, respond to this text ${data}`,
  });
  console.log(response.text);
  return response.text;
}

export async function getSuggestion(data: string) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: `You are a model that gives suggestions to customer service representative. Based of on this conversation: ${data}, give a suggestion that the customer service representative might require to ask the user in just 4 words`,
  });
  console.log(response.text);
  return response.text;
}
