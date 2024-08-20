import { NextResponse } from "next/server";
import OpenAI from 'openai'

const systemPrompt = `
You are a professional flashcard creator that helps students thrive, you take in text and create multiple flashcards from it. 
Make sure to create exactly 10 flashcards with different terminology related to the give topic.
Both front and back should be one sentence long.
You should return in the following JSON format:
{
  "flashcards":[
    {
      "front": "Front of the card",
      "back": "Back of the card"
    }
  ]
}
`

export async function POST(req){
    const openai = new OpenAI()
    const data = await req.text()

    const completion = await openai.chat.completions.create({
      messages:[
        { role: 'system', content: systemPrompt},
        { role: 'user', content: data},
      ],
      model: 'gpt-4o',
      response_format: {type: 'json_object'},
    })

    const flashcards = JSON.parse(completion.choices[0].message.content)

    return NextResponse.json(flashcards.flashcards)
}