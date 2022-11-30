import React from 'react';
import {useState} from 'react';
import './styles/app.css';

import Overview from './Overview/Overview.jsx';

const App = () => {
  const [productId, setProductId] = useState('1');

  return (
    <div className="app">
      <Overview />
      {/* Your components here. */}
    </div>
  )
}

export default App;