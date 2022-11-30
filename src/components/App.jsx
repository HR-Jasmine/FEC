import React from 'react';
import {useState} from 'react';

const App = () => {

  const [productId, setProductId] = useState('1');

  return (
    <div className="app">
      Is it here? {process.env.TEST}
    </div>
  )
}

export default App;