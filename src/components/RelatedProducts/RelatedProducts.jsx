import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/RelatedProducts/relatedProducts.css';
import Outfit from './Outfit.jsx'
import SingleProduct from './SingleProduct.jsx'
// import Modal from './Modal.jsx'


const RelatedProducts = ( { productId, product,} ) => {
  // console.log('productId', productId)
  // console.log('this is product', product)

  if (!product) {
    return null;
  }

  //list of all related id numbers
  const [relatedId, setrelatedId] = useState([]);
  //list of all related products info
  const [relprods, setrelprods] = useState([]);
  //list of styles info from related products
  const [styles, setstyles] = useState([])
  //list of all
  const [ratings, setratings] = useState([])

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
    getRelatedProducts(productId)
  }, [productId])


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
        relatedId.forEach(id => getProduct(id))
      }, [relatedId])

        // Gets style info (price/sales price, photos, )
        const getStylesInfo = function (PID) {
          axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${PID}/styles`,
           {
             headers: {
               'Authorization': process.env.API_KEY
             }
             })
             .then(response => {
              //  console.log('image', response.data)
               return setstyles(styles => ([...styles, response.data]))
             })
           }

          //  getStylesInfo(37318)
           useEffect(() => {
            relatedId.forEach(id => getStylesInfo(id))
          }, [relatedId])

           // gets review ratings for product
        const getReviews = function (id) {

          axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta?product_id=${id}`,
           {
             headers: {
               'Authorization': process.env.API_KEY
             }
         })
           .then(response => {
             return setratings(ratings => ([...ratings, response.data]));
           })}

           useEffect(() => {
            relatedId.forEach(id => getReviews(id))
          }, [relatedId])



      const productContainers = [...document.querySelectorAll('.product-container')];
      const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
      const preBtn = [...document.querySelectorAll('.pre-btn')];

      productContainers.forEach((item, i) => {
          let containerDimensions = item.getBoundingClientRect();
          let containerWidth = containerDimensions.width;

          nxtBtn[i].addEventListener('click', () => {
              item.scrollLeft += containerWidth;
          })

          preBtn[i].addEventListener('click', () => {
              item.scrollLeft -= containerWidth;
          })
      })



  return (
    <div>
      {/* <button>Show Modal</button>
      <Modal /> */}
      <h2 class="product-category">Related Products </h2>
    <section class="product">
      <button  class="pre-btn" >&#8592;</button>
      <button  class="nxt-btn">&#8594;</button>
      <div class="product-container">
          {relprods.map((card, i) => {
          return <SingleProduct card={card} key={i} styles={styles[i]} ratings={ratings[i]}/>
          })}
      </div>
      {/* <Outfit /> */}
   </section>
   </div>
  )

}

export default RelatedProducts;