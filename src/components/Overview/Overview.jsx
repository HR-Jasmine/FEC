import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import OverviewInterface from './OverviewInterface.jsx';

import '../styles/style.css';
import '../styles/Overview/over.css';

const headers = {'Authorization': process.env.API_KEY};

const Overview = (props) => {
  const [state, setState] = useState({
    product: props.product,
    styles: null
  })

  var getProductStyles = function() {
    if (!state.product.id) {
      return;
    }

    var url = process.env.URL + `/products/${state.product.id}/styles`;

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
  }

  useEffect(getProductStyles, []);

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
        <div className="gallery h"><img className="card noPad" src={getImageURL()}></img></div>
        <OverviewInterface product={state.product} styles={state.styles}/>
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