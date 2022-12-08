/**
 * @jest-environment jsdom
 */

 import {render, screen} from '@testing-library/react';

 import React from 'react';
 import RelatedProducts from '../RelatedProducts.jsx';

 var testProduct = {
     "id": 37311,
     "campus": "hr-rfe",
     "name": "Camo Onesie",
     "slogan": "Blend in to your crowd",
     "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
     "category": "Jackets",
     "default_price": "140.00",
     "created_at": "2021-08-13T14:37:33.145Z",
     "updated_at": "2021-08-13T14:37:33.145Z"
 };

 test('Testing works.', function() {
   var num = -1;

   expect(true).toBe(true);
   expect(num > 0).toBe(false);
 })

 test('<RelatedProducts />', async() => {
   var RelatedProductsTest = render(<RelatedProducts product={testProduct}/>);

   expect(RelatedProductsTest).toBeTruthy();
 })