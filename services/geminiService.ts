
import { GoogleGenAI, Type } from "@google/genai";
import { SkinType } from "../types";

export const getBeautyTip = async (skinType: SkinType): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `あなたは美容のエキスパートです。${skinType}の方に向けて、日常で気をつけるべきスキンケアのワンポイントアドバイスを、可愛らしく親しみやすい口調で100文字以内で作成してください。`,
      config: {
        temperature: 0.8,
        topP: 0.95,
      }
    });

    return response.text || "毎日のケアを大切に、自分らしい美しさを磨きましょう！";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "あなたの肌に合わせた特別なケアで、もっと輝く毎日を。";
  }
};
