import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/RelatedProducts/relatedProducts.css';


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
  <div className='outfit-container product-card'>
  <h3 className="outfit-center-text">Add to your outfit!</h3>
   </div>
    )

  return (
    <div>
    <h2 className="product-category">Your Outfit</h2>
    <section className="product">
      <button  className="pre-btn" >&#8592;</button>
      <button  className="nxt-btn">&#8594;</button>
      <div className="product-container">
          {/* {relprods.map((card, i) => {
          return <SingleProduct card={card} key={i} styles={styles} />
          })} */}
      </div>
   </section>
   </div>
  )
}
}

export default Outfit;