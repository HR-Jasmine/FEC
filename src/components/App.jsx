import React from 'react';
import {useState} from 'react';
import Question from './Question/QuestionSection.jsx'

const App = () => {

  const [productId, setProductId] = useState('1');

  return (
    <div className="app">


      <Question />
    </div>
  )
}

export default App;

