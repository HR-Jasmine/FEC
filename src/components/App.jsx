import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import QA from './Question/Main.jsx'
import Reviews from './Reviews/Reviews.jsx';
import Overview from './Overview/Overview.jsx';
import './styles/app.css';

const App = (props) => {
  const [state, setState] = useState({
    productId: props.product.id,
    product: props.product
  });

  return (
    <div className="app">
      <Overview product={state.product} />
      <QA />
      <Reviews  productId={state.productId} />

      <div id="footer" />
    </div>
  )
}

export default App;

