import getSystemMessage from "../system-message.js"
import { getData, setData } from "../utils/data.js"

const getMessage = (message, persona) => {
  const optionsMessage =
    ' The options array MUST be 3 generated possible follow-up responses asking for information about Nandyala nitish based on the "textResponse".'

  if (Number.isInteger(message)) {
    const companyContext = `The individual you are messaging to works for the company: x.`

    switch (persona) {
      case "employee":
        return `${companyContext}. textReponse: . You WILL intiate by greeting the person and expressing excitement for the new potential co-worker while keeping within the character limit.${optionsMessage}`
      case "family":
        return `${companyContext}. textReponse: . You WILL intiate by greeting the person and expressing excitement for Nandyala while keeping within the character limit.${optionsMessage}`
      case "technologist":
        return `${companyContext}. textReponse:  You WILL intiate by greeting the person and by expressing excitement for Nandyala while keeping within the character limit. ${optionsMessage}`
      case "recruiter":
      default:
        return `${companyContext}. textReponse: A recruiter from x that has come across Nandyala's resume, you WILL intiate by greeting the person and by hyping up Nandyala  while keeping within the 250 character limit. ${optionsMessage}`
    }
  }

  return `The individual replies with: ${message}.  textReponse: Reply answering the question keeping your answer less then 250 characters. ${optionsMessage}`
}

const generatedMessage = async (prompt: string, systemMessage: string, attempts: number) => {
  const basePath = "https://phmiazuregpttest001.openai.azure.com/"
  const apiVersion = "2023-03-15-preview"
  const apiKey = process.env.OPENAI_API_KEY

  const url = `${basePath}/openai/deployments/gpt-4o-2/chat/completions?api-version=${apiVersion}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': `${apiKey}`,
    },
    body: JSON.stringify({
      messages: [
        {
          role: "system",
          content: systemMessage + 'you must respond in json format'
        },
        {
          role: "user",
          content: prompt
        }
      ]
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("API Error Response:", errorText);
    throw new Error(`API request failed with status ${response.status}: ${errorText}`);
  }

  const message = await response.json();
  console.log("API Response:", message); // Log the entire response for debugging

  if (!message.choices || !message.choices[0] || !message.choices[0].message) {
    throw new Error("Invalid response structure from OpenAI API");
  }
  let content;
  try {
    let rawContent = message.choices[0].message.content.trim();
    rawContent = rawContent.replace(/```/g, '').replace(/json/g, '').trim();
    content = JSON.parse(rawContent);
  } catch (error) {
    console.error("Error parsing JSON response:", error);
    throw new Error("Failed to parse JSON response from OpenAI API");
  }

  const { textResponse, options } = content;
  const messageId = message.id || message.messageId; // Assuming message has an id or messageId property
  setData(messageId, options, attempts);

  return { text: textResponse, options, parentId: messageId };
}

const postMessage = async (req, res) => {
  const { message, persona, parentId: parentMessageId } = req.body
  try {
    const systemMessage = getSystemMessage(persona)

    if (!parentMessageId) {
      const msg = getMessage(message, persona)
      const { text, options, parentId } = await generatedMessage(msg, systemMessage, 1)
      return res.json({ text, options, parentId })
    }

    const data = getData(parentMessageId)
    if (!data || data.expires <= Date.now() || data.attempts > 4) {
      throw new Error("No data found for your responses")
    }

    const inputText = data.options[message % data.options.length]
    if (!inputText) {
      throw new Error("No input text found")
    }

    const msg = getMessage(inputText, persona)
    const { text, options, parentId } = await generatedMessage(
      msg,
      systemMessage,
      data.attempts + 1
    )
    return res.json({ text, options, parentId })
  } catch (error) {
    console.error("Error in postMessage:", error)
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return res.status(500).json({ error: errorMessage });
  }
}

export default postMessage