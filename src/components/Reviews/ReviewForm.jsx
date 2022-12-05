import React from 'react';
import {useState} from 'react';
import '../styles/Reviews/review-form.css';

const ReviewForm = ({showForm, onClose}) => {
  if (!showForm) {
    return null;
  }

  const blankFormState = {
    rating: 1,
    recommended: false,
    characteristics: {},
    reviewSummary: '',
    reviewBody: '',
    images: [],
    nickname: '',
    email: ''
  }

  const [formState, setFormState] = useState(blankFormState);

  return (
    <div className="review-form">
      <form>
        <input type="text" className="review-summary" value={formState.reviewSummary} placeholder="Title*" onChange={(e) => {
          e.preventDefault();
          let updatedForm = {...formState, reviewSummary: e.target.value};
          setFormState(updatedForm);
        }}></input><br></br>
        <input type="textarea" className="review-body" value={formState.reviewBody} placeholder="Review*" onChange={(e) => {
          e.preventDefault();
          let updatedForm = {...formState, reviewBody: e.target.value};
          setFormState(updatedForm);
        }}></input>
      </form>
    </div>
  )
}

export default ReviewForm;