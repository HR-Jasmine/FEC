import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
<<<<<<< HEAD
import QA from './Question/Main.jsx'
import Reviews from './Reviews/Reviews.jsx';
=======

>>>>>>> dev
import Overview from './Overview/Overview.jsx';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
import QA from './Question/Main.jsx';
import Reviews from './Reviews/Reviews.jsx';

import './styles/app.css';

const App = (props) => {
  const [state, setState] = useState({
    productId: props.product.id,
    product: props.product
  });

  return (
    <div className="app">
<<<<<<< HEAD
      <Overview product={state.product} />
      <QA />
      <Reviews  productId={state.productId} />

      <div id="footer" />
=======
      <Overview props={state.product} />
      <RelatedProducts productId={state.productId} />
      <QA/>
      <Reviews productId={state.productId} />
>>>>>>> dev
    </div>
  )
}

export default App;

