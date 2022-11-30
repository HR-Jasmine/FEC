import React from 'react';
import './styles/main.css'
import QuestionList from './QuestionList.jsx'


const QA = () => {
  return (
    <div className="main-container">
      <h2 className="section-name">Question & Answer</h2>
      <QuestionList/>
    </div>
  )
}

export default QA;