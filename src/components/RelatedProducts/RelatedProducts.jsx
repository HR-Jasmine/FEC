import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/RelatedProducts/relatedProducts.css';


const RelatedProducts = ( { productId } ) => {

  const [relatedId, setrelatedId] = useState([]);
  const [relprods, setrelprods] = useState([]);

  useEffect(() => {

    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productId}/related`,
  {
    headers: {
      'Authorization': process.env.API_KEY
    }
    })
    .then(data => {
      console.log('Example Related Products', data.data)

      setrelatedId(data.data);
    })
    }, [productId])


    const getProduct = function (productId) {

      useEffect(() => {
     return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productId}`,
      {
        headers: {
          'Authorization': process.env.API_KEY
        }
        })
        .then(response => {
          setrelprods(relprods => ([...relprods, response.data]))
        })
      }, [productId])
    }



    getProduct(37312)
    getProduct(37313)
    getProduct(37318)




  console.log('relatedId from setState', relatedId)
  console.log('relprods from state', relprods)


  return (
    <div class='related-products'>
      Related Products
      <div class='cards-all'>
      {/* {relatedId.map((id, i) => <div key={i} class="related-products-card" > {id} </div>)} */}
      {relprods.map((id, i) => <div key={i} class="related-products-card">
            <p class="rp-category">{id.category}</p>
            <p class="rp-name">{id.name}</p>
            <p class="rp-price">{id.default_price}</p>
          </div>)}
      </div>
      <div class='outfit'>
          Outfit
        </div>
        <div class='outfit-box'>
            Outfit Box
          </div>

    </div>
  )

}

export default RelatedProducts;