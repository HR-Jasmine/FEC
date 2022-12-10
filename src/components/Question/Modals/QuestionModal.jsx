import React from 'react'
import '../../styles/Question/answermodal.css'
import QForm from '../Forms/QForm.jsx'

const QuestionModal = ({product, question, setQuestModalOpen}) => {

  const closeQuestModal = (e) => {
    e.preventDefault();
    setQuestModalOpen(false);
  }

  return (
    <div className="answer-modal-bg">

        <QForm question={question} closeQuestModal={closeQuestModal}/>

    </div>
  )
}

export default QuestionModal;