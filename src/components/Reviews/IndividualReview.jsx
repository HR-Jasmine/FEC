import React from 'react';
import {useState} from 'react';
import {format, parseISO} from 'date-fns';
import Stars from '../Stars.jsx';
import ReviewImgThumbnail from './ReviewImgThumbnail.jsx';
import '../styles/Reviews/individual-review.css';
import axios from 'axios';

const IndividualReview = ({review, beenClicked, setBeenClicked, theme, themes}) => {


  const [reviewBody, setReviewBody] = useState(review.body.slice(0, 250));
  const [isHelpful, setIsHelpful] = useState(review.helpfulness);

  // TODO - find out where not helpful votes are located
  const [notHelpful, setNotHelpful] = useState(0);

  return (
    <div className={`review-item card ${themes['t0'][theme]}`}>
      <h4 className="review-title">{review.summary}</h4>
      <Stars rating={review.rating} theme={theme} themes={themes}/>
      <h6 className="review-username">Review by: {review.reviewer_name}</h6>
      <h5 className="review-date">{format(parseISO(review.date), 'MMMM dd, yyyy')}</h5>
      <div className="review-body">
        {reviewBody}<br></br>
        <div className="review-image-holder">
          <span>
        {review.photos.map((photo, i) => {
          return (<ReviewImgThumbnail photo={photo} key={i} />);
        })}
          </span>
        </div><br></br>
        <button hidden={review.body.length >= 250 ? false : true} className={`more-reviews-btn helpful-button ${themes['t4'][theme]}`} onClick={(e) => {
          e.target.hidden=true;
          setReviewBody(review.body);
        }}>See More</button><br></br>
        {review.recommend ? <a>I recommend this product &#x2713;</a> : null}
      </div>
      <p className="review-response" hidden={review.response === null ? true : false}>
        Response from seller:<br></br>
        {review.response}
      </p>
      <div className="review-helpful">
        Was this review helpful?
        <button className={"shareButton card hover helpful-button" + review.review_id + ' ' + themes['t3'][theme]} disabled={beenClicked[review.review_id] === true ? true : false} onClick={(e) => {
          e.preventDefault();
          let copyOfBeenClicked = {...beenClicked};
          copyOfBeenClicked[review.review_id] = true;
          setBeenClicked(copyOfBeenClicked);
          axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${review.review_id}/helpful/`, {},
          {
            headers: {
              'Authorization': process.env.API_KEY
            }
          })
          setIsHelpful(isHelpful + 1);
        }}>Yes ({isHelpful})</button>&nbsp;&nbsp;&nbsp;
        <button className={"shareButton card hover helpful-button" + review.review_id + ' ' + themes['t3'][theme]} disabled={beenClicked[review.review_id] === true ? true : false} onClick={(e) => {
          e.preventDefault();
          let copyOfBeenClicked = {...beenClicked};
          copyOfBeenClicked[review.review_id] = true;
          setBeenClicked(copyOfBeenClicked);
          axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${review.review_id}/report/`, {},
          {
            headers: {
              'Authorization': process.env.API_KEY
            }
          })
          setNotHelpful(notHelpful + 1);
        }}>No ({notHelpful})</button>
      </div>
    </div>
  )
}

export default IndividualReview;