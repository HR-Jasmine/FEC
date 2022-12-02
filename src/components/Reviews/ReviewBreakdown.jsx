import React from 'react';
import {useState} from 'react';
import Stars from '../Stars.jsx';
import '../styles/Reviews/review-breakdown.css';

const ReviewBreakdown = ({metaData}) => {
  if (!metaData.product_id === 1) {
    return null;
  }

  let ratingsArray = Object.values(metaData.ratings);
  let totalRatings = Number(metaData.recommended.false) + Number(metaData.recommended.true);
  let totalStars = 0;

  for (var key in metaData.ratings) {
    totalStars += Number(key) * Number(metaData.ratings[key]);
  }

  let avgRating = totalStars / totalRatings;

  return (
    <div className="review-breakdown">
      Average rating of {Math.floor(avgRating * 10) / 10} across {totalRatings} reviews.
      <Stars rating={avgRating} />
      {ratingsArray.map((num, rating) => {
        let styleObj = {
          width: String((num / totalRatings) * 100) + '%'
        }
        console.log(styleObj);
        return (
          <div className="breakdown-rating" key={rating}>
            {rating + 1} Stars&nbsp;&nbsp;
            <div className="bar-ratings" key={rating}>
              <div className="empty-bar"></div>
              <div className="full-bar" style={styleObj}></div>
            </div>&nbsp;
            {num}
            <br></br>
          </div>
        )
      })}
    </div>
  );
}

export default ReviewBreakdown;