import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

import Overview from './Overview/Overview.jsx';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
import QA from './Question/Main.jsx';
import Reviews from './Reviews/Reviews.jsx';

import './styles/style.css';
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
<<<<<<< HEAD
        {/* <RelatedProducts productId={state.productId} /> */}
        {/* <QA productId={state.productId} product={state.product}/> */}
        <Reviews productId={state.productId} />
=======
        {/* <RelatedProducts productId={state.productId} />
        <QA productId={state.productId} product={state.product}/>
        <Reviews productId={state.productId} /> */}
>>>>>>> 244bdeaf14ec3d30075a80fcbe4e9732f259a157
      </div>
  )
}

export default App;