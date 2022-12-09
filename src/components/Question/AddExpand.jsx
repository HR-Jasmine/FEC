import React from 'react';
import '../styles/Question/addexpand.css';
import QuestModal from './QuestModal.jsx';
import { useState } from 'react';




const AddExpand = ({setNumOfQuestionsRendered, productId, product, listOfQuestions, numOfQuestionsRendered, originalLength}) => {
  const [questIsOpen, setQuestIsOpen] = useState(false)

  const moreQuestions = (e) => {
    e.preventDefault();
    setNumOfQuestionsRendered((prev) => {
      if(numOfQuestionsRendered === originalLength) {
        e.target.disabled = true
      }
      return prev + 2
    })
  }
  const openQuestModal = (e) => {
    e.preventDefault();
    setQuestIsOpen(true)
  }
  const closeQuestModal = (e) => {
    e.preventDefault();
    setQuestIsOpen(false)
  }


  return (

    <div className="button-container">
      {
      originalLength > 2 ? <div className="add-expand-btn-container">
        <button className="more" onClick={moreQuestions}> More Questions</button>
        <button className="add" onClick={openQuestModal} > Add a question </button>
      </div>: <button className="add" onClick={openQuestModal} > Add a question </button>
      }
      <QuestModal questIsOpen={questIsOpen} productId={productId} closeQuestModal={closeQuestModal} product={product} />
    </div>
  )
}
export default AddExpand;