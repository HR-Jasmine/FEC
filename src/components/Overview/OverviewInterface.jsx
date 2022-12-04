import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

import Stars from '../Stars.jsx';

import '../styles/style.css';
import '../styles/Overview/over.css';
import '../styles/Overview/interface.css';

const OverviewInterface = (props) => {
  const [state, setState] = [props.state, props.setState];
  const product = state.product;
  const styles = state.styles;
  const activeStyle = state.activeStyle;
  const sku = state.sku;

  var price = product.default_price;

  if (activeStyle) {
    price = activeStyle.original_price;
  }

  var renderStyles = function() {
    let rendered = [];

    if (styles) {
      for (var i = 0; i < styles.length; i++) {
        var style = styles[i];
        var styleClass = function() {
          var active = '';
          if (activeStyle.style_id === style.style_id) {
            active = ' activeStyle';
          }
          return "productStyle" + active;
        }();

        rendered.push(
          <img
            key={style.style_id}
            id={i + '_' + style.style_id}
            className={styleClass}
            src={style.photos[0].thumbnail_url}
            onClick={styleClick} />
        )
      }
    }

    return rendered;
  }

  var optionSet = function(option) {
    var options = [];

    if (activeStyle) {
      if (option === 'quantity') {
        if (sku.size === 'Select Size') {
          options.push(<option key="-" value="-">-</option>);
        } else {
          for (var i = 1; i <= sku.quantity && i <= 15; i++) {
            options.push(<option key={"q" + i} value={i}>{i}</option>)
          }
        }
      } else {
        if (sku.size === 'Select Size') {
          options.push(<option key='selectSize' value="Select Size">Select Size</option>)
        }

        for (var i in activeStyle.skus) {
          var entry = activeStyle.skus[i];

          options.push(<option key={i} value={entry[option]}>{entry[option]}</option>)
        }
      }
    }

    return options;
  }

  var sizeChange = function(e) {
    if (activeStyle) {
      var size = e.target.value;

      for (var i in activeStyle['skus']) {
        var sku = activeStyle['skus'][i];

        if (sku.size === size) {
          setState({
            ...state,
            sku: sku
          });
        }
      }
    }
  }

  var styleClick = function(e) {
    var index = e.target.id.slice(0, e.target.id.indexOf('_'))

    setState({
      ...state,
      activeStyle: styles[index],
      selectedPhoto: 0
    })
  }

  return (
    <div className="interface card v">
      <div id="interfaceHead">
        <Stars rating={product.rating}/>
        <h3>{product.category}</h3>
        <h2>{product.name}</h2>
        <b>{`$${price}`}</b>
      </div>
      <div id="styleName"><b>STYLE - </b>{function() {if (activeStyle) {return activeStyle.name} else {return 'STYLE'}}()}</div>
      <div className="v" id="productStyles">
        {renderStyles()}
      </div>
      <div id="select-container">
        <div className="selectors h">
          <select className="bigSelect" id="selectSize" value={sku.size} onChange={sizeChange}>
            {optionSet('size')}
          </select>
          <select className="bigSelect" id="selectQuantity">
            {optionSet('quantity')}
          </select>
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