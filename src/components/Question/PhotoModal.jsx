import React from 'react';
import '../styles/Question/photomodal.css';

const PhotoModal = ({photoIsOpen, closePhotoModal}) => {
  if(!photoIsOpen) {
    return null
  }

  return (
    <div className="photo-modal">
      <button onClick={closePhotoModal}> Close Photo Modal </button>
    </div>
  )

}

export default PhotoModal;