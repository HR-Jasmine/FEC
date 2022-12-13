import React from 'react'
import '../../styles/Question/modal.css'
import '../../styles/style.css'
import QForm from '../Forms/QForm.jsx'

const QuestionModal = ({product, question, setQuestModalOpen, theme, themes}) => {

  const closeQuestModal = (e) => {
    e.preventDefault();
    setQuestModalOpen(false);
  }

  return (
    <div className={`answer-modal-bg ${themes['t1'][theme]}`}>

        <QForm question={question} closeQuestModal={closeQuestModal} product={product} theme={theme} themes={themes}/>

    </div>
  )
}

export default QuestionModal;