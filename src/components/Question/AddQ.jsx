import React from 'react';
import { useState } from 'react'
import QuestionModal from './Modals/QuestionModal.jsx'
import '../styles/Question/addexpand.css'

const AddQ = ({product, productId}) => {
  const [questModalOpen, setQuestModalOpen] = useState(false)

  const openQuestionModal = (e) => {
    e.preventDefault();
    setQuestModalOpen(true)
  }

  return (
    <div>
      <button onClick={openQuestionModal} className="addexpand-btn" data-testid="add-q">Add Question</button>
      {questModalOpen && <QuestionModal setQuestModalOpen={setQuestModalOpen} product={product} productId={productId} /> }
    </div>
  )
}

export default AddQ;