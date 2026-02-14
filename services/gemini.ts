
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getDynamicReflection = async (topic?: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Provide a beautiful Islamic reflection for today. 
                 Include a verse (ayah) or hadith (in English), the source, and a 1-sentence actionable spiritual goal. 
                 Topic: ${topic || 'general spiritual growth'}. 
                 Keep it brief and inspiring.`,
      config: {
        temperature: 0.7,
        topP: 0.95,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return null;
  }
};
