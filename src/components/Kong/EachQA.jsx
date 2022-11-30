import React from 'react';
import './styles/each.css'


const EachQA = () => {
  return (
    <div className="question-card">
      <div className="question-row">
        <h4>Q: Place holder for question</h4>
        <div className="user">
          <button> Helpful ?</button>
          <span className="yes">Yes (0)</span>
          <button>Add Answer</button>
        </div>
      </div>
      <h4>A: Place holder for answer</h4>
      <div className="user">
        <p>By: Placeholder for user</p>
        <button> Helpful ?</button>
        <span className="yes">Yes (0)</span>
        <button>Add Answer</button>
      </div>
    </div>
  )
}
export default EachQA;

