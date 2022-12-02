import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/RelatedProducts/relatedProducts.css';


const RelatedProducts = ( { productId } ) => {
  console.log('productId', productId)

  const [relatedId, setrelatedId] = useState([]);
  const [relprods, setrelprods] = useState([37312,37313,37318,37317]);
  const [promises, setpromises] = useState([])

  // get productId through props
  // set relatedId from result
  // ^ is array of PID related to input product ex. [37312,37313,37318,37317]

    const getRelatedProducts = function(productId){
    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productId}/related`,
  {
    headers: {
      'Authorization': process.env.API_KEY
    }
    })
    .then(data => setrelatedId(data.data))
  }

  useEffect(() => {
  getRelatedProducts(37312)
  }, [])
  console.log('relatedId from setState', relatedId)

  // want to get individual product obj with info
  // add result obj to array in relprods
    const getProduct = function (sku) {


     axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${sku}`,
      {
        headers: {
          'Authorization': process.env.API_KEY
        }
        })
        .then(response => {
          console.log('resonse in get product', response.data)
          return setrelprods(relprods => ([...relprods, response.data]))
        })
      }



  // const allRelatedProducts = Promise.all(relatedId.map(getProduct)).then(
  //   data=> Promise.all(data.map(getProduct))
  // ).then(function(data){
  //   return Promise.all(data.map(getProduct))
  // }).then(function(data){
  //   return Promise.all(data.map(getProduct))
  // });

  // allRelatedProducts.then(function(data){
  //   console.log('oooga, boooga', data)
  // });


    // getProduct(37312)
    // getProduct(37313)
    // getProduct(37318)
    // getProduct(37318)




  // console.log('relprods from state', relprods)


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