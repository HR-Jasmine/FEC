import React from 'react'
import '../styles/Question/questmodal.css'
import QuestionForm from './QuestionForm.jsx'

const QuestModal = ({questIsOpen, closeQuestModal, productId, product}) => {
  if(!questIsOpen) return null
  return (
    <div className="quest-modal">
      <h1 className="modal-title">Ask Your Question</h1>
      <h3 className="modal-product">Product: {product.name}</h3>
      <QuestionForm />
      <button className="close-quest-modal-btn" onClick={closeQuestModal}> X </button>
    </div>
  )
}

export default QuestModal;