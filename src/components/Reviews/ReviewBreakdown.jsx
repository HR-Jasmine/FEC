import React from 'react';
import {useState, useEffect} from 'react';
import Stars from '../Stars.jsx';
import '../styles/Reviews/review-breakdown.css';

const ReviewBreakdown = ({metaData, filterSelector, ratingFilters, isFiltered}) => {
  console.log(metaData);
  const [filterString, setFilterString] = useState('');
  let ratingsArray = Object.values(metaData.ratings);
  let totalRatings = Number(metaData.recommended.false) + Number(metaData.recommended.true);
  let totalStars = 0;

  useEffect(() => {
    let appliedFilters = [];

    for (var key in ratingFilters) {
      if (ratingFilters[key]) {
        appliedFilters.push(key);
      }
    }

    setFilterString(appliedFilters.join(', '));
  }, [ratingFilters]);

  for (var key in metaData.ratings) {
    totalStars += Number(key) * Number(metaData.ratings[key]);
  }

  let avgRating = totalStars / totalRatings;

  if (!metaData.product_id === 1) {
    return null;
  }

  return (
    <div className="review-breakdown">
      Average rating of {Math.floor(avgRating * 10) / 10} across {totalRatings} reviews.
      <Stars rating={avgRating} />
      <div className="applied-filters" hidden={!isFiltered}>
          Filtering by star ratings of: {filterString}<br></br>
          <button onClick={(e) => {
            e.preventDefault();
            filterSelector('clear');
          }}>Remove filters</button>
      </div>
      {ratingsArray.map((num, rating) => {
        let styleObj = {
          width: String((num / totalRatings) * 100) + '%'
        }
        return (
          <div className="breakdown-rating" key={rating} onClick={() => {
            filterSelector(rating + 1);
          }}>
            {rating + 1} Star{rating > 0 ? 's': ' '}&nbsp;&nbsp;
            <div className="bar-ratings" key={rating}>
              <div className="empty-bar"></div>
              <div className="full-bar" style={styleObj}></div>
            </div>&nbsp;
            {num}
            <br></br>
          </div>
        )
      })}
      {Object.keys(metaData.characteristics).map((char, i) => {
        return (
          <div className="breakdown-characteristic" key={i}>
            {char} <br></br>
            <div className="slidecontainer">
              <input type="range" min="1" max="100" value={metaData.characteristics[char].value * 20} className="slider" readOnly={true}>
              </input>
            </div>
          </div>
        )
      })}
      <div className="percent-recommended">
        {Math.floor((Number(metaData.recommended.true) / totalRatings) * 100)}% of people recommend this product.
      </div>
    </div>
  );
}

export default ReviewBreakdown;