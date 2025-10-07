import { NextRequest, NextResponse } from "next/server";
import {GoogleGenAI} from "@google/genai";

export async function POST (request: NextRequest) {
    try {
        console.log("You have requestion gemni api");
        const body = await request.json();
        const prompt = body.prompt;

        const API_KEY = process.env.GEMINI_API_KEY;
        if (!API_KEY) {
            throw new Error("PLease provide API Key in .env");
        }

        console.log(API_KEY)

        const ai = new GoogleGenAI({apiKey: API_KEY});
        const relevantKeywords = [
  "skin", "acne", "pimples", "brighten", "cleanse", "dry", "oily", "face pack"
];

const solutionKeywords = ["problem", "help", "solution", "fix", "cure", "treatment", "remedy"];

const promptLower = prompt.toLowerCase();
const isSolutionRequest = solutionKeywords.some(word => promptLower.includes(word));
const isRelevant = relevantKeywords.some(word => promptLower.includes(word));

if (isSolutionRequest && isRelevant) {
  return NextResponse.json({
    text: "🌿 For your issue, we recommend our Herbal Face Pack — it gently cleanses, brightens, and nourishes your skin naturally!"
  });
}
if (!isRelevant) {
  return NextResponse.json({
    text: "🌿 I can help with herbal skincare questions. What would you like to know?"
  });
}




        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash-001",
            contents: prompt,
            config: {
                systemInstruction: [
                "You are Rootsy, a helpful AI assistant from Roop and Roots.",  
                "Do not provide unrelated advice or external products.",
                "Be friendly, concise, and professional.",
                ]
            }
        })

        console.log(response.text);

        return NextResponse.json({ text: response.text });
        
    } catch (err) {
        console.log(err)
        return NextResponse.json("Something went wrong", {
            status: 500,
        })
    }
}