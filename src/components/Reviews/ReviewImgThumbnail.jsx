import React from 'react';
import {useState} from 'react';
import ReviewImgModal from './ReviewImgModal.jsx';

const ReviewImgThumbnail = ({photo}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <span><img className="review-image" src={photo.url} onClick={() => {setShowModal(true)}}></img>
    <ReviewImgModal show={showModal} img={photo.url} onClose={() => {setShowModal(false)}} /></span>
  );
}

export default ReviewImgThumbnail;