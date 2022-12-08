import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/RelatedProducts/relatedProducts.css';
import Outfit from './Outfit.jsx'
import SingleProduct from './SingleProduct.jsx'
// import Modal from './Modal.jsx'


const RelatedProducts = ( { productId, changeId } ) => {
  // console.log('productId', productId)

  if (!productId) {
    return null;
  }

  const [relatedId, setrelatedId] = useState([]);
  const [relprods, setrelprods] = useState([]);
  const [ratings, setRatings] = useState(null)
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
    .then(data => {
      console.log(data.data);
      setrelatedId(data.data);
    })
  }

  useEffect(() => {
  getRelatedProducts(productId);
  }, [productId])
  // console.log('relatedId from setState', relatedId)

  // want to get individual product obj with info
  // add result obj to array in relprods
    const getProduct = function (sku) {


     axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productId}`,
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

      useEffect(() => {
        const test = []
        // relatedId.forEach(id => {
        //   console.log(id);
        //   test.push(getProduct(id));
        // })
        test.push(getProduct(37318))
        test.push(getProduct(37313))
        test.push(getProduct(37312))
        test.push(getProduct(37313))
        test.push(getProduct(37312))
        // console.log(test)

        }, [productId])

        // console.log('relprods from state', relprods)

        // Gets style info (price/sales price, photos, )
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

           // gets review ratings for product
        const getReviews = function (id) {

          useEffect(() => {
          axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta?product_id=${id}`,
           {
             headers: {
               'Authorization': process.env.API_KEY
             }
         })
           .then(response => {
             setRating(response.data);
           })
          }),[productId]}

    // const nextClick = function () {
    //   // item.scrollLeft += containerWidth;
    //   document.querySelector('.product-card').scrollLeft += document.querySelector('.product-card').getBoundingClientRect().width
    //   console.log('onlickkdafsd')
    // }

    //   const backClick = function () {
    //     document.querySelector('.product-card').scrollLeft -= document.querySelector('.product-card').getBoundingClientRect().width
    //     console.log('yabababa')
    //   }
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
        <div className="related-products-buttons">
          {relatedId.map(id => {
            return (
              <div classname="related-button">
                <button onClick={(e) => {
                  e.preventDefault();
                  changeId(id);
                }}>
                  {id}
                </button>
              </div>
            );
          })}
        </div>
        );

  // return (
  //   <div>
  //     {/* <button>Show Modal</button>
  //     <Modal /> */}
  //     <h2 className="product-category">Related Products </h2>
  //   <section className="product">
  //     <button  className="pre-btn" >&#8592;</button>
  //     <button  className="nxt-btn">&#8594;</button>
  //     <div className="product-container">
  //         {relprods.map((card, i) => {
  //         return <SingleProduct card={card} key={i} styles={styles} />
  //         })}
  //     </div>
  //  </section>
  //  </div>
  // )

}

export default RelatedProducts;