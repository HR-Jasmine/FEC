import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

import Reviews from './Reviews/Reviews.jsx';
import Overview from './Overview/Overview.jsx';
import './styles/app.css';

const App = () => {
  const [productId, setProductId] = useState('1');

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
      <Overview />
      {/* <Reviews productId={productId} /> */}
    </div>
  )
}

export default App;
