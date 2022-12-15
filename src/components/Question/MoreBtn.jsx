import React from 'react';
import '../styles/Question/addexpand.css'


const MoreBtn = ({setQuestRendered, questCount, questRendered, theme, themes}) => {
  if(questRendered >= questCount) {
    return null;
  }
  const showMoreQuestion = (e) => {
    e.preventDefault();

    setQuestRendered((prev) => {
      if(questRendered >= questCount) {
        e.target.disabled = true;
      }
      return prev + 2
    })
  }

  return (
    <div>
      <button onClick={showMoreQuestion} className={'card smallButton hover ' + themes['t2'][theme]} data-testid="more-btn"> More Questions </button>
    </div>
  )
}
export default MoreBtn;