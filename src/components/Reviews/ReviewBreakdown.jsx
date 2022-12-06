import React from 'react';
import {useState, useEffect} from 'react';
import Stars from '../Stars.jsx';
import '../styles/Reviews/review-breakdown.css';

const ReviewBreakdown = ({metaData, filterSelector, ratingFilters, isFiltered}) => {
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

  const showFilters = () => {
    if (!isFiltered) {
      return null;
    } else {

      let appliedFilters = [];

      for (var key in ratingFilters) {
        if (ratingFilters[key]) {
          appliedFilters.push(key);
        }
      }

      setFilterString(appliedFilters.join(', ').slice(0, -2));
    }
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
            showFilters();
          }}>
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
      {Object.keys(metaData.characteristics).map((char, i) => {
        return (
          <div className="breakdown-characteristic" key={i}>
            {char} <br></br><Stars rating={metaData.characteristics[char].value} />
          </div>
        )
      })}
    </div>
  );
}

export default ReviewBreakdown;