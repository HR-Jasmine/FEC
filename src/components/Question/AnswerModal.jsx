import React from 'react';
import { useState } from 'react';
import '../styles/Question/answermodal.css'




const AnswerModal = ({isOpen, closeModal, question}) => {
  const [answerValue, setAnswerValue] = useState('')
  const [nickNameValue, setNickNameValue] = useState('')
  const [email, setEmailValue] = useState('')

  if(!isOpen) return null

  const handleAnswerChange = (e) => {
    e.preventDefault();
    setAnswerValue(e.target.value)
  }
  const handleEmailChange = (e) => {
    e.preventDefault();
    setAnswerValue(e.target.value)
  }
  const handleNickNameChange = (e) => {
    e.preventDefault();
    setAnswerValue(e.target.value)
  }


  return (
    <div className="modal">
      <div>
        <h1 className="answer-modal-title">Submit Your Answer</h1>
      </div>
      <div>
        <h3>Product: </h3>
        <h3>Question:</h3>
      </div>
      <form className="answer-form">
        <div>
          <h4>Answer:</h4>
          <textarea type="text" maxLength={1000} placeholder="The answer to your question is that..."  cols="48" rows="8" required></textarea>
        </div>
        <div>
          <label >Nickname:
            <input type="email" id="name" placeholder="Example: Jack@gmail.com" maxLength={60} required/>
          </label>
          <span className="answer-modal-extra-details">For privacy reasons, do not use your full name or email address</span>
          <label >Email:
            <input type="email" id="email" placeholder="Example: Jack@gmail.com" maxLength={60} required />
          </label>
          <span className="answer-modal-extra-details">For authentication reasons, you will not be emailed</span>
        </div>

      </form>

      <button> Add Answer </button>
      <button className="close-modal" onClick={closeModal}>X</button>
    </div>
  )
}

export default AnswerModal;