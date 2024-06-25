const makeRequestObj = (audience, topic) => {

  return {
    messages: [
      {
        role: "system",
        content:
          `You are a friendly assistant, that generates a response JSON format for a user seeking to write an email to a group of people. The key should be 'content'. Don't include any extra text outside of email body itself. Don't say you will create the post, just give me the content. The intended audience for the email is ${audience}, and the email should be addressed to this audience. The content of the email should be ${topic}. Please make the email professional in tone and reasonable in length.`,
      },
      {
        role: "user",
        content: "",
      },
    ],
    model: "gpt-3.5-turbo",
    temperature: 0.2,
  };
}

export default makeRequestObj;