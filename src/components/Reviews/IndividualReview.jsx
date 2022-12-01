import React from 'react';
import {format, parseISO} from 'date-fns';
import Stars from '../Stars.jsx';

const IndividualReview = ({review}) => {

  console.log(review);

  return (
    <div className="review-item">
      <h4 className="review-title">{review.summary}</h4>
      <Stars rating={review.rating} />
      <h5>{format(parseISO(review.date), 'MMMM dd, yyyy')}</h5>

    </div>
  )
}

export default IndividualReview;