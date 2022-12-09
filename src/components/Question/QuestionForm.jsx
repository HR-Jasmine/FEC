import React from 'react';
import FormInput from './FormComp/FormInput.jsx'
import FormTextArea from './FormComp/FormTextArea.jsx'
import { useState } from 'react';
import axios from 'axios'

const headers = {'Authorization': process.env.API_KEY};
const QuestionForm = ({productId, closeQuestModal}) => {

  const [values, setValues] = useState({
    Nickname: "",
    Email:"",
    Question: ""
  })

  const inputs = [
    {
      name: 'Nickname',
      type: 'text',
      placeholder: 'Example: jackson11!',
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
  name: 'Question',
    type: 'text',
    placeholder: 'The question that I have about this product is...',
    label: "Question:"
  }]

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    const formData = JSON.stringify(values)
    const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${productId}`;
    const params = {
      body: values.Question,
      name: values.Nickname,
      email: values.Email,
    }
    axios.post(url, params, {headers})
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log('Cannot post')
      })
  }
  const handleChange = (e) => {
    e.preventDefault();
    setValues({...values, [e.target.name]: e.target.value})
  }


  return (
    <div className="form-app">
      <form onSubmit={handleQuestionSubmit}>
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
      </form>
    </div>
  )
}

export default QuestionForm;