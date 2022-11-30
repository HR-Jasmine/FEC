import React from 'react';
import './styles/EachQ.css'
const EachQ = () => {
  return (
    <div className="question-card">

      <div className="question-row">
        <div className='question-part'>
          <h4>Q: PlaceHolder</h4>
        </div>
        <div className="help-part">
          <p>Helpful? <span>Yes(PlaceHolder)</span> | <button>Add Answer</button></p>
        </div>
      </div>




      <div className="answer-row">
        <div className="A"> <p>A:</p> </div>
        <div className="answer-details">
          <p>Place holder for answer</p>
          <p> by User,Date | <button>Helpful?</button>Yes(placeholder) | <button>Report</button></p>
        </div>
      </div>

    </div>
  )
}

export default EachQ;