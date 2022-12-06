import React from 'react';
import { useState } from 'react';
import '../styles/Question/answermodal.css'
import AnswerForm from './AnswerForm.jsx'




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
      <h1>Submit Your Answer</h1>
      <h3>Product: placeholder</h3>
      <h3>Question: {question.question_body}</h3>
      <AnswerForm/>
      <button className="close-modal" onClick={closeModal}>X</button>
    </div>
  )
}

export default AnswerModal;