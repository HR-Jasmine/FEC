import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import '../styles/Reviews/review-form.css';

const ReviewForm = ({showForm, onClose, metaData}) => {
  if (!showForm) {
    return null;
  }

  console.log(metaData);

  const blankFormState = {
    rating: 0,
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
    Length: ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
    Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']
  };


  const [formState, setFormState] = useState(blankFormState);

  const formVerify = () => {
    const submitData = {
      product_id: Number(metaData.product_id),
      rating: formState.rating,
      summary: formState.reviewSummary,
      body: formState.reviewBody,
      recommend: formState.recommend,
      name: formState.nickname,
      email: formState.email,
      photos: formState.photos,
      characteristics: formState.characteristics
    }

    let alertMsg = '';

    if (submitData.rating === 0) {
      alertMsg += 'You must give the product a star rating\n';
    }

    if (Object.keys(submitData.characteristics).length !== Object.keys(metaData.characteristics).length) {
      alertMsg += 'You must rate every characteristic of the product\n';
    }

    if (submitData.body.length < 51) {
      alertMsg += 'You must have a review over 50 characters long\n'
    }

    if (submitData.name === '') {
      alertMsg += 'You must give a username\n';
    }

    if (submitData.email === '') {
      alertMsg += 'You must provide an email address';
    }

    if (alertMsg !== '') {
      alert(alertMsg);
    } else {
      console.log(submitData);
      axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/`, submitData,
      {
        headers: {
          'Authorization': process.env.API_KEY,
        }
      })
        .then(response => {console.log(response)});
      return true;
    }
  }

  const ratingMeaning = {
    1: 'Poor',
    2: 'Fair',
    3: 'Average',
    4: 'Good',
    5: 'Great'
  }

  const scaleChange = (e) => {
    let currChars = {...formState.characteristics};
    currChars[e.target.name] = Number(e.target.value);
    setFormState({...formState, characteristics: currChars});
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
            <label class="review-star-rating">
              <strong>Rating: {formState.rating === 0 ? null : ratingMeaning[formState.rating]}</strong>
              <input className="review-rating" max="100" onChange={(e) => {
                let updatedFormState = {...formState, rating: Math.ceil(e.target.value / 20)};
                setFormState(updatedFormState);
                e.target.style.setProperty('--value', Math.ceil(e.target.value / 20));
                console.log(e.target.value);
              }} step="1" type="range" value={formState.rating}></input><br></br>
            </label>&nbsp;&nbsp;
            <div className="review-form-checkbox">
              Do you recommend this product?
              <input type="checkbox" value={formState.recommend} onChange={(e) => {
                let updatedForm = {...formState, recommend: !formState.recommend};
                setFormState(updatedForm);
              }}></input>
            </div>
              <input type="text" className="review-summary" value={formState.reviewSummary} placeholder="Title*" onChange={(e) => {
              e.preventDefault();
              let updatedForm = {...formState, reviewSummary: e.target.value};
              setFormState(updatedForm);
            }}></input><br></br>
            <textarea rows={5} cols={50} className="review-body" value={formState.reviewBody} placeholder="Review*" onChange={(e) => {
              e.preventDefault();
              let updatedForm = {...formState, reviewBody: e.target.value};
              setFormState(updatedForm);
            }}></textarea><br></br>
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
            {Object.keys(metaData.characteristics).map(char => {
              return (
                <div className="char-holder">
                  <p>{char}</p><br></br>
                  <input type="radio" name={metaData.characteristics[char].id} value={1} onClick={scaleChange}></input>&nbsp; {scales[char][0]}<br></br>
                  <input type="radio" name={metaData.characteristics[char].id} value={2} onClick={scaleChange}></input>&nbsp; {scales[char][1]}<br></br>
                  <input type="radio" name={metaData.characteristics[char].id} value={3} onClick={scaleChange}></input>&nbsp; {scales[char][2]}<br></br>
                  <input type="radio" name={metaData.characteristics[char].id} value={4} onClick={scaleChange}></input>&nbsp; {scales[char][3]}<br></br>
                  <input type="radio" name={metaData.characteristics[char].id} value={5} onClick={scaleChange}></input>&nbsp; {scales[char][4]}<br></br>
                </div>
              )
            })}
          </form>
        </div>
        <div className="review-form-modal-footer">
          <button onClick={(e) => {
            e.preventDefault();
            let verified = formVerify();
             if (verified) {
              onClose();
             }
          }}>Submit</button>&nbsp;&nbsp;
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default ReviewForm;