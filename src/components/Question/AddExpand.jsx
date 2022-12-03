import React from 'react';
import '../styles/Question/addexpand.css';


const AddExpand = ({setNumOfQuestionsRendered}) => {

  const moreQuestions = (e) => {
    e.preventDefault();
    setNumOfQuestionsRendered((prev) => prev + 2)
  }

  return (
    <div className="button-container">
      <button className="more" onClick={moreQuestions}> More Questions</button>
      <button className="add"> Add a question </button>
    </div>
  )
}
export default AddExpand;