import React from 'react';
import Accordion from './Accordion.jsx'


const QuestionList = ({questions, product}) => {
  return (
    <div data-testid="question-list">
      {
        questions.map((question, i) => {
          return <Accordion key={i} question={question} product={product}/>
        })
      }
    </div>
  )
}

export default QuestionList;