import React from 'react'
import '../../styles/Question/modal.css'
import QForm from '../Forms/QForm.jsx'

const QuestionModal = ({product, question, setQuestModalOpen, productId}) => {

  const closeQuestModal = (e) => {
    e.preventDefault();
    setQuestModalOpen(false);
  }

  return (
    <div className="answer-modal-bg">

        <QForm question={question} closeQuestModal={closeQuestModal} product={product} productId={productId}/>

    </div>
  )
}

export default QuestionModal;