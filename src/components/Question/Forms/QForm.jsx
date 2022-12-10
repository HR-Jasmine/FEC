import React from 'react';
import { useState } from 'react'
import Finput from './Finput.jsx'
import Ftextarea from './Ftextarea.jsx'
import axios from'axios'

const AForm = ({question, closeQuestModal, product}) => {

  const headers = {'Authorization': process.env.API_KEY};
  const [photoIsOpen, setPhotoIsOpen] = useState(false)
  const [values, setValues] = useState({
    Nickname: "",
    Email:"",
    Question: ""
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
    name: 'Question',
    type: 'text',
    placeholder: 'The question that I have about this product is...',
    label: "Question:"
  }]

  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${question.question_id}/answers`;
    const params = {
      body: values.Answer,
      name: values.Nickname,
      email: values.Email,
    }
    axios.post(url, params, {headers})
      .then((res) => {
        console.log(res)
      })
  }

  const handleChange = (e) => {
    e.preventDefault();
    setValues({...values, [e.target.name]: e.target.value})
  }

  const openPhoto = (e) => {
    e.preventDefault();
    setPhotoIsOpen(true)
  }
  const closePhotoModal = (e) => {
    e.preventDefault();
    setPhotoIsOpen(false)
  }


  return (
    <div className="form-app">
      <form onSubmit={handleAnswerSubmit} className="question-form">
        <button onClick={closeQuestModal} className="closeModal-btn"> X </button>
        <div className="modal-details">
          <span className="modal-title">Ask Your Question</span>
          <span className="product-details">Product: {product.name}</span>
        </div>
        <div className="input-div">
          {
            inputs.map((input, i) => {
              return <Finput key={i} {...input} value={values[input.name]} handleChange={handleChange}/>
            })
          }
        </div>
        {/* <input type="file" className="upload-btn"  ></input> */}
        <div className="textarea-div">
          {
            textObj.map((text, i) => {
              return <Ftextarea key={i} {...text}  value={values[text.name]} handleChange={handleChange} />
            })
          }
        </div>
        <button className="submit-btn" type="submit">Submit</button>

      </form>
      {/* <PhotoModal photoIsOpen={photoIsOpen} setPhotoIsOpen={setPhotoIsOpen} closePhotoModal={closePhotoModal}/> */}
    </div>
  )
}

export default AForm;