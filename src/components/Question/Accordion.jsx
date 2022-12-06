import React from 'react';
import { useState } from 'react';
import '../styles/Question/accordion.css';
import {format} from 'date-fns'
import AnswerModal from './AnswerModal.jsx'
import QuestModal from './QuestModal.jsx'


const Accordion = ({question, product}) => {
  const { question_body, answers, question_helpfulness } = question
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
  const [questionHelpfulness, setQuestionHelpfulness] = useState(question_helpfulness)
  const [answerHelpfulness, setAnswerHelpfulness] = useState(0);
  const [numOfAnswersRendered, setNumOfAnswersRendered] = useState(2)
  // const newDate = format(new Date (date), 'MMMM d, yyyy')
  const numOfAnswers = Object.keys(answers).length
  const sortedAnswersId = Object.keys(answers).slice(0,numOfAnswersRendered).sort((a, b) => {
    return answers[b].helpfulness - answers[a].helpfulness
  })

  // const helpCountChange = (e) => {
  //   e.preventDefault();
  //   setHelpfulness((prev) => prev + 1)
  // }

  const openModal = (e) => {
    e.preventDefault();
    setIsOpen(true)
  }
  const closeModal = (e) => {
    e.preventDefault();
    setIsOpen(false)
  }


  const changeToCollapse = (e) => {
    e.preventDefault();
    if(e.target.innerText === "See more") {
      e.target.innerText = "Collapse"
      setNumOfAnswersRendered((prev) => prev + 4)
    } else {
      e.target.innerText = "See more"
      setNumOfAnswersRendered(2)
    }

  }

  const helpfulIncrement = (e) => {
    e.preventDefault();
    setQuestionHelpfulness((prev) => prev + 1)
    console.log(e)
    e.target.disabled = true;
  }

  return (
    <div className="accordion">
      <div className="accordion-item">
        <div className="accordion-title" >
          <div className="question-row">
            <AnswerModal isOpen={isOpen} closeModal={closeModal} question={question} product={product}/>
            <div className="q-div">
              <h4>Q: {question_body} </h4>
              <div className="quest-help-div">
                <button className="accord-btn" onClick={helpfulIncrement}> Helpful ?</button>
                <span className="yes">Yes ({questionHelpfulness})</span>
              </div>
            </div>
            <div className="arrow bounce" onClick={() => setIsActive(!isActive)}></div>
          </div>
        </div>
        {isActive &&
          <div className="answer-container accordion-content">
            {
             sortedAnswersId.map((answerId, i) => {
                return (
                  <div key={i}>
                    <h4 className="answer">A: {answers[answerId].body} </h4>
                    <div className="user">
                      <p className="username">By: {answers[answerId].answerer_name} </p>
                      <button className="accord-btn"> Helpful ?</button>
                      <span className="yes">Yes({answers[answerId].helpfulness})</span>
                      <button className="accord-btn"onClick={openModal}>Add Answer</button>
                      <button className="accord-btn">Report</button>
                    </div>
                  </div>
                )
              })
            }
            {
              numOfAnswers > 2 ? <button className="see-more-btn" onClick={changeToCollapse}> See more </button> : <span></span>
            }
          </div>
        }
      </div>
    </div>
  )
}

export default Accordion;
