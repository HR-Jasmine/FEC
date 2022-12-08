import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/RelatedProducts/relatedProducts.css';
import Stars from '../Stars.jsx';



const SingleOutfit = ( { card, styles, ratings } ) => {

  if (!styles) {
    return null;
  }

  if (!ratings) {
    return null;
  }

  let totalStars = 0;
  let allRatings = Object.values(ratings.ratings);
  let allValues = Object.keys(ratings.ratings)

  for (var key in ratings.ratings) {
    totalStars += Number(key) * Number(ratings.ratings[key]);
  }

  let totalRatings = allRatings.map(num => Number(num))
  let sumRatings = 0
  totalRatings.forEach(num => sumRatings += num)
  let avgRating = totalStars / sumRatings;




  // const image = styles.results[0].photos[0].thumbnail_url

    // console.log('this is stylessss', styles)
  return (
    <div class="product-card">
      <div class="product-image">
        <img class="product-thumb" src={styles.results[0].photos[0].url} ></img>
        <button class="favorite-star">&#9734;</button>
     </div>
        <div class='product-info'>
            <p class="rp-category">{card.category}</p>
            <p class="product-brand">{card.name}</p>
            <span class="price">{card.default_price}</span>
            <Stars rating={avgRating} class="stars" />
       </div>
    </div>
  )
}

export default SingleOutfit;