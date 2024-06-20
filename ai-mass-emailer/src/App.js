import { useState } from 'react';
import { getResponseContent } from './utils/openAICall';

function App() {

  const [responseContent, setResponseContent] = useState({});

  const requestObj = {
    messages: [
      {
        role: "system",
        content:
          `You are a friendly assistant, that generates a response JSON format for a user seeking to write an email to a group of people. The key should be 'content'. Don't include any extra text outside of email body itself. Don't say you will create the post, just give me the content. Please make the email professional in tone and reasonable in length.`,
      },
      {
        role: "user",
        content: "",
      },
    ],
    model: "gpt-3.5-turbo",
    temperature: 0.2,
  };

  const handleGenerateClick = () => {
    getResponseContent(requestObj)
      .then(r => setResponseContent(JSON.parse(r.content)));
  }



  console.log(responseContent)
  return (
    <div>
      AI EMAIL GENERATOR
      <button type="button" onClick={handleGenerateClick}>Generate Email</button>
      <p>{responseContent.content}</p>
    </div>
  );
}

export default App;
