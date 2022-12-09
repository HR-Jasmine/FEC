import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/Reviews/review-img-modal.css';

const ReviewImgModal = ({show, img, onClose}) => {

  if (!show) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="review-img-modal">
      <div className="review-img-modal-content">
        <div className="review-img-modal-body">
          <img src={img} className="review-modal-image" height="100%" width="100%"></img>
        </div>
        <div className="review-img-modal-footer">
          <button className="review-img-modal-close" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>,
    document.getElementById('modal-holder')
  );
};

export default ReviewImgModal;