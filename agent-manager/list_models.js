import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenerativeAI } from "@google/generative-ai";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '../.env') });

async function listModels() {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        console.log('No API Key found');
        return;
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    // For listing models, we don't need to instantiate a specific model first, 
    // but the SDK structure usually requires a model object for generation.
    // We'll try to use the model manager if available or just try a known one.

    // Actually, the SDK doesn't have a direct 'listModels' method exposed easily in the main class in all versions.
    // Let's try 'gemini-1.5-flash' again but without 'latest' and ensure no typos.
    // It is definitely 'gemini-1.5-flash'.

    console.log("Trying 'gemini-1.5-flash' again...");
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent("Hello");
        console.log("Success with gemini-1.5-flash: ", result.response.text());
    } catch (e) {
        console.log("Failed with gemini-1.5-flash: ", e.message);
    }

    console.log("Trying 'gemini-pro' again...");
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent("Hello");
        console.log("Success with gemini-pro: ", result.response.text());
    } catch (e) {
        console.log("Failed with gemini-pro: ", e.message);
    }
}

listModels();
