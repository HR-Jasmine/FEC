import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/RelatedProducts/relatedProducts.css';
import Stars from '../Stars.jsx';



const SingleProduct = ( { productId, changeId, theme, themes } ) => {

  if (!productId) {
    return null;
  }

  const [productInfo, setProductInfo] = useState({});
  const [productPhoto, setProductPhoto] = useState('');
  const [productName, setProductName] = useState('');
  const [dumbRender, setDumbRender] = useState(0);

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productId}/styles`,
    {
      headers: {
        'Authorization': process.env.API_KEY
      }
  })
    .then(response => {
      setProductInfo(response.data.results[0]);
      setDumbRender(dumbRender + 1);
    })

    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productId}`,
    {
      headers: {
        'Authorization': process.env.API_KEY
      }
  })
    .then(response => {
      setProductName(response.data.name);
      setDumbRender(dumbRender + 1);
    })
  }, [productId]);


  useEffect(() => {
    if (dumbRender > 0 && productInfo.photos) {
      let photoUrl = productInfo.photos[0].thumbnail_url;
      setProductPhoto(photoUrl);
    }
  }, [dumbRender])


  if (!productId || !productPhoto) {
    return null;
  }

  return (
    <div className={"product-card card hover " + themes['t0'][theme]} onClick={() => {
      changeId(productId);
    }}>
      <div className={"product-image " + themes['t1'][theme]}>
        <img className="product-thumb" src={productPhoto} ></img>
        <button className="favorite-star">&#9734;</button>
     </div>
        <div className='product-info'>
            <p className="rp-category">{productName}</p>
            <p className="product-brand"></p>
            <span className="price">{productInfo.original_price}</span>
            <Stars className="stars" theme={theme} themes={themes} />
       </div>
    </div>
  )
}

export default SingleProduct;