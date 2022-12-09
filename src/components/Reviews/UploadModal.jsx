import React from 'react';
import ReactDOM from 'react-dom';
import CloudinaryUploadWidget from './CloudinaryUploadWidget.jsx';

const UploadModal = ({showUploadModal}) => {
  if (!showUploadModal) {
    return null;
  }

  return ReactDOM.createPortal(<CloudinaryUploadWidget />, document.getElementById('upload-modal-holder'));
}

export default UploadModal;