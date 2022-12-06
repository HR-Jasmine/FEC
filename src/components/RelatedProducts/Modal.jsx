import React from 'react';

const Modal = props => {
  return (
    <div class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Modal Title</h4>
        </div>
        <div class="modal-body">
          This is modal content
        </div>
        <div class="modal-footer">
          <button class="button">Close</button>
        </div>
      </div>
    </div>
  )
}

export default Modal;