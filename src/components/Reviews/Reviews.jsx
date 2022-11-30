import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import IndividualReview from './IndividualReview.jsx';

const Reviews = ({productId}) => {

  const [allReviews, setAllReviews] = useState([]);
  const [numOfRevs, setNumOfRevs] = useState(2);

  useEffect(() => {

    if (productId === '') {
      return;
    }

    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/?product_id=${productId}`,
      {
        headers: {
          'Authorization': process.env.API_KEY
        }
    })
      .then(response => {
        setAllReviews(response.data.results);
      })
  }, [productId])

  if (!allReviews[0]) {
    return null;
  } else {
    return (
      <div className="reviews-panel">
      <div className="review-list">
        {allReviews.slice(0, numOfRevs).map((review, i) => {
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