import React from 'React';
import SearchQ from './SearchQ.jsx'
import QuestionList from './QuestionList.jsx'
import AddExpand from './AddExpand.jsx'
import './styles/Question.css'


const QuestionSection = () => {
  return (
    <div className="question-container">
      <h1>Question & Answer</h1>
      <SearchQ />

      <QuestionList/>

      <AddExpand />
    </div>
  )
}

export default QuestionSection;