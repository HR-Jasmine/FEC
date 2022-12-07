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

  if (!product) {
    return null;
  }

  //State Management
  const [listOfQuestions, setListOfQuestions] = useState([])
  const [numOfQuestionsRendered, setNumOfQuestionsRendered] = useState(1)

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
          return b.question_helpfulness - a.question_helpfulness
        })
        setListOfQuestions(sortedList.slice(0,numOfQuestionsRendered))
        // setListOfQuestions(response.data.results.sort((a, b) => {
        //   return response.data.results[b].question_helpfulness - response.data.results[a].question_helpfulness
        // }).slice(0, numOfQuestionsRendered))
      })
  };


  useEffect(getQuestions,[numOfQuestionsRendered])

  // const getAnswers = () => {
  //   const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/:question_id/answers';
  //   const params = {
  //     question_id: 66627
  //   }
  //   axios.get(url,{params,headers})
  //     .then((response) => {
  //       console.log(response)
  //     })
  // }

  // useEffect(getAnswers, [])




  return (
    <div className="main-container">
      <h2 className="section-name">Question & Answer</h2>
      <Search />
      <QuestionList listOfQuestions={listOfQuestions} product={product}/>
      <AddExpand  listOfQuestions={listOfQuestions} productId={productId} setNumOfQuestionsRendered={setNumOfQuestionsRendered} product={product}/>
    </div>
  )
}

export default QA;