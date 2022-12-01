import React from 'react';
import {useState} from 'react';
import '../styles/Overview/over.css';
import '../styles/style.css';

const OverviewInfo = (props) => {
  const [product, setProduct] = useState({
    id: null,
    category: 'Category',
    name: 'Name',
    slogan: 'This is a slogan. You can tell because it has many words. Enjoy!',
    description: 'This is a description. You can tell because it has even more words than the slogan.',
    default_price: '3.50'
  });

  if (props.product && !product.id) {
    setProduct(props.product);
  };

  return (
    <div className="interface v">
      <div className="rating">Rating Placeholder</div>
      {product.category}
      <h2>{product.name}</h2>
      {`$${product.default_price}`}
      <div className="styles">Styles Placeholder</div>
      <div className="selectors h">
        <select id="selectSize"></select>
        <select id="selectQuantity"></select>
      </div>
      <div className="productButtons h">
        <button id="addToCart">Add to Cart</button>
        <button id="addToFav"><div className='star'>★</div></button>
      </div>
    </div>
  )
}

export default OverviewInfo;