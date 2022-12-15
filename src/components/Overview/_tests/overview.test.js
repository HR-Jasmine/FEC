/**
 * @jest-environment jsdom
 */

import {render, screen, fireEvent} from '@testing-library/react';

import React from 'react';
import Overview from '../Overview.jsx';

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

var themes = {};

for (var i = 0; i < 5; i++) {
  themes['t' + i] = {a: `t${i}a`, b: `t${i}b`};
};

const testState = {
  productId: testProduct.id,
  product: testProduct,
  theme: 'a'
};

test('<Overview />', async() => {
  const {overview} = await render(<Overview product={testProduct} state={testState} setState={null} theme={testState.theme} themes={themes}/>);

  expect({overview}).toBeTruthy();

  const styleExists = await screen.findAllByText("Forest Green", {exact: false});
  expect(styleExists).toBeTruthy();

  const facebookExists = await screen.findAllByText("FaceBook");
  expect(facebookExists).toBeTruthy();

  const pinterestExists = await screen.findAllByText("Pinterest");
  expect(pinterestExists).toBeTruthy();

  const twitterExists = await screen.findAllByText("Twitter");
  expect(twitterExists).toBeTruthy();

  // fireEvent.click(screen.getByText('More Reviews'));
  // const newItems = await screen.findAllByText("Was this review helpful", {exact: false});
  // expect(newItems).toHaveLength(4);
})