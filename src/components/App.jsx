import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

import Overview from './Overview/Overview.jsx';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
import Reviews from './Reviews/Reviews.jsx';
import QA from './Question/QA.jsx'

import './styles/app.css';
import './styles/style.css';

document.documentElement.style.backgroundColor = 'rgb(255 218 218)';
document.body.setAttribute('class', 't0b');


// 37319 //
const App = (props) => {
  const [state, setState] = useState({
    productId: 37319,
    product: props.product,
    rating: null,

    theme: 'b'
  });

  const changeId = (id) => {
    const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}`;
    const headers = {'Authorization': process.env.API_KEY};

    axios.get(url, {headers})
      .then(response => {
        setState({
          ...state,
          productId: response.data.id,
          product: response.data
        });
      });
  };

  var themes = {};

  for (var i = 0; i < 5; i++) {
    themes['t' + i] = {a: `t${i}a`, b: `t${i}b`};
  };

  useEffect(() => {}, [state.rating]);

  return (
    <div className={`app ${themes['t1'][state.theme]}`}>
    <Overview product={state.product} state={state} setState={setState} theme={state.theme} themes={themes} />
    <RelatedProducts productId={state.productId} changeId={changeId} theme={state.theme} themes={themes}/>
    <QA productId={state.productId} product={state.product} theme={state.theme} themes={themes} />
    <Reviews state={state} setState={setState} productId={state.productId} product={state.product} theme={state.theme} themes={themes} />
  </div>
  )
}

export default App;