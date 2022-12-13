import React from 'react'
import '../../styles/Question/modal.css'
import AForm from '../Forms/AForm.jsx'

const AnswerModal = ({product, question, setOpenAnswer}) => {

  const closeAnsModal = (e) => {
    e.preventDefault();
    setOpenAnswer(false);
  }

  return (
    <div className="answer-modal-bg" data-testid="ans-modal">
        <AForm question={question} closeAnsModal={closeAnsModal} product={product}/>
    </div>
  )
}

export default AnswerModal