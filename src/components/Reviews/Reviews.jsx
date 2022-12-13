import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import IndividualReview from './IndividualReview.jsx';
import ReviewBreakdown from './ReviewBreakdown.jsx';
import ReviewForm from './ReviewForm.jsx';
import '../styles/Reviews/reviews.css';
import interaction from '../interaction.js';

const Reviews = ({productId, product, theme, themes}) => {

  const [allReviews, setAllReviews] = useState([]);
  const [numOfRevs, setNumOfRevs] = useState(2);
  const [displayReviews, setDisplayReviews] = useState([]);
  const [metaData, setMetaData] = useState({});
  const [ratingFilters, setRatingFilters] = useState({1: false, 2: false, 3: false, 4: false, 5: false});
  const [isFiltered, setIsFiltered] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [beenClicked, setBeenClicked] = useState({});
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    if (productId === '') {
      return;
    }

    // Get the reviews
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/?product_id=${productId}&count=1000`,
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

    setNumOfRevs(0);
    setRenderCount(renderCount + 1);
  }, [productId])


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
    setNumOfRevs(0);
    setRenderCount(renderCount + 1);
  }, [ratingFilters]);

  useEffect(() => {
    setNumOfRevs(2);
  }, [renderCount]);

  const sortSelector = (param) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/?product_id=${productId}&sort=${param}&count=1000`,
    {
      headers: {
        'Authorization': process.env.API_KEY
      }
    })
    .then(response => {
      setAllReviews(response.data.results);
      setDisplayReviews(response.data.results);
      setNumOfRevs(0);
      setRenderCount(renderCount + 1);
      setRatingFilters({1: false, 2: false, 3: false, 4: false, 5: false});
    })
  }

  const filterSelector = (num) => {
    console.log('in filter selector');
    if (num === 'clear') {
      setRatingFilters({1: false, 2: false, 3: false, 4: false, 5: false});
      return;
    }
    let newFilters = {...ratingFilters};
    newFilters[num] = !newFilters[num];
    setRatingFilters(newFilters);
  }


  if (!allReviews[0] || !metaData.ratings) {
    return null;
  } else {
    return (
      <div className={`reviews-panel ${themes['t1'][theme]}`} id="reviews" onClick={(e) => {interaction(e.target, 'Reviews')}}>
        <ReviewBreakdown metaData={metaData} filterSelector={filterSelector} ratingFilters={ratingFilters} isFiltered={isFiltered} theme={theme} themes={themes}/>
        <div className="review-nav">
          Sort by: &nbsp;&nbsp;
          <select className="sort-menu" onChange={(e) => {
            interaction(e.target);
            sortSelector(e.target.value);
          }}>
            <option value="relevance">Relevance</option>
            <option value="helpful">Helpful</option>
            <option value="newest">Newest</option>
          </select>
        </div>
        <div className="review-list">
          {displayReviews.slice(0, numOfRevs).map((review, i) => {
            return <IndividualReview review={review} beenClicked={beenClicked} setBeenClicked={setBeenClicked} theme={theme} themes={themes} key={i}/>
          })}
          <div className="review-buttons h">
            <button className={`more-reviews-btn bigButton bigButtonReviews hover ${themes['t3'][theme]}`} hidden={numOfRevs >= displayReviews.length ? true : false} onClick={(e) => {
              e.preventDefault();
              interaction(e.target);
              setNumOfRevs(numOfRevs + 2);
            }}>More Reviews</button>
            <button className={`add-review-button bigButton bigButtonReviews hover ${themes['t3'][theme]}`} onClick={(e) => {
              setShowForm(true);
            }}>Add Review</button>
          </div>

        </div>
        <div id="modal-holder">
          <ReviewForm showForm={showForm} metaData={metaData} product={product} theme={theme} themes={themes} onClose={() => {setShowForm(false)}}/>

        </div>
      </div>
    );
  }
}

export default Reviews;