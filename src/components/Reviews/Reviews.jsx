import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import IndividualReview from './IndividualReview.jsx';
import Stars from '../Stars.jsx';
import '../styles/Reviews/reviews.css';

const Reviews = ({productId}) => {

  const [allReviews, setAllReviews] = useState([]);
  const [numOfRevs, setNumOfRevs] = useState(2);
  const [displayReviews, setDisplayReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    if (productId === '') {
      return;
    }

    // Get the reviews
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/?product_id=${productId}`,
      {
        headers: {
          'Authorization': process.env.API_KEY
        }
    })
      .then(response => {
        setAllReviews(response.data.results);
        setDisplayReviews(response.data.results);
      })

    // Get the review metaData
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta?product_id=${productId}`,
    {
      headers: {
        'Authorization': process.env.API_KEY
      }
  })
    .then(response => {
      let reviewAgg = response.data.ratings;
      let numOfRatings = 0;
      let totalStars = 0;

      for (var key in reviewAgg) {
        numOfRatings += Number(reviewAgg[key]);
        totalStars += reviewAgg[key] * key;
      }

      setAverageRating(totalStars / numOfRatings);
    })

  }, [productId])

  const sortSelector = (param) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/?product_id=${productId}&sort=${param}`,
    {
      headers: {
        'Authorization': process.env.API_KEY
      }
    })
    .then(response => {
      setAllReviews(response.data.results);
      setDisplayReviews(response.data.results);
      setNumOfRevs(2);
    })
  }

  if (!allReviews[0]) {
    return null;
  } else {
    return (
      <div className="reviews-panel">
        <div className="review-breakdown">
          <p className="average-rating-text">Average rating: {Math.floor(averageRating * 100) / 100} stars</p>
          <Stars rating={averageRating} />
        </div>
        <div className="review-nav">
          Sort by: &nbsp;&nbsp;
          <select className="sort-menu" onChange={(e) => {sortSelector(e.target.value)}}>
            <option value="relevance">Relevance</option>
            <option value="helpful">Helpful</option>
            <option value="newest">Newest</option>
          </select>
        </div>
        <div className="review-list">
          {displayReviews.slice(0, numOfRevs).map((review, i) => {
            return <IndividualReview review={review} key={i}/>
          })}
          <button className="more-reviews-btn" hidden={numOfRevs >= allReviews.length ? true : false} onClick={(e) => {
            e.preventDefault();
            setNumOfRevs(numOfRevs + 2);
          }}>More Reviews</button>
        </div>
      </div>
    );
  }
}

export default Reviews;