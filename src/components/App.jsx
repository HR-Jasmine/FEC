import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

import Reviews from './Reviews/Reviews.jsx';
import Overview from './Overview/Overview.jsx';
import './styles/app.css';

const App = () => {
  const [state, setState] = useState({
    productId: '1',
    product: null
  });

  useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/',
      {
        headers: {
          'Authorization': process.env.API_KEY
        }
    })
      .then(response => {
        setState({productId: response.data[0].id, product: response.data[0]});
      })
  }, [])

  return (
    <div className="app">
      <Overview product={state.product} />
      <Reviews  productId={state.productId} />
    </div>
  )
}

export default App;
