import React from 'react';
import {useState} from 'react';
import OverviewInterface from './OverviewInterface.jsx';

import '../styles/Overview/over.css';
import '../styles/style.css';

const Overview = (props) => {
  var product = props.product;

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
        <div className="gallery card v">IMAGE GALLERY</div>
        <OverviewInterface product={product}/>
      </div>
      <br/>
      <div className="slogan">
        <h3>{product.slogan}</h3>
        <br/>
        {product.description}
      </div>
      <br/>
    </div>
  )
}

export default Overview;