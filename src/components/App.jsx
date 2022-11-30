import React from 'react';
require('dotenv').config();

const App = () => {
  return (
    <div className="app">
      Hello world!
      {process.env.TEST}
    </div>
  )
}

export default App;