import React from 'react';
import {useState, useEffect} from 'react';
import Reviews from './Reviews/Reviews.jsx'
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
import axios from 'axios';

// import Reviews from './Reviews/Reviews.jsx';
import Overview from './Overview/Overview.jsx';
import './styles/app.css';

var headers = {'Authorization': process.env.API_KEY};

const App = () => {
  const [state, setState] = useState({
    productId: '1',
    product: null
  });

  var getProducts = function() {
    var url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/';

    axios.get(url, {headers})
      .then(response => {
        setState({
          productId: response.data[0].id,
          product: response.data[0]
        });
      })
  };

  useEffect(getProducts, [])

  return (
    <div className="app">
      <Reviews productId={state.productId} />
      <RelatedProducts productId={state.productId} />
    </div>
  )
}

export default App;
