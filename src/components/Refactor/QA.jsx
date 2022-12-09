// Dependencies
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
// Components //
import QuestionList from './QuestionList.jsx'
// Functions //
import sortQuestions from './lib/sortQuestions.js'

// Styling //
import '../styles/Question/main.css';

const QA = ({productId, product}) => {

  // State management //
  const [questions, setQuestions] = useState([])
  const [filteredQuestions, setFilteredQuestions] = useState([])


  // Global Variables //
  const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions';
  const headers = {'Authorization': process.env.API_KEY};
  const params = {
    product_id: 37318,
    page: 1,
    count: 5
  }

  const getQuestions = () => { // fetching the list of questions about a particular product
    axios.get(url, {params,headers})
      .then((res) => {
        const arrayOfQuestions = res.data.results
        const sortedQuestions = sortQuestions(arrayOfQuestions) // sort question by helpfulness
        setQuestions(sortedQuestions)
        setFilteredQuestions(sortedQuestions)
      })
  }
  useEffect(getQuestions,[productId]) // Rerenders everytime the productId changes


  return (
    <div>
      <h2>Questions & Answers</h2>
      <QuestionList questions={filteredQuestions} product={product}/>
    </div>
  )
}

export default QA