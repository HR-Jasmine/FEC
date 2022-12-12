import React from 'react';

const MoreBtn = ({setQuestRendered, questCount, questRendered}) => {
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
      <button onClick={showMoreQuestion}> More Questions </button>
    </div>
  )
}
export default MoreBtn;