import React from 'react'
import '../styles/Question/questmodal.css'

const QuestModal = ({questIsOpen, closeQuestModal}) => {
  if(!questIsOpen) return null
  return (
    <div className="quest-modal">
      <div>
        <h1 className="answer-modal-title">Ask Your Question</h1>
      </div>
      <div>
        <h3>About the: placeholder  </h3>
      </div>
      <form className="question-form">
        <div>
          <h4>Question:</h4>
          <textarea type="text" maxLength={1000} placeholder="The Question I want to ask is..."  cols="48" rows="8" required></textarea>
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
      <button> Submit Question </button>
      <button className="close-quest-modal-btn" onClick={closeQuestModal}> X </button>
    </div>
  )
}

export default QuestModal;