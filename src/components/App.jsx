import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

import Overview from './Overview/Overview.jsx';
// import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
// import QA from './Question/Main.jsx';
// import Reviews from './Reviews/Reviews.jsx';

import './styles/style.css';
import './styles/style.css';
import './styles/app.css';

const App = (props) => {
  const [state, setState] = useState({
    productId: props.product.id,
    product: props.product
  });

  // const changeId = (id) => {
  //   const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}`;
  //   const headers = {'Authorization': process.env.API_KEY};

  //   axios.get(url, {headers})
  //     .then(response => {
  //       setState({
  //         productId: response.data.id,
  //         product: response.data
  //       });
  //     });
  // }

  return (
      <div className="app">
        <Overview product={state.product} />
        {/* <RelatedProducts productId={state.productId} changeId={changeId}/>
        <QA productId={state.productId} product={state.product}/> */}
        {/* <Reviews productId={state.productId} product={state.product} /> */}
      </div>
  )
}

export default App;