import React from 'react'
import '../../styles/Question/answermodal.css'
import AForm from '../Forms/AForm.jsx'

const AnswerModal = ({product, question, setOpenAnswer}) => {

  const closeAnsModal = (e) => {
    e.preventDefault();
    setOpenAnswer(false);
  }

  return (
    <div className="answer-modal-bg">
        <AForm question={question} closeAnsModal={closeAnsModal}/>
    </div>
  )
}

export default AnswerModal