import React from 'react';
import {useState, useEffect, useRef} from 'react';
import axios from 'axios';

import Reviews from './Reviews/Reviews.jsx';
import Overview from './Overview/Overview.jsx';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
import QA from './Question/Main.jsx';


import './styles/style.css';
import './styles/app.css';

const App = (props) => {
  const [state, setState] = useState({
    productId: props.product.id,
    product: props.product
  });

  return (
      <div className="app">
        <Overview product={state.product} />
        {/* <RelatedProducts productId={state.productId} /> */}
        <QA />
        <Reviews productId={state.productId} />
      </div>
  )
}

export default App;

