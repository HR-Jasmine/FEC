import React from 'react';
import '../styles/Reviews/review-img-modal.css';

const ReviewImgModal = ({show, img, onClose}) => {

  if (!show) {
    return null;
  }

  return (
    <div className="review-img-modal">
      <div className="review-img-modal-content">
        <div className="review-img-modal-body">
          <img src={img} height="100%" width="100%"></img>
        </div>
        <div className="review-img-modal-footer">
          <button className="review-img-modal-close" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  )
};

export default ReviewImgModal;