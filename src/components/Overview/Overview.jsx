import React from 'react';
import {useState, useEffect, createContext} from 'react';

import Gallery from './Gallery.jsx';
import OverviewInterface from './OverviewInterface.jsx';
import helper from './helpers.jsx';

import '../styles/style.css';
import '../styles/Overview/over.css';

const headers = {'Authorization': process.env.API_KEY};

const Overview = (props) => {

  if (!props.product) {
    return null;
  }

  const [state, setState] = useState({
    product: props.product,
    styles: null,
    activeStyle: null,
    sku: {
      quantity: 0,
      size: 'Select Size'
    },
    selectedPhoto: 0,
    theme: 'b'
  });

  var themes = {};

<<<<<<< HEAD
    var url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${state.product.id}/styles`;

    axios.get(url, {headers})
      .then(response => {
        console.log(response.data.results)
        setState({
          ...state,
          styles: response.data.results
        })
      });
  };

  var getImageURL = function() {
    if (state.styles) {
      return state.styles[0].photos[0].url;
    }

    return "https://www.petalrepublic.com/wp-content/uploads/2021/04/Ultimate-Guide-to-Jasmine-Flower-Meaning-Types-and-Uses.jpeg";
=======
  for (var i = 0; i < 5; i++) {
    themes['t' + i] = {a: `t${i}a`, b: `t${i}b`};
>>>>>>> old-state
  }

  var getStyles = function() {
    helper.getProductStyles(state.product.id, state, setState);
  };

  useEffect(getStyles, [state.product]);

  return (
<<<<<<< HEAD
    <div className="overview v">
      <div className="navbar h">
        <h1>jasmine</h1>
        <input type="text" placeholder="Search for a product..."></input>
      </div>
      <div className="announce v">
        <div>THIS IS THE ANNOUNCEMENT BAR WHERE ANNOUNCEMENTS WILL GO! <small>...like sales and such.</small></div>
      </div>
      <div className="info h">
        <div className="gallery h"><img className="galleryImg card noPad" src={getImageURL()}></img></div>
        <OverviewInterface product={state.product} styles={state.styles}/>
      </div>
      <br/>
      <div className="slogan">
        <h3>{state.product.slogan}</h3>
=======
      <div className={`overview v ${themes['t1'][state.theme]}`}>
        {JSON.stringify(state.themes)}
        <div className={`navbar h ${themes['t4'][state.theme]}`}>
          <h1>jasmine</h1>
          <input className="overInput" type="text" placeholder="Search for a product..."></input>
        </div>
        <div className={`announce v ${themes['t3'][state.theme]}`}>
          <div>THIS IS THE ANNOUNCEMENT BAR WHERE ANNOUNCEMENTS WILL GO! <small>...like sales and such.</small></div>
        </div>
        <div className="info h">
          <Gallery state={state} setState={setState} themes={themes} />
          <OverviewInterface state={state} setState={setState} themes={themes} />
        </div>
        <br/>
        <div className="slogan">
          <h3>{state.product.slogan}</h3>
          <br/>
          {state.product.description}
        </div>
>>>>>>> old-state
        <br/>
      </div>

  )
}

export default Overview;