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
        cool.push(getProduct(37312))
        cool.push(getProduct(37313))
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
    const nextClick = function () {
      // item.scrollLeft += containerWidth;
      document.querySelector('.product-card').scrollLeft += document.querySelector('.product-card').getBoundingClientRect().width
      console.log('onlickkdafsd')
    }

      const backClick = function () {
        document.querySelector('.product-card').scrollLeft -= document.querySelector('.product-card').getBoundingClientRect().width
        console.log('yabababa')
      }




  return (
    <div>
      <h2 class="product-category">Related Products </h2>
    <section class="product">
      <button onClick={ () => {backClick()}} class="pre-btn" >&#8592;</button>
      <button onClick={ () => {nextClick()}} class="nxt-btn">&#8594;</button>
      <div class="product-container">
          {relprods.map((card, i) => {
          return <SingleProduct card={card} key={i} styles={styles} />
          })}
      </div>
      <Outfit />
   </section>
   </div>
  )

}

export default RelatedProducts;