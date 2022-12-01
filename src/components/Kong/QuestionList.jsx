import React from 'react';
import '../styles/Question/list.css';
import Accordion from './Accordion.jsx'

const QuestionList = ({ listOfQuestions }) => {
  return (

    <div className='question-list-container'>
      {
        listOfQuestions.map((question, i) => {
          return <Accordion key={i} question={question}/>
        })
      }
    </div>
  )

}
export default QuestionList;