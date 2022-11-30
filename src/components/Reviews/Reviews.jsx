import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

const Reviews = ({productId}) => {

  const [allReviews, setAllReviews] = useState([]);

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
        console.log(response.data);
        setAllReviews(response.data);
      })
  }, [productId])


  return (
    <div>
      hello
    </div>
  );
}

export default Reviews;