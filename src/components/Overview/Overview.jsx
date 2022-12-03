import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

import OverviewInterface from './OverviewInterface.jsx';
import helper from './helpers.jsx';

import '../styles/style.css';
import '../styles/Overview/over.css';

const headers = {'Authorization': process.env.API_KEY};

const Overview = (props) => {
  const [state, setState] = useState({
    product: props.product,
    styles: null,
    activeStyle: null
  })

  var getStyles = function() {
    helper.getProductStyles(state.product.id, state, setState);
  };

  useEffect(getStyles, [state.product]);

  return (
      <div className="overview v">
        <div className="navbar h">
          <h1>jasmine</h1>
          <input type="text" placeholder="Search for a product..."></input>
        </div>
        <div className="announce v">
          <div>THIS IS THE ANNOUNCEMENT BAR WHERE ANNOUNCEMENTS WILL GO! <small>...like sales and such.</small></div>
        </div>
        <div className="info h">
          <div className="gallery h"><img className="card noPad" src={helper.getImageURL(state)}></img></div>
          <OverviewInterface state={state} setState={setState} />
        </div>
        <br/>
        <div className="slogan">
          <h3>{state.product.slogan}</h3>
          <br/>
          {state.product.description}
        </div>
        <br/>
      </div>
  )
}

export default Overview;