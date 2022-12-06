import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/RelatedProducts/relatedProducts.css';
import Stars from '../Stars.jsx';



const SingleProduct = ( { card, styles } ) => {



    // console.log('this is stylessss', styles)
  return (
    <div class="product-card">
      <div class="product-image">
        <img class="product-thumb" src="https://images.unsplash.com/photo-1551489186-cf8726f514f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" ></img>
        <button class="favorite-star">&#9734;</button>
     </div>
        <div class='product-info'>
            <p class="rp-category">{card.category}</p>
            <h2 class="product-brand">{card.name}</h2>
            <span class="price">{card.default_price}</span>
            <Stars class="stars" />
       </div>
    </div>
  )
}

export default SingleProduct;