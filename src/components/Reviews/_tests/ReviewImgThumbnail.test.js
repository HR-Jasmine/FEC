/**
 * @jest-environment jsdom
 */

import {render, fireEvent, screen} from '@testing-library/react';

import React from 'react';
import ReviewImgThumbnail from '../ReviewImgThumbnail.jsx';

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

test('<ReviewImgThumbnail />', async() => {
  const {container} = render(<ReviewImgThumbnail photo={{"url": "http://res.cloudinary.com/dqmnjwd2c/image/upload/v1666310955/couch-meme_sr2lal.webp"}}/>);

  let imageTag = container.getElementsByClassName('review-image')[0];



  // expect the module to render
  expect(container).toBeTruthy();
  expect(imageTag.src).toBe("http://res.cloudinary.com/dqmnjwd2c/image/upload/v1666310955/couch-meme_sr2lal.webp");

})

