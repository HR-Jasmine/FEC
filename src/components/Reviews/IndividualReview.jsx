import React from 'react';
import {format, parseISO} from 'date-fns';

const IndividualReview = ({review}) => {

  console.log(review);

  return (
    <div className="review-item">
      <h4 className="review-title">{review.summary}</h4>
      <h5>{review.rating} stars       {format(parseISO(review.date), 'MMMM dd, yyyy')}</h5>

    </div>
  )
}

export default IndividualReview;