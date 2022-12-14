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
    theme: props.theme,

    cart: function() {
      if (document.cookie) {
        return JSON.parse(document.cookie.replace('cart=', ''));
      } else {
        return [];
      }
    }()
  });

  var theme = props.theme;
  var themes = props.themes;

  var toggleTheme = function() {
    if (theme === 'a') {
      document.documentElement.style.backgroundColor = 'white';
      document.body.setAttribute('class', 't0b');
      props.setState({
        ...props.state,
        theme: 'b'
      });
    } else {
      document.documentElement.style.backgroundColor = '#241734';
      document.body.setAttribute('class', 't0a');
      props.setState({
        ...props.state,
        theme: 'a'
      });
    }
  }

  var getStyles = function() {
    helper.getProductStyles(props.product.id, state, setState);
  };

  useEffect(getStyles, [props.product]);

  useEffect(function() {
    setState(props.state);
  }, [props.product]);

  if (!state.styles) {
    return;
  }

  return (
      <div className={`overview v ${themes['t1'][theme]}`}>
        <span className={`themeToggle ${themes['t4'][theme]}`} onClick={toggleTheme}></span>
        <div className={`navbar h ${themes['t4'][theme]}`}>
          <h1>jasmine</h1>
          <div className="navright h">
            <input className="overInput" type="text" placeholder="Search for a product..."></input>
            <BsCart className="cart" size={48}/>
            <div className="cartNum">{state.cart.length}</div>
          </div>
        </div>
        <div className={`announce v ${themes['t3'][theme]}`}>
          <div>THIS IS THE ANNOUNCEMENT BAR WHERE ANNOUNCEMENTS WILL GO! <small>...like sales and such.</small></div>
        </div>
        <div className="info h">
          <Gallery state={state} setState={setState} theme={theme} themes={themes} />
          <OverviewInterface product={props.product} state={state} setState={setState} theme={theme} themes={themes} />
        </div>
        <br/>
        <div className="slogan">
          <h3>{props.product.slogan}</h3>
          <br/>
          {props.product.description}
        </div>
        <br/>
        <div className={'shareContainer ' + themes['t1'][theme]}>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
              target="_blank"
              className={'shareButton card hover ' + themes['t3'][theme]}>FaceBook</a>
          <a href={`https://twitter.com/share?ref_src=${window.location.href}`}
              target="_blank"
              className={'shareButton card hover ' + themes['t3'][theme]}>Twitter</a>
          <a href={`http://pinterest.com/pin/create/link/?url=${window.location.href}`}
              target="_blank"
              className={'shareButton card hover ' + themes['t3'][theme]}>Pinterest</a>
        </div>
      </div>

  )
}

export default Overview;