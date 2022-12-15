import React from 'react'
import '../../styles/Question/modal.css'
import AForm from '../Forms/AForm.jsx'

const AnswerModal = ({product, question, setOpenAnswer, theme, themes}) => {

  const closeAnsModal = (e) => {
    e.preventDefault();
    setOpenAnswer(false);
  }

  return (
    <div className={`answer-modal-bg ${themes['t1'][theme]}`} data-testid="ans-modal">
        <AForm question={question} closeAnsModal={closeAnsModal} product={product} theme={theme} themes={themes}/>
    </div>
  )
}

export default AnswerModal