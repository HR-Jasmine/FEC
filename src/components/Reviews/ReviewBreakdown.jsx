import React from 'react';
import {useState, useEffect} from 'react';
import Stars from '../Stars.jsx';
import '../styles/Reviews/review-breakdown.css';

const ReviewBreakdown = ({metaData, filterSelector, ratingFilters, isFiltered, themes, theme}) => {
  const [filterString, setFilterString] = useState('');
  let ratingsArray = Object.values(metaData.ratings);
  let totalRatings = Number(metaData.recommended.false) + Number(metaData.recommended.true);
  let totalStars = 0;

  const polars = {
    Size: ['Too small', 'Too wide'],
    Width: ['Too narrow', 'Too wide'],
    Comfort: ['Uncomfortable', 'Perfect'],
    Quality: ['Poor', 'Perfect'],
    Length: ['Runs short', 'Runs long'],
    Fit: ['Runs tight', 'Runs long']
  };

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
      <br></br>
          Filtering by star ratings of: {filterString}<br></br>
          <button  className={`more-reviews-btn helpful-button ${themes['t4'][theme]}`} onClick={(e) => {
            e.preventDefault();
            filterSelector('clear');
          }}>Remove filters</button>
      </div>
      <br></br>
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
              </input><br></br>
            </div>
            <a className="polar-left">{polars[char][0]}</a><a className="polar-right">{polars[char][1]}</a><br></br>
          </div>
        )
      })}
      <br></br>
      <div className="percent-recommended">
        <div className="big-percent">{Math.floor((Number(metaData.recommended.true) / totalRatings) * 100)}%</div> of people recommend this product.
      </div>
    </div>
  );
}

export default ReviewBreakdown;