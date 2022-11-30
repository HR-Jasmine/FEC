import React from 'react';
import QuestionSection from './Question/QuestionSection.jsx';


const App = () => {
  return (
    <div className="app">
      Hello world!
      {
        process.env.TEST
      }
      <QuestionSection />
    </div>
  )
}

export default App;

