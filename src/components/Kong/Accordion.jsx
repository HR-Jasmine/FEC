import React from 'react';
import './styles/accordion.css'
import { useState } from 'react';

const Accordion = ({question}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion">
      <div className="accordion-item">
        <div className="accordion-title" >
          <div className="question-row">
            <h4>Q: TEST</h4>
            <div class="arrow bounce" onClick={() => setIsActive(!isActive)}></div>
          </div>
        </div>
        {isActive &&
          <div className="answer-container accordion-content">
            <h4 className="answer">A: Placeholder</h4>
            <div className="user">
              <p>By: new data</p>
              <button> Helpful ?</button>
              <span className="yes">Yes (0)</span>
              <button>Add Answer</button>
              <button>Report</button>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Accordion;