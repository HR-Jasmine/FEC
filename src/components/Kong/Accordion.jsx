import React from 'react';
import { useState } from 'react';
import '../styles/Question/accordion.css';
import {format} from 'date-fns'

const Accordion = ({question}) => {

  const [isActive, setIsActive] = useState(false);
  const [helpfulness, setHelpfulness] = useState(0)
  const testerData = question.results[1];
  const date = testerData.question_date;
  const newDate = format(new Date (date), 'MMMM d, yyyy')
  const sortedAnswersId = Object.keys(testerData.answers).sort((a, b) => {
    return testerData.answers[b].helpfulness - testerData.answers[a].helpfulness
  })

  const helpCountChange = (e) => {
    e.preventDefault();
    setHelpfulness((prev) => prev + 1)
  }

  return (
    <div className="accordion">
      <div className="accordion-item">
        <div className="accordion-title" >
          <div className="question-row">
            <h4>Q: {testerData.question_body} </h4>
            <div className="arrow bounce" onClick={() => setIsActive(!isActive)}></div>
          </div>
        </div>
        {isActive &&
          <div className="answer-container accordion-content">
            {
             sortedAnswersId.map((answerId, i) => {
                return (
                  <div key={i}>
                    <h4 className="answer">A: {testerData.answers[answerId].body}</h4>
                    <div className="user">
                      <p>By: {testerData.answers[answerId].answer_name}</p>
                      <button> Helpful ?</button>
                      <span className="yes">Yes ({testerData.answers[answerId].helpfulness})</span>
                      <button>Add Answer</button>
                      <button>Report</button>
                    </div>
                  </div>
                )
              })
            }
            {
              sortedAnswersId.length > 1 ? <button> See more </button> : <button> Collapse Answers</button>
            }
          </div>
        }
      </div>
    </div>
  )
}

export default Accordion;
