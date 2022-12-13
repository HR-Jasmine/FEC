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
  const [qId, setQid] = useState(question_id)
  const [questionHelpfulness, setQuestionHelpfulness] = useState(question_helpfulness)



  // State Variables //
  const [isActive, setIsActive] = useState(false) // Functionality for accordion
  const [answers, setAnswers] = useState([])
  const [numOfAnswers, setNumOfAnswers] = useState(0)
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
        console.log(res.data.results)
        let answers = sortAnswers(res.data.results)
        setNumOfAnswers(answers.length)
        setAnswers(answers.slice(0,ansRendered))
      })
  }
  useEffect(getAnswers,[ansRendered])


  // Functions //
  const helpfulIncrement = (e) => { // Increments the helpfulness counter //
    e.preventDefault();
    setQuestionHelpfulness((prev) => { return prev + 1})
    e.target.disabled = true;
  }

  const changeToCollapse = (e) => {
    e.preventDefault();
    if(e.target.innerText === "See more") {
      e.target.innerText = "Collapse"
      setAnsRendered((prev) => prev + 2)
    } else {
      e.target.innerText = "See more"
      setAnsRendered(2)
    }
  }

  return (
    <div className="accordion" data-testid="accord">
      <div className="accordion-item" data-testid="accord-title">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)} data-testid="accord-main">
          <div className="Qpart1">
            <h3 data-testid="question-title">Q: {question_body}</h3>
            <div>{isActive ? <FaAngleDoubleUp className="bounce" /> : <FaAngleDoubleDown className="bounce" />}</div>
          </div>
          <div className="Qpart2">
            <button onClick={helpfulIncrement} className="accord-btn">Helpful?</button>
            <span className="yes">Yes({questionHelpfulness})</span>
          </div>
        </div>
        {isActive &&
          <div className="accordion-content" data-testid='accord-content'>{ answers.map((answer, i) => {
              return <Answer key={i} answer={answer} question={question} product={product}/>
          })}
          {
            numOfAnswers > 2 ? <button className="see-more-btn" onClick={changeToCollapse}> See more </button> : <span></span>
          }
          </div>}
      </div>
    </div>
  )
}

export default Accordion;