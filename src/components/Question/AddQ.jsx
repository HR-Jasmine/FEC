import React from 'react';
import { useState } from 'react'
import QuestionModal from './Modals/QuestionModal.jsx'

const AddQ = () => {
  const [questModalOpen, setQuestModalOpen] = useState(false)

  const openQuestionModal = (e) => {
    e.preventDefault();
    setQuestModalOpen(true)
  }

  return (
    <div>
      <button onClick={openQuestionModal}>Add Question</button>
      {questModalOpen && <QuestionModal setQuestModalOpen={setQuestModalOpen}/> }
    </div>
  )
}

export default AddQ;