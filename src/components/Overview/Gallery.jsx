import React from 'react';
import {useState, useEffect, useContext} from 'react';
import helper from './helpers.jsx';

import '../styles/style.css';
import '../styles/Overview/gallery.css';

const Gallery = (props) => {
  const [state, setState] = useContext(OverviewContext);

  var renderThumbs = function() {
    let thumbs = [];

    if (state.activeStyle) {
      var photos = state.activeStyle.photos;
      for (var i = 0; i < photos.length; i++) {
        var photo = photos[i];

        thumbs.push(
          <img
            key={"img" + i}
            index={i}
            className="imageThumb noPad hover"
            src={photo.thumbnail_url}
            />
        )
      }
    }

    return thumbs;
  };

  // var thumbSet = function(e) {
  //   var index = Number(e.target.getAttribute('index'));

  //   setState({
  //     ...state,
  //     selectedPhoto: 1000
  //   })

  // };

  return (
    <div className="galleryContainer h">
      {state.selectedPhoto}
      <div className="gallerySelect v">
        {renderThumbs()}
      </div>
      <div className="gallery h">
        <img className="card noPad" src={helper.getImageURL(state)}></img>
      </div>
    </div>
  )
}

export default Gallery;