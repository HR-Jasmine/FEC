import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/RelatedProducts/relatedProducts.css';


const Outfit = ( { productId } ) => {

  const [outfitIds, setOutfitIds] = setState([])

  const addToFit = function (id) {
    setOutfitIds(ouitfitIds => [...outfitIds, id])
  }

  const removeFromFit = function (id) {
    setOutfitIds(outfitIds => (outfitIds.filter((product, i) => product != id )))
  }

  if  (outfitIds.length === 0) {
    return (
  <div class='outfit-box'>
  Add to your outfit!
   </div>
    )

  return (
    <div class="outfit">
      Outfit
    </div>
  )
}
}

export default Outfit;