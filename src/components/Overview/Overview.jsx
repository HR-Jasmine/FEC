import React from 'react';
import {useState} from 'react';
import OverviewInfo from './OverviewInfo.jsx';

import '../styles/Overview/over.css';
import '../styles/style.css';

const Overview = (props) => {
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
        <div className="gallery v">IMAGE GALLERY</div>
        <OverviewInfo product={props.product}/>
      </div>
    </div>
  )
}

export default Overview;