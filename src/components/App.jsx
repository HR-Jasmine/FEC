import React from 'react';
import {useState, useEffect} from 'react';
import Reviews from './Reviews/Reviews.jsx'
import axios from 'axios';
import QA from './Kong/Main.jsx'

const App = () => {

  const [productId, setProductId] = useState('');

  useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/',
      {
        headers: {
          'Authorization': process.env.API_KEY
        }
    })
      .then(response => {
        setProductId(response.data[0].id);
      })
  }, [])

  return (
    <div className="app">
      <QA/>
    </div>
  )
}

export default App;

