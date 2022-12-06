import React from 'react';
import {useState} from 'react';
import '../styles/Reviews/review-form.css';

const ReviewForm = ({showForm, onClose, metaData}) => {
  if (!showForm) {
    return null;
  }

  console.log(metaData);

  const blankFormState = {
    rating: 1,
    recommend: false,
    characteristics: {},
    reviewSummary: '',
    reviewBody: '',
    photos: [],
    nickname: '',
    email: ''
  }

  const scales = {
    Size: ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too wide'],
    Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
    Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'OK', 'Comfortable', 'Perfect'],
    Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
    Length: ['Runs short', 'Rus slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
    Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']
  };


  const [formState, setFormState] = useState(blankFormState);

  const formVerify = () => {
    const submitData = {
      product_id: metaData.product_id,
      rating: formState.rating,
      summary: formState.reviewSummary,
      body: formState.reviewBody,
      recommend: formState.recommend,
      name: formState.nickname,
      email: formState.email,
      photos: formState.photos,
      characteristics: formState.characteristics
    }
  }

  return (
    <div className="review-form-modal">
      <div className="review-form-modal-content">
        <div className="review-form-modal-header">
          <h4 className="review-form-modal-title">Write your review</h4>
          <h6>About the {document.querySelector('#interfaceHead > h2').innerText}</h6>
        </div>
        <div className="review-form-modal-body">
          <form>
            <input type="text" className="review-summary" value={formState.reviewSummary} placeholder="Title*" onChange={(e) => {
              e.preventDefault();
              let updatedForm = {...formState, reviewSummary: e.target.value};
              setFormState(updatedForm);
            }}></input><br></br>
            <textarea rows={5} cols={50} className="review-body" value={formState.reviewBody} placeholder="Review*" onChange={(e) => {
              e.preventDefault();
              let updatedForm = {...formState, reviewBody: e.target.value};
              setFormState(updatedForm);
            }}></textarea>
            <input type="text" className="review-nickname" value={formState.nickname} placeholder="Username*" onChange={(e) => {
              e.preventDefault();
              let updatedForm = {...formState, nickname: e.target.value};
              setFormState(updatedForm);
            }}></input>
            <input type="text" className="review-nickname" value={formState.email} placeholder="Email*" onChange={(e) => {
              e.preventDefault();
              let updatedForm = {...formState, email: e.target.value};
              setFormState(updatedForm);
            }}></input>
          </form>
        </div>
        <div className="review-form-modal-footer">
          <button onClick={(e) => {
            e.preventDefault();
            console.log(formState);
            formVerify();
            onClose();
          }}>Submit</button>&nbsp;&nbsp;
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default ReviewForm;