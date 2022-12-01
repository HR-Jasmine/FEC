import React from 'react';
import {useState} from 'react';
import {format, parseISO} from 'date-fns';
import Stars from '../Stars.jsx';
import '../styles/Reviews/individual-review.css';

const IndividualReview = ({review}) => {

  console.log(review);

  const [reviewBody, setReviewBody] = useState(review.body.slice(0, 250));

  return (
    <div className="review-item">
      <h4 className="review-title">{review.summary}</h4>
      <Stars rating={review.rating} />
      <h6 className="review-username">Review by: {review.reviewer_name}</h6>
      <h5 className="review-date">{format(parseISO(review.date), 'MMMM dd, yyyy')}</h5>
      <p className="review-body">
        {reviewBody}<br></br>
        {review.photos.map((photo, i) => {
          return <img src={photo.url} key={i} width="150"></img>
        })}<br></br>
        {review.recommend ? <a>I recommend this product &#x2713;</a> : null}
        <button hidden={review.body.length >= 250 ? false : true} onClick={(e) => {
          e.target.preventDefault();
          setReviewBody(review.body);
        }}>See More</button>
      </p>
      <p className="review-response" hidden={review.response === null ? true : false}>
        Response from seller:<br></br>
        {review.response}
      </p>
    </div>
  )
}

export default IndividualReview;