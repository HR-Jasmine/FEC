import React from 'react';
import { useState } from 'react'
import {format} from 'date-fns'
import axios from 'axios'

import AnswerModal from './Modals/AnswerModal.jsx'

import '../styles/Question/accordion.css';

const Answer = ({answer, question, qId}) => {

  const {answer_id, body, date, answerer_name, helpfulness, photos} = answer
  const newDate = format(new Date (date), 'MMMM d, yyyy')

  // State variables //
  const [helpCount, setHelpCount] = useState(helpfulness)
  const [pics, setPics] = useState(photos)

  //toggling modal //
  const [openAnswer, setOpenAnswer] = useState(false)

  const updateCount = (e) => {
    e.preventDefault();
    setHelpCount((prev) => prev + 1);
    e.target.disabled = true;
  }

  const report = (e) => {
    e.target.innerText = "Reported"
    e.target.disabled = true;
    console.log(photos[0].url)
  }

  const openAnsModal = (e) => {
    e.preventDefault();
    setOpenAnswer(true);
  }

  return (
    <div>
      <h4>A: {body}</h4>
      <span>By: {answerer_name === "Seller" ? <span>Seller</span> : <span>{answerer_name}</span>}</span>
      <span>{newDate}</span>
      <button onClick={updateCount}>Helpful?</button>
      <span>Yes({helpCount})</span>
      <button onClick={openAnsModal}> Add Answer</button>
      <button onClick={report}> Report </button>
      { pics.map((pic,i) => {
        return <img className="answer-img" key={i} src={pic.url}></img>
      }) }
      {openAnswer && <AnswerModal question={question} answer={answer} setOpenAnswer={setOpenAnswer} qId={qId}/>}
    </div>
  )
}
export default Answer;