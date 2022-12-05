import React from 'react';
import axios from 'axios';
import '../styles/Question/main.css';
import QuestionList from './QuestionList.jsx'
import Search from './Search.jsx'
import AddExpand from './AddExpand.jsx'
import Accordion from './Accordion.jsx'
import { useState, useEffect } from 'react';
import Form from './Form.jsx';

const QA = ({productId}) => {
  //State Management
  const [listOfQuestions, setListOfQuestions] = useState([])
  const [numOfQuestionsRendered, setNumOfQuestionsRendered] = useState(4)

  // API calls
  const headers = {'Authorization': process.env.API_KEY};

  const getQuestions = function() {
    const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions';
    const params = {
      product_id: 66642
    }
    axios.get(url, {params, headers})
      .then((response) => {
        // setListOfQuestions(response.data)
        console.log(response.data)
        console.log(response.data.results)
        setListOfQuestions(response.data.results.sort((a, b) => {
          return response.data.results[b].question_helpfulness - response.data.results[a].question_helpfulness
        }).slice(0, numOfQuestionsRendered))
      })
  };

  useEffect(getQuestions, [])



  return (
    <div className="main-container">
      <h2 className="section-name">Question & Answer</h2>
      <Form />
      <Search />
      <QuestionList listOfQuestions={listOfQuestions} />
      <AddExpand listOfQuestions={listOfQuestions} setNumOfQuestionsRendered={setNumOfQuestionsRendered}/>
    </div>
  )
}

export default QA;