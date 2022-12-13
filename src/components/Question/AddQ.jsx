import React from 'react';
import { useState } from 'react'
import QuestionModal from './Modals/QuestionModal.jsx'

const AddQ = ({product, theme, themes}) => {
  const [questModalOpen, setQuestModalOpen] = useState(false)

  const openQuestionModal = (e) => {
    e.preventDefault();
    setQuestModalOpen(true)
  }

  return (
    <div>
      <button onClick={openQuestionModal}>Add Question</button>
      {questModalOpen && <QuestionModal setQuestModalOpen={setQuestModalOpen} product={product} theme={theme} themes={themes}/> }
    </div>
  )
}

export default AddQ;