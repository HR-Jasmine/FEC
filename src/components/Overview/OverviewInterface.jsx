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
  const [activeStyle, setStyle] = useState(null);

  var price = product.default_price;

  var renderStyles = function() {
    let rendered = [];

    if (styles) {
      styles.map(function(style) {
        rendered.push(
          <div key={style.style_id} className="productStyle hover">
            <img className="styleThumb" src={style.photos[0].thumbnail_url} />
          </div>)
      })

      if (!activeStyle) {
        setStyle(styles[0]);
        price = styles[0].original_price;
      }
    }

    return rendered;
  }

  return (
    <div className="interface card v">
      <div id="interfaceHead">
        <Stars rating={product.rating}/>
        <h3>{product.category}</h3>
        <h2>{product.name}</h2>
        <b>{`$${price}`}</b>
      </div>
      <div id="styleName"><b>STYLE - </b>{function() {if (styles) {return styles[0].name} else {return 'STYLE'}}()}</div>
      <div className="v" id="productStyles">
        {renderStyles()}
      </div>
      <div id="select-container">
        <div className="selectors h">
          <select className="bigSelect" id="selectSize"></select>
          <select className="bigSelect" id="selectQuantity"></select>
        </div>
        <div className="productButtons h">
          <button className="bigButton" id="addToCart">Add to Cart</button>
          <button className="bigButton" id="addToFav"><div className='star'>★</div></button>
        </div>
      </div>
    </div>
  )
}

export default OverviewInterface;