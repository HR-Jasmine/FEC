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
  const [ratingFilters, setRatingFilters] = useState({1: false, 2: false, 3: false, 4: false, 5: false});
  const [isFiltered, setIsFiltered] = useState(false);

  // console.log(productId)

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

  const filterSelector = (num) => {
    if (num === 'clear') {
      setRatingFilters({1: false, 2: false, 3: false, 4: false, 5: false});
      return;
    }
    let newFilters = {...ratingFilters};
    newFilters[num] = !newFilters[num];
    setRatingFilters(newFilters);
  }

  useEffect(() => {
    let allFilters = Object.values(ratingFilters);


    if (allFilters.indexOf(true) === -1) {
      setIsFiltered(false);
      setDisplayReviews(allReviews);
    } else {
      setIsFiltered(true);
      let compiledReviews = [];
      allReviews.forEach(review => {
        if (ratingFilters[review.rating]) {
          compiledReviews.push(review);
        }
      })
      setDisplayReviews(compiledReviews);
    }
  }, [ratingFilters])

  if (!allReviews[0] || !metaData.ratings) {
    return null;
  } else {
    return (
      <div className="reviews-panel">
        <ReviewBreakdown metaData={metaData} filterSelector={filterSelector} ratingFilters={ratingFilters} isFiltered={isFiltered}/>
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