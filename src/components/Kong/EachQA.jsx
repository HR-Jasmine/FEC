import React from 'react';
import './styles/each.css'
import {format} from 'date-fns'


const EachQA = ({question}) => {
  let test = question.results[0];
  const date = test.question_date.slice(0,10)
  const newDate = format(new Date (date), 'MMMM d, yyyy')

  return (
    <div className="question-card">
      <div className="question-row">
        <h4>Q: {test.question_body}</h4>
        <div className="user">
          <button> Helpful ?</button>
          <span className="yes">Yes ({test.answers[68].helpfulness})</span>
          <button>Add Answer</button>
        </div>
      </div>
      <h4 className="answer">A: {test.answers[68].body}</h4>
      <div className="user">
        <p>By:{test.asker_name} {newDate}</p>
        <button> Helpful ?</button>
        <span className="yes">Yes (0)</span>
        <button>Add Answer</button>
        <button>Report</button>
      </div>
    </div>
  )
}
export default EachQA;

