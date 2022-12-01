import React from 'react';
import './styles/main.css'
import QuestionList from './QuestionList.jsx'
import Search from './Search.jsx'
import AddExpand from './AddExpand.jsx'
import Accordion from './Accordion.jsx'
import { useState } from 'react';

const QA = () => {



  const test = [
    {
      question: 'How do I make an accordion?',
      date: 'November 30, 2022',
      Answer: 'I have no idea how to make an accordion',
      helpfulness: 6,
      user: 'Kong Yu Chen'
    },
    {
      question: 'How do I make an accordion?',
      date: 'November 30, 2022',
      Answer: 'I have no idea how to make an accordion',
      helpfulness: 6,
      user: 'Kong Yu Chen'
    }

  ]

  const [listOfQuestions, setListOfQuestions] = useState(test)

  return (
    <div className="main-container">
      <h2 className="section-name">Question & Answer</h2>
      <Search />
      <QuestionList listOfQuestions={listOfQuestions}/>
      <AddExpand />
    </div>
  )
}

export default QA;