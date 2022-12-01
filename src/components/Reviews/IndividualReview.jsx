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
      <h5>{format(parseISO(review.date), 'MMMM dd, yyyy')}</h5>
      <p>
        {reviewBody}<br></br>
        {review.photos.map(photo => {
          return <img src={photo.url} width="150"></img>
        })}<br></br>
        {review.recommend ? <a>I recommend this product &#x2713;</a> : null}
        <button hidden={review.body.length >= 250 ? false : true} onClick={(e) => {
          e.target.preventDefault();
          setReviewBody(review.body);
        }}>See More</button>
      </p>
    </div>
  )
}

export default IndividualReview;