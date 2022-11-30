import React from 'react';
import EachQ from './EachQ.jsx'
import './styles/QuestionList.css'


const QuestionList = () => {
  return (
    <div className='question-list-container'>
      <EachQ/>
    </div>
  )
}

export default QuestionList;