import React from 'react';
import '../styles/Question/addexpand.css';
import QuestModal from './QuestModal.jsx';
import { useState } from 'react';




const AddExpand = ({setNumOfQuestionsRendered, productId, product, listOfQuestions}) => {
  const [questIsOpen, setQuestIsOpen] = useState(false)

  const moreQuestions = (e) => {
    e.preventDefault();
    setNumOfQuestionsRendered(2)
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
      <QuestModal questIsOpen={questIsOpen} productId={productId} closeQuestModal={closeQuestModal} product={product}/>
      {/* {listOfQuestions.length > 2 ? <button className="more" onClick={moreQuestions}> More Questions</button> : <span></span>} */}
      <button className="more" onClick={moreQuestions}> More Questions</button>
      <button className="add" onClick={openQuestModal} > Add a question </button>
    </div>
  )
}
export default AddExpand;