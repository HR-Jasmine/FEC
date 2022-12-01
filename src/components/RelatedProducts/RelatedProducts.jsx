import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/RelatedProducts/relatedProducts.css';


const RelatedProducts = ( { productId } ) => {
  console.log('RP PID from prop', productId)

  const [relatedId, setrelatedId] = useState([]);

  useEffect(() => {

    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productId}/related`,
  {
    headers: {
      'Authorization': process.env.API_KEY
    }
    })
    .then(data => {
      console.log('Example Related Products', data.data)
      // const array = [];
      // data.data.map(id => array.push(id) )
      setrelatedId(data.data);
      // console.log('array of RID', relatedId)


    })
    }, [productId])

    const getRelated = function (productId) {
     return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productId}/related`,
      {
        headers: {
          'Authorization': process.env.API_KEY
        }
        })
    }


  // console.log(array)
  console.log('relatedId from setState', relatedId)

  return (
    <div class='rp'>
      {relatedId.map((id, i) => <div key={i} class="relatedProducts" > {id} </div>)}
    </div>
  )

}

export default RelatedProducts;