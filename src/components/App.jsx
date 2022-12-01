import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import QA from './Kong/Main.jsx'
import Reviews from './Reviews/Reviews.jsx';
import Overview from './Overview/Overview.jsx';
import './styles/app.css';

var headers = {'Authorization': process.env.API_KEY};

const App = () => {
  const [state, setState] = useState({
    productId: '1',
    product: {
      id: null,
      category: 'Category',
      name: 'Name',
      slogan: 'This is a slogan. You can tell because it has many words. Enjoy!',
      description: 'This is a description. You can tell because it has even more words than the slogan.',
      default_price: '3.50'
    }
  });

  var getProducts = function() {
    var url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/';

    axios.get(url, {headers})
      .then(response => {
        setState({
          productId: response.data[0].id,
          product: response.data[0]
        });
      });
  };

  useEffect(getProducts, []);

  return (
    <div className="app">

      <Overview product={state.product} />
      <QA/>
      <Reviews  productId={state.productId} />
    </div>
  )
}

export default App;

