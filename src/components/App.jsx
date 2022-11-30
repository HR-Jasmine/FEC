import React from 'react';
import {useState} from 'react';
import QA from './Kong/Main.jsx'
import './Kong/styles/main.css'
const App = () => {

  const [productId, setProductId] = useState('1');

  return (
    <div className="app">
      <QA/>
    </div>
  )
}

export default App;

