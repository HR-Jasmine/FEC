import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'

import Answer from './Answer.jsx'

import sortAnswers from './lib/sortAnswers.js'

import { FaAngleDoubleDown} from "react-icons/fa";
import { FaAngleDoubleUp} from "react-icons/fa";



import '../styles/Question/accordion.css';

const Accordion = ({question, product}) => {
  const {question_body, question_helpfulness, question_id} = question



  // State Variables //
  const [isActive, setIsActive] = useState(false) // Functionality for accordion
  const [answers, setAnswers] = useState([])
  const [ansRendered, setAnsRendered] = useState(2)


  //Global Variables
  const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${question_id}/answers`;
  const headers = {'Authorization': process.env.API_KEY};
  const params = {
    page: 1,
    count: 5
  }
  // Fetching answers for a particular Id //
  const getAnswers = () => {
    axios.get(url,{headers})
      .then((res) => {
        let answers = sortAnswers(res.data.results)
        setAnswers(answers.slice(0,ansRendered))
      })
  }
  useEffect(getAnswers,[])



  return (
    <div className="accordion">
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div>Q: {question_body}</div>
          <div>{question_id}</div>
          <div>{isActive ? <FaAngleDoubleUp className="bounce"/> : <FaAngleDoubleDown className="bounce"/>}</div>
        </div>
        {isActive &&
          <div className="accordion-content">{ answers.map((answer, i) => {
              return <Answer key={i} answer={answer} question={question}/>
          })}</div>}
      </div>
    </div>
  )
}

export default Accordion;

// <Answer />