import React from 'react';
import {useState} from 'react';

import Stars from '../Stars.jsx';
import '../styles/Overview/over.css';
import '../styles/Overview/interface.css';
import '../styles/style.css';

const OverviewInterface = (props) => {
  var product = props.product;

  return (
    <div className="interface card v">
      <div id="interfaceHead">
        <Stars rating={'3'}/>
        <h3>{` ` + product.category}</h3>
        <h2>{product.name}</h2>
        <b>{`$${product.default_price}`}</b>
      </div>
      <div className="styles">Styles Placeholder</div>
      <div className="selectors h">
        <select id="selectSize"></select>
        <select id="selectQuantity"></select>
      </div>
      <div className="productButtons h">
        <button id="addToCart">Add to Cart</button>
        <button id="addToFav"><div className='star'>★</div></button>
      </div>
    </div>
  )
}

export default OverviewInterface;