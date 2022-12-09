import React from 'react';
import axios from 'axios';
import '../styles/Question/main.css';
import QuestionList from './QuestionList.jsx'
import Search from './Search.jsx'
import AddExpand from './AddExpand.jsx'
import Accordion from './Accordion.jsx'
import { useState, useEffect } from 'react';
import AnswerForm from './AnswerForm.jsx';
import QuestionForm from './QuestionForm.jsx'

const QA = ({productId, product}) => {
  //State Management
  const [listOfQuestions, setListOfQuestions] = useState([])
  const [filteredQuestions, setFilteredQuestions] = useState([])
  const [numOfQuestionsRendered, setNumOfQuestionsRendered] = useState(4)
  const [originalLength, setOriginalLength] = useState(0)

  // API calls
  const headers = {'Authorization': process.env.API_KEY};

  const getQuestions = () => {
    const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions';
    const params = {
      product_id: productId,
      page: 1,
      count: 5
    }
    axios.get(url, {params, headers})
      .then((response) => {
        console.log(typeof response.data.results[0].question_helpfulness)
        const sortedList = response.data.results.sort((a, b) => {
          console.log(response.data.results)
          console.log(productId)
          return b.question_helpfulness - a.question_helpfulness
        })
        setOriginalLength(sortedList.length)
        setListOfQuestions(sortedList.slice(0,numOfQuestionsRendered))
        setFilteredQuestions(sortedList.slice(0,numOfQuestionsRendered))
        // setListOfQuestions(response.data.results.sort((a, b) => {
        //   return response.data.results[b].question_helpfulness - response.data.results[a].question_helpfulness
        // }).slice(0, numOfQuestionsRendered))
      })
  };


  useEffect(getQuestions,[numOfQuestionsRendered, productId])

  // const handleSearchChange = (value) => {
  //   console.log(value.length)
  //   if(value.length >= 3){
  //     let filteredQuestionsList = listOfQuestions.filter((question) => {
  //       return question.question_body.toLowerCase().includes(value.toLowerCase())
  //     })

  //    return setFilteredQuestions(filteredQuestionsList)
  //   }

  //   return setFilteredQuestions(listOfQuestions)
  // }

  return (
    <div className="main-container">
      <h2 className="section-name">Question & Answer</h2>
      <Search filteredQuestions={filteredQuestions} setFilteredQuestions={setFilteredQuestions} listOfQuestions={listOfQuestions}/>
      <QuestionList listOfQuestions={filteredQuestions} product={product}/>
      <AddExpand  listOfQuestions={listOfQuestions} productId={productId} setNumOfQuestionsRendered={setNumOfQuestionsRendered} product={product} numOfQuestionsRendered={numOfQuestionsRendered} originalLength={originalLength} productId={productId}/>
    </div>
  )
}

export default QA;