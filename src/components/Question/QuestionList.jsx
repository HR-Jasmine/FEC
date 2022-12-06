import React from 'react';
import '../styles/Question/list.css';
import Accordion from './Accordion.jsx'

const QuestionList = ({ listOfQuestions, product }) => {

  return (

    <div className='question-list-container'>
      {
        listOfQuestions.map((question, i) => {
          return <Accordion key={i} question={question} product={product} />
        })
      }
    </div>
  )

}
export default QuestionList;