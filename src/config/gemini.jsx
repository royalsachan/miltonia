import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey =  "AIzaSyCMJdfbMHhGqsJ0AZLON7aEuM7RodSsH7w"; // Use environment variables for API keys
const genAI = new GoogleGenerativeAI( apiKey ); // Check SDK documentation for correct initialization

const model = genAI.getGenerativeModel({ model: "gemini-pro"});


const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
//   responseMimeType: "text/plain",
};

async function run(prompt) {
    const result = await model.generateContent(prompt, generationConfig);
    console.log(result.response.text());
    return result.response.text();
}

export default run;
