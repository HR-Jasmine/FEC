import React from 'react';
import axios from 'axios';
import '../styles/Question/main.css';
import QuestionList from './QuestionList.jsx'
import Search from './Search.jsx'
import AddExpand from './AddExpand.jsx'
import Accordion from './Accordion.jsx'
import { useState } from 'react';

const QA = () => {

  const test = [
    {
      "product_id": "5",
      "results": [{
            "question_id": 37,
            "question_body": "Why is this product cheaper here than other sites?",
            "question_date": "2018-10-18T00:00:00.000Z",
            "asker_name": "williamsmith",
            "question_helpfulness": 4,
            "reported": false,
            "answers": {
              68: {
                "id": 68,
                "body": "We are selling it here without any markup from the middleman!",
                "date": "2018-08-18T00:00:00.000Z",
                "answerer_name": "Seller",
                "helpfulness": 4,
                "photos": []
                // ...
              }
            }
          },
          {
            "question_id": 38,
            "question_body": "How long does it last?",
            "question_date": "2019-06-28T00:00:00.000Z",
            "asker_name": "funnygirl",
            "question_helpfulness": 2,
            "reported": false,
            "answers": {
              70: {
                "id": 70,
                "body": "Some of the seams started splitting the first time I wore it!",
                "date": "2019-11-28T00:00:00.000Z",
                "answerer_name": "sillyguy",
                "helpfulness": 6,
                "photos": [],
              },
              78: {
                "id": 78,
                "body": "9 lives",
                "date": "2019-11-12T00:00:00.000Z",
                "answerer_name": "iluvdogz",
                "helpfulness": 31,
                "photos": [],
              }
            }
          },
      ]
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