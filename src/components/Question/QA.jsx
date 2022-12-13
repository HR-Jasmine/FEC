// Dependencies
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
// Components //
import Search from './Search.jsx'
import QuestionList from './QuestionList.jsx'
import MoreBtn from './MoreBtn.jsx'
import AddQ from './AddQ.jsx'
// Functions //
import sortQuestions from './lib/sortQuestions.js'

// Styling //
import '../styles/Question/main.css';
import interaction from '../interaction.js';

const QA = ({productId, product}) => {
  if (!product) {
    return null;
  }
  // State management //
  const [questions, setQuestions] = useState([])
  const [filteredQuestions, setFilteredQuestions] = useState([])
  const [questRendered, setQuestRendered] = useState(4)
  const [questCount, setQuestCount] = useState(0)


  // Global Variables //
  const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions';
  const headers = {'Authorization': process.env.API_KEY};
  const params = {
    product_id: productId,
    page: 1,
    count: 5
  }

  const getQuestions = () => { // fetching the list of questions about a particular product
    axios.get(url, {params,headers})
      .then((res) => {
        const arrayOfQuestions = res.data.results
        const sortedQuestions = sortQuestions(arrayOfQuestions) // sort question by helpfulness
        setQuestCount(sortedQuestions.length)
        setQuestions(sortedQuestions.slice(0, questRendered))
        setFilteredQuestions(sortedQuestions.slice(0,questRendered))
      })
  }
  useEffect(getQuestions,[productId, questRendered]) // Rerenders everytime the productId changes


  return (
    <div className="QA-ctn" onClick={(e) => {interaction(e.target, 'Question')}} data-testid="qa">
      <h2 className="section-title" data-testid="section-title">Questions & Answers</h2>
      <Search filteredQuestions={filteredQuestions} setFilteredQuestions={setFilteredQuestions} questions={questions} data-testid="search-bar"/>
      <QuestionList questions={filteredQuestions} product={product}/>
      <div className="btn-container" data-testid='btn-ctn'>
        <MoreBtn setQuestRendered={setQuestRendered} questCount={questCount} questRendered={questRendered} />
        <AddQ product={product} productId={productId}/>
      </div>
    </div>
  )
}

export default QA