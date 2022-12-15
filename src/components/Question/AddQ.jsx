import React from 'react';
import { useState } from 'react'
import QuestionModal from './Modals/QuestionModal.jsx'
import '../styles/Question/addexpand.css'

const AddQ = ({product, theme, themes}) => {
  const [questModalOpen, setQuestModalOpen] = useState(false)

  const openQuestionModal = (e) => {
    e.preventDefault();
    setQuestModalOpen(true)
  }

  return (
    <div>
      <button onClick={openQuestionModal} className={'card smallButton hover ' + themes['t2'][theme]}>Add Question</button>
      {questModalOpen && <QuestionModal setQuestModalOpen={setQuestModalOpen} product={product} theme={theme} themes={themes}/> }
    </div>
  )
}

export default AddQ;