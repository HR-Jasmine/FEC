import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/RelatedProducts/relatedProducts.css';
import Stars from '../Stars.jsx';



const SingleProduct = ( { card, styles } ) => {

    // console.log('this is stylessss', styles)
  return (
    <div class="single-product-card">
      <p class="favorite-star">&#9734;</p>
     <img src="https://images.unsplash.com/photo-1551489186-cf8726f514f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" class='box-img'></img>
      <div class='single-product-box'>
            <p class="rp-category">{card.category}</p>
            <p class="rp-name">{card.name}</p>
            <p class="rp-price">{card.default_price}</p>
            <Stars />
       </div>
    </div>
  )
}

export default SingleProduct;