import React from 'react';
import '../styles/Question/addexpand.css';
import QuestModal from './QuestModal.jsx';
import { useState } from 'react';




const AddExpand = ({setNumOfQuestionsRendered, productId}) => {
  const [questIsOpen, setQuestIsOpen] = useState(false)

  const test = (e) => {
    e.preventDefault();
    console.log("Add Question Clicked");
  }

  const moreQuestions = (e) => {
    e.preventDefault();
    setNumOfQuestionsRendered((prev) => prev + 2)
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
      <QuestModal questIsOpen={questIsOpen} productId={productId} closeQuestModal={closeQuestModal}/>
      <button className="more" onClick={moreQuestions}> More Questions</button>
      <button className="add" onClick={openQuestModal} > Add a question </button>
    </div>
  )
}
export default AddExpand;