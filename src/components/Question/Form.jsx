import React from 'react';
import FormInput from './FormComp/FormInput.jsx'
import FormTextArea from './FormComp/FormTextArea.jsx'
import { useState } from 'react';
const Form = () => {
  const [values, setValues] = useState({
    Nickname: "",
    Email:"",
    TextArea: ""
  })

  const inputs = [
    {
      name: 'Nickname',
      type: 'text',
      placeholder: 'Nickname',
      label: "Nickname",
      extramessage: "For privacy reasons, do not use your full name or email address",
      errormessage: "Nickname should be no more than 60 characters",
      required: true
    },
    {
      name: 'Email',
      type: 'email',
      placeholder: 'Email',
      label: "Email",
      extramessage: "For authentication reasons, you will not be emailed",
      errormessage:"Email should be a valid email address",
      required: true
    },
  ]

  const textObj= [{
    name: 'TextArea',
    type: 'text',
    placeholder: 'TextArea',
    label: "TextArea"
  }]

  const handleSubmit = (e) => {
    e.preventDefault();

  }
  const handleChange = (e) => {
    e.preventDefault();
    setValues({...values, [e.target.name]: e.target.value})
  }
  console.log(values)

  return (
    <div className="form-app">
      <form onSubmit={handleSubmit}>
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
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form;