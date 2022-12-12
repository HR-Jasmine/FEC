import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

import Overview from './Overview/Overview.jsx';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
import Reviews from './Reviews/Reviews.jsx';
import QA from './Question/QA.jsx'

import './styles/app.css';
import './styles/style.css';

document.documentElement.style.backgroundColor = '#241734';
document.body.setAttribute('class', 't0a');

const App = (props) => {
  const [state, setState] = useState({
    productId: props.product.id,
    product: props.product,

    theme: 'a'
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

  return (
    <div className={`app ${themes['t1'][state.theme]}`}>
    <Overview product={state.product} state={state} setState={setState} theme={state.theme} themes={themes} />
    {/* <RelatedProducts productId={state.productId} changeId={changeId} theme={state.theme} themes={themes}/> */}
    {/* <QA productId={state.productId} product={state.product}/> */}
    <Reviews productId={state.productId} product={state.product} theme={state.theme} themes={themes}/>
  </div>
  )
}

export default App;