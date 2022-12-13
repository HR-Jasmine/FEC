/**
 * @jest-environment jsdom
 */

import {render, fireEvent, screen} from '@testing-library/react';

import React from 'react';
import Reviews from '../Reviews.jsx';

var themes = {};

for (var i = 0; i < 5; i++) {
  themes['t' + i] = {a: `t${i}a`, b: `t${i}b`};
};

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

test('<Reviews />', async() => {
  render(<Reviews productId={testProduct.id} product={testProduct} theme={'a'} themes={themes}/>);


  //initially renders with 2 reviews
  const items = await screen.findAllByText("Was this review helpful", {exact: false})
  expect(items).toHaveLength(2);


  // Add two reviews when clicked
  fireEvent.click(screen.getByText('More Reviews'));
  const newItems = await screen.findAllByText("Was this review helpful", {exact: false});
  expect(newItems).toHaveLength(4);

  // // Reset to two reviews when changing sorting
  fireEvent.click(screen.getByText('3 Stars', {exact: false}));
  const sortedItems = await screen.findAllByText("Was this review helpful", {exact: false});
  expect(sortedItems).toHaveLength(2);
})

