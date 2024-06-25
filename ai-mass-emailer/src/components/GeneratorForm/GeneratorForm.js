import { useState } from 'react';
import {getResponseContent} from '../../utils/openAICall';
import requestObj from '../../utils/requestObject';

const GeneratorForm = () => {

  const [responseContent, setResponseContent] = useState({});

  const handleGenerateClick = () => {
    getResponseContent(requestObj)
      .then(r => setResponseContent(JSON.parse(r.content)));
  }


  return (
    <><p>Generator Form</p>
      <button type="button" onClick={handleGenerateClick}>Generate Email</button>
      <p>{responseContent.content}</p>
    </>
    )

}

export default GeneratorForm;