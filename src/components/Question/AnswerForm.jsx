import React from 'react';
import FormInput from './FormComp/FormInput.jsx'
import FormTextArea from './FormComp/FormTextArea.jsx'
import { useState } from 'react';
import axios from 'axios'
import PhotoModal from './PhotoModal.jsx'

const AnswerForm = ({question}) => {
  const headers = {'Authorization': process.env.API_KEY};
  const [photoIsOpen, setPhotoIsOpen] = useState(false)
  const [values, setValues] = useState({
    Nickname: "",
    Email:"",
    Answer: ""
  })

  const inputs = [
    {
      name: 'Nickname',
      type: 'text',
      placeholder: 'Example: jack543!',
      label: "Nickname:",
      extramessage: "For privacy reasons, do not use your full name or email address",
      errormessage: "Nickname should be between 5-60 characters with no special characters",
      pattern: "^[A-Za-z0-9]{5,60}$",
      required: true
    },
    {
      name: 'Email',
      type: 'email',
      placeholder: 'Example: jack@email.com',
      label: "Email:",
      extramessage: "For authentication reasons, you will not be emailed",
      errormessage:"Email should be a valid email address",
      required: true
    },
  ]

  const textObj= [{
    name: 'Answer',
    type: 'text',
    placeholder: 'The answer to your question is...',
    label: "Answer:"
  }]




  const handleAnswerSubmit = (e) => {
    console.log(question.id)
    const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${question.question_id}/answers`;
    const params = {
      body: values.Answer,
      name: values.Nickname,
      email: values.Email,
    }
    e.preventDefault();
    axios.post(url, params, {headers})
      .then((res) => {
        console.log(res)
      })

  }
  const handleChange = (e) => {
    e.preventDefault();
    setValues({...values, [e.target.name]: e.target.value})
  }

  return (
    <div className="form-app">
      <form onSubmit={handleAnswerSubmit}>
        <div className="input-div">
          {
            inputs.map((input, i) => {
              return <FormInput key={i} {...input} value={values[input.name]} handleChange={handleChange}/>
            })
          }
        </div>
        <div className="textarea-div">
          {
            textObj.map((text, i) => {
              return <FormTextArea key={i} {...text}  value={values[text.name]} handleChange={handleChange} />
            })
          }
        </div>
        <button className="submit-btn" type="submit">Submit</button>
        <button>Upload Photos</button>
      </form>
      <PhotoModal photoIsOpen={photoIsOpen} setPhotoIsOpen={setPhotoIsOpen}/>
    </div>
  )
}

export default AnswerForm;