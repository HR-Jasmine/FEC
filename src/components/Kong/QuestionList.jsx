import React from 'react';
import './styles/list.css';
import EachQA from './EachQA.jsx'

const QuestionList = () => {
  return (
    <div className='question-list-container'>
      <EachQA />
    </div>
  )
}
export default QuestionList;