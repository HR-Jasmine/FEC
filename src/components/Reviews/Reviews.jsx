import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import IndividualReview from './IndividualReview.jsx';
import ReviewBreakdown from './ReviewBreakdown.jsx';
import '../styles/Reviews/reviews.css';

const Reviews = ({productId}) => {

  const [allReviews, setAllReviews] = useState([]);
  const [numOfRevs, setNumOfRevs] = useState(2);
  const [displayReviews, setDisplayReviews] = useState([]);
  const [metaData, setMetaData] = useState({});

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
      setMetaData(response.data);
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
        <ReviewBreakdown metaData={metaData} />
        <div className="review-nav">
          Sort by: &nbsp;&nbsp;
          <select className="sort-menu" onChange={(e) => {sortSelector(e.target.value)}}>
            <option value="relevance">Relevance</option>
            <option value="helpful">Helpful</option>
            <option value="newest">Newest</option>
          </select>
        </div>
<<<<<<< HEAD
        <div className="review-list v">
          {allReviews.slice(0, numOfRevs).map((review, i) => {
=======
        <div className="review-list">
          {displayReviews.slice(0, numOfRevs).map((review, i) => {
>>>>>>> dev
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