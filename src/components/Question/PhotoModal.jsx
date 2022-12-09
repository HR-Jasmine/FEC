import React from 'react';

const PhotoModal = ({photoIsOpen, closePhotoModal}) => {
  if(!photoIsOpen) {
    return null
  }

  return (
    <div>
      <button onClick={closePhotoModal}> Close Photo Modal </button>
    </div>
  )

}

export default PhotoModal;