import React from 'react';
import { useState } from 'react';
import '../styles/Question/answermodal.css'
import AnswerForm from './AnswerForm.jsx'




const AnswerModal = ({isOpen, closeModal, question, product}) => {
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
      <h1 className="modal-title">Submit Your Answer</h1>
      <h3 className="modal-product">Product: {product.name}</h3>
      <h3 className="modal-product">Question: {question.question_body}</h3>
      <AnswerForm question={question}/>
      <button className="close-modal" onClick={closeModal}>X</button>
    </div>
  )
}

export default AnswerModal;