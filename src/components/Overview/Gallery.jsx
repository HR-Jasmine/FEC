import React from 'react';
import {useState, useEffect} from 'react';
import helper from './helpers.jsx';

import '../styles/style.css';
import '../styles/Overview/gallery.css';

const Gallery = (props) => {
  const [state, setState] = [props.state, props.setState];

  var renderThumbs = function() {
    let thumbs = [];

    if (state.activeStyle) {
      var photos = state.activeStyle.photos;
      for (var i = 0; i < photos.length; i++) {
        var photo = photos[i];
        var thumbClass = function() {
          var selected = '';
          if (i === state.selectedPhoto) {
            selected = ' selected';
          }
          return "imageThumb noPad hover" + selected;
        }();

        thumbs.push(
          <img
            key={"img" + i}
            index={i}
            className={thumbClass}
            src={photo.thumbnail_url}
            onClick={thumbSet} />
        )
      }
    }

    return thumbs;
  };

  var thumbSet = function(e) {
    var index = Number(e.target.getAttribute('index'));

    setState({
      ...state,
      selectedPhoto: index
    })

  };

  return (
    <div className="galleryContainer h">
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