import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/RelatedProducts/relatedProducts.css';
import Outfit from './Outfit.jsx'
import SingleProduct from './SingleProduct.jsx'

const RelatedProducts = ( { productId } ) => {
  // console.log('productId', productId)

  const [relatedId, setrelatedId] = useState([]);
  const [relprods, setrelprods] = useState([]);
  const [promises, setpromises] = useState([])
  const [styles, setstyles] = useState([])

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
  // console.log('relatedId from setState', relatedId)

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
          // console.log('resonse in get product', response.data)
          return setrelprods(relprods => ([...relprods, response.data]))
        })
      }

      useEffect(() => {
        const cool = []
        cool.push(getProduct(37312))
        cool.push(getProduct(37313))
        // console.log(cool)

        }, [])

        // console.log('relprods from state', relprods)


        const getStylesInfo = function (PID) {

          useEffect(() => {


          axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${PID}/styles`,
           {
             headers: {
               'Authorization': process.env.API_KEY
             }
             })
             .then(response => {
              //  console.log('image', response.data)
               setstyles(response.data)
             })
           },[]
          )}

           getStylesInfo(37318)

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






  return (
    <div class='related-products'>
      Related Products
      <div class='cards-all'>
      {/* {relatedId.map((id, i) => <div key={i} class="related-products-card" > {id} </div>)} */}
      {/* {relprods.map((id, i) => <div key={i} class="related-products-card">
            <p class="rp-category">{id.category}</p>
            <p class="rp-name">{id.name}</p>
            <p class="rp-price">{id.default_price}</p>
          </div>)} */}
          {relprods.map((card, i) => {
          return <SingleProduct card={card} key={i} styles={styles}/>
          })}
      </div>

   <Outfit />
   </div>
  )

}

export default RelatedProducts;