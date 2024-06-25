import { useState } from 'react';
import { getResponseContent } from '../../utils/openAICall';
import requestObj from '../../utils/requestObject';

const GeneratorForm = () => {

  const [responseContent, setResponseContent] = useState({});
  const [formContent, setFormContent] = useState({
    "audience": "",
    "topic": "",
  })

  const handleGenerateClick = () => {
    getResponseContent(requestObj)
      .then(r => setResponseContent(JSON.parse(r.content)));
  }

  const handleFormChange = (e) => {
    setFormContent(prevVals => ({...prevVals, [e.target.name]:e.target.value}))
  }


  return (
    <>
      <form>
        <label htmlFor="audience">Who's the email to?</label>
        <input
          type="text"
          name="audience"
          onChange={handleFormChange}
          value={formContent.audience}></input>

        <label htmlFor="topic">What's it about?</label>
        <input
          type="text"
          name="topic"
          onChange={handleFormChange}
          value={formContent.topic}></input>

        <button type="button" onClick={handleGenerateClick}>Generate Email</button>

        <p>{responseContent.content}</p>
      </form>
    </>
  )

}

export default GeneratorForm;