import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/RelatedProducts/relatedProducts.css';
import SingleOutfit from './SingleProduct.jsx'


const Outfit = ( { productId } ) => {

  const [outfitIds, setOutfitIds] = useState([])


  const addToFit = function (id) {
    setOutfitIds(ouitfitIds => [...outfitIds, id])
  }

  const removeFromFit = function (id) {
    setOutfitIds(outfitIds => (outfitIds.filter((product, i) => product != id )))
  }

  if  (outfitIds.length === 0) {
    return (
  <div class='outfit-container product-card'>
  <h3 class="outfit-center-text">Add to your outfit!</h3>
   </div>
    )

  return (
    <div>
    <h2 class="product-category">Your Outfit</h2>
    <section class="product">
      <button  class="pre-btn" >&#8592;</button>
      <button  class="nxt-btn">&#8594;</button>
      <div class="product-container">
          {ouitfitIds.map((card, i) => {
          return <SingleOutfit card={card} key={i} styles={styles} />
          })}
      </div>
   </section>
   </div>
  )
}
}

export default Outfit;