import React from 'react';
import {useState, useEffect, createContext} from 'react';

import {BsCart} from 'react-icons/bs';

import Gallery from './Gallery.jsx';
import OverviewInterface from './OverviewInterface.jsx';
import helper from './helpers.jsx';

import '../styles/style.css';
import '../styles/Overview/over.css';

const headers = {'Authorization': process.env.API_KEY};

const Overview = (props) => {
  const [state, setState] = useState({
    product: props.product,
    styles: null,
    activeStyle: null,
    sku: {
      quantity: 0,
      size: 'Select Size'
    },
    selectedPhoto: 0,
    theme: 'b',

    cart: JSON.parse(document.cookie.replace('cart=', ''))
  });

  var themes = {};

  for (var i = 0; i < 5; i++) {
    themes['t' + i] = {a: `t${i}a`, b: `t${i}b`};
  }

  var toggleTheme = function() {
    if (state.theme === 'a') {
      setState({
        ...state,
        theme: 'b'
      });
    } else {
      setState({
        ...state,
        theme: 'a'
      });
    }
  }

  var getStyles = function() {
    helper.getProductStyles(state.product.id, state, setState);
  };

  useEffect(getStyles, [state.product]);

  if (!state.styles) {
    return;
  }

  return (
      <div className={`overview v ${themes['t1'][state.theme]}`}>
        <div className={`themeToggle ${themes['t4'][state.theme]}`} onClick={toggleTheme}></div>
        {JSON.stringify(state.themes)}
        <div className={`navbar h ${themes['t4'][state.theme]}`}>
          <h1>jasmine</h1>
          <div className="navright h">
            <input className="overInput" type="text" placeholder="Search for a product..."></input>
            <BsCart className="cart" size={48}/>
            <div className="cartNum">{state.cart.length}</div>
          </div>
        </div>
        <div className={`announce v ${themes['t3'][state.theme]}`}>
          <div>THIS IS THE ANNOUNCEMENT BAR WHERE ANNOUNCEMENTS WILL GO! <small>...like sales and such.</small></div>
        </div>
        <div className="info h">
          <Gallery state={state} setState={setState} />
          <OverviewInterface state={state} setState={setState} />
        </div>
        <br/>
        <div className="slogan">
          <h3>{state.product.slogan}</h3>
          <br/>
          {state.product.description}
        </div>
        <br/>
        <div className={'shareContainer ' + themes['t1'][state.theme]}>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
              target="_blank"
              className={'shareButton card hover ' + themes['t3'][state.theme]}>FaceBook</a>
          <a href={`https://twitter.com/share?ref_src=${window.location.href}`}
              target="_blank"
              className={'shareButton card hover ' + themes['t3'][state.theme]}>Twitter</a>
          <a href={`http://pinterest.com/pin/create/link/?url=${window.location.href}`}
              target="_blank"
              className={'shareButton card hover ' + themes['t3'][state.theme]}>Pinterest</a>
        </div>
      </div>

  )
}

export default Overview;