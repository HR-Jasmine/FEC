import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/RelatedProducts/relatedProducts.css';
import Stars from '../Stars.jsx';



const SingleProduct = ( { card, styles } ) => {



    // console.log('this is stylessss', styles)
  return (
    <div className="product-card">
      <div className="product-image">
        <img className="product-thumb" src="https://images.unsplash.com/photo-1551489186-cf8726f514f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" ></img>
        <button className="favorite-star">&#9734;</button>
     </div>
        <div className='product-info'>
            <p className="rp-category">{card.category}</p>
            <p className="product-brand">{card.name}</p>
            <span className="price">{card.default_price}</span>
            <Stars className="stars" />
       </div>
    </div>
  )
}

export default SingleProduct;