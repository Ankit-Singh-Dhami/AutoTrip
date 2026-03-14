import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENAI_API_KEY,
  defaultHeaders: {
    "HTTP-Referer": "http://localhost:3000",
    "X-Title": "AutoTrip",
  },
});

export async function POST(request: NextRequest) {
  try {
    const { messages, step } = await request.json();

    const prompt = `
You are an AI Trip Planner Agent.

CURRENT STEP: ${step}

Ask ONLY ONE question related to this step.
Do NOT ask about any other step.
Do NOT skip steps.

Step meanings:
- source → starting city
- destination → destination city or country
- groupSize → number of travelers
- budget → budget range
- tripDuration → number of days
- interests → travel interests
- preferences → special requirements
- final → generate complete trip plan

Return STRICT JSON ONLY.
No extra text. No markdown.

Response format:
{
  "resp": "question or response text",
  "ui": "${step}"
}
`;

    const completion = await openai.chat.completions.create({
      model: "mistralai/mistral-7b-instruct",
      temperature: 0.7,
      messages: [{ role: "system", content: prompt }, ...messages],
    });

    const raw = completion.choices[0].message?.content ?? "";

    // Clean mistral tokens
    const cleaned = raw
      .replace(/<[^>]+>/g, "")
      .replace(/\[\/INST\]/g, "")
      .trim();

    // Extract JSON safely
    const match = cleaned.match(/\{[\s\S]*\}/);

    let response;
    if (match) {
      response = JSON.parse(match[0]);
    } else {
      response = { resp: cleaned, ui: step };
    }

    return NextResponse.json(response);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "AI failed" }, { status: 500 });
  }
}
