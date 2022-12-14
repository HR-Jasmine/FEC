import React from 'react';
import { useState } from 'react'
import {format} from 'date-fns'
import axios from 'axios'

import AnswerModal from './Modals/AnswerModal.jsx'

import '../styles/Question/accordion.css';

const Answer = ({answer, question, qId, product, theme, themes}) => {

  const {body, date, answerer_name, helpfulness, photos} = answer
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
  }

  const openAnsModal = (e) => {
    e.preventDefault();
    setOpenAnswer(true);
  }

  return (
    <div className="answer" data-testid="answer">
      <div className="Apart1">
        <div className="answer-div">

          <h4>A: {body}</h4>
        </div>
        <div className="Apart2">
          <button onClick={updateCount} className="accord-btn" data-testid="ans-helpful">Helpful?</button>
          <span className="yes">Yes({helpCount})</span>
        </div>
      </div>
      <div className="Apart3">
        <div className="Apart5">

          <span>By: {answerer_name === "Seller" ? <span className="seller-span">Seller</span> : <span>{answerer_name}</span>}</span>
          <span>{newDate}</span>
        </div>
        <div className="Apart4">
          <button onClick={openAnsModal} className="accord-btn" > Add Answer</button>
          <button onClick={report} className="accord-btn"> Report </button>
        </div>
      </div>
      { pics.map((pic,i) => {
        return <img className="answer-img" key={i} src={pic.url}></img>
      }) }
      {openAnswer && <AnswerModal question={question} answer={answer} setOpenAnswer={setOpenAnswer} qId={qId} product={product} theme={theme} themes={themes}/>}
    </div>
  )
}
export default Answer;

