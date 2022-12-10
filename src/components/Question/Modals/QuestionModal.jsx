import React from 'react'
import '../../styles/Question/modal.css'
import QForm from '../Forms/QForm.jsx'

const QuestionModal = ({product, question, setQuestModalOpen}) => {

  const closeQuestModal = (e) => {
    e.preventDefault();
    setQuestModalOpen(false);
  }

  return (
    <div className="answer-modal-bg">

        <QForm question={question} closeQuestModal={closeQuestModal} product={product}/>

    </div>
  )
}

export default QuestionModal;