import { Configuration, OpenAIApi } from "openai"
import { NextResponse } from "next/server";
import { GET } from "../auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function POST(request) {
  const res = await getServerSession(GET);
  let session =  JSON.parse(JSON.stringify(res, null, 2))

  const body = await request.json()

  const topic = body.topic
  const type = body.type
  const side = body.side


  // if (topic.trim().length < 3) {
  //   res.status(400).json({
  //     error: {
  //       message: "Please enter a valid topic",
  //     }
  //   });
  //   return;
  // }
  if(session){
    try {
      const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: generatePrompt(topic, type, side),
        temperature: 0.6,
        max_tokens: 1000
      });
  
      // res.status(200).json({ result: completion.data.choices[0].text });
      return NextResponse.json({result: completion.data.choices[0].text})
    } catch(error) {
      // // Consider adjusting the error handling logic for your use case
      // if (error.response) {
      //   console.error(error.response.status, error.response.data);
      //   res.status(error.response.status).json(error.response.data);
      // } else {
      //   console.error(`Error with OpenAI API request: ${error.message}`);
      //   res.status(500).json({
      //     error: {
      //       message: 'An error occurred during your request.',
      //     }
      //   });
      // }
    }
  }

}

function generatePrompt(topic, type, side) {

  return `You are a master debating competing at an olympic debating event. 
  Please write a  debate defending your side of the following topic "${topic}" with 3 seperate contentions defending your side. You are on the ${side} side. Please elaborate deeply on each of these three contentions. This is a ${type} debate
  `;
}