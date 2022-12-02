import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

import Stars from '../Stars.jsx';

import '../styles/style.css';
import '../styles/Overview/over.css';
import '../styles/Overview/interface.css';

const OverviewInterface = (props) => {
  const product = props.product;
  const styles = props.styles;

  const renderStyles = function() {
    let rendered = [];

    if (styles) {
      styles.map(function(style) {
        rendered.push(<div key={style.style_id} className="productStyle">{style.name}</div>)
      })
    }
    return rendered;
  }

  return (
    <div className="interface card v">
      <div id="interfaceHead">
        <Stars rating={product.rating}/>
        <h3>{product.category}</h3>
        <h2>{product.name}</h2>
        <b>{`$${product.default_price}`}</b>
      </div>
      <div id="styles">
        <div></div>
        {renderStyles()}
      </div>
      <div id="select-container">
        <div className="selectors h">
          <select id="selectSize"></select>
          <select id="selectQuantity"></select>
        </div>
        <div className="productButtons h">
          <button id="addToCart">Add to Cart</button>
          <button id="addToFav"><div className='star'>★</div></button>
        </div>
      </div>
    </div>
  )
}

export default OverviewInterface;