import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";
import dotenv from "dotenv";
dotenv.config({ path: "../.env.local" });

console.log(process.env.OPENAI_API_KEY);

const model = new ChatOpenAI({});
const promptTemplate = PromptTemplate.fromTemplate(
  "Tell me a joke about {topic}",
);

const chain = promptTemplate.pipe(model);

const result = await chain.invoke({ topic: "bears" });

console.log(result);

/*
  AIMessage {
    content: "Why don't bears wear shoes?\n\nBecause they have bear feet!",
  }
*/
