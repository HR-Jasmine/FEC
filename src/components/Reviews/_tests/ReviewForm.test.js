/**
 * @jest-environment jsdom
 */

import {render, fireEvent, screen} from '@testing-library/react';
import jest from '@jest/globals';

import React from 'react';
import {useState} from 'react';
import ReviewForm from '../ReviewForm.jsx';


function fakeAlert () {};
window.alert = fakeAlert;


var themes = {};

for (var i = 0; i < 5; i++) {
  themes['t' + i] = {a: `t${i}a`, b: `t${i}b`};
};

var testReview = {
  "review_id": 1277407,
  "rating": 2,
  "summary": "Great outfit",
  "recommend": true,
  "response": null,
  "body": "Very comfortable!",
  "date": "2022-10-28T00:00:00.000Z",
  "reviewer_name": "Brian123",
  "helpfulness": 5,
  "photos": [
      {
          "id": 2456642,
          "url": "http://res.cloudinary.com/dmmzqckuu/image/upload/v1666985076/zcfhcxavufcg3hijsqsc.jpg"
      }
  ]
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

var testMeta = {
  "product_id": "37311",
  "ratings": {
      "1": "53",
      "2": "32",
      "3": "88",
      "4": "133",
      "5": "311"
  },
  "recommended": {
      "false": "105",
      "true": "512"
  },
  "characteristics": {
      "Fit": {
          "id": 125031,
          "value": "3.1051344743276284"
      },
      "Length": {
          "id": 125032,
          "value": "3.1374407582938389"
      },
      "Comfort": {
          "id": 125033,
          "value": "3.2253164556962025"
      },
      "Quality": {
          "id": 125034,
          "value": "3.2590673575129534"
      }
  }
}

var themes = {};

for (var i = 0; i < 5; i++) {
  themes['t' + i] = {a: `t${i}a`, b: `t${i}b`};
};

test('Testing works.', function() {
  var num = -1;

  expect(true).toBe(true);
  expect(num > 0).toBe(false);
})

test('<ReviewForm />', async() => {
  const {container} = render(<ReviewForm showForm={true} testing={true} product={testProduct} onClose={() => {}} metaData={testMeta}/>);

  const item = await screen.findAllByText("Camo Onesie", {exact: false})
  expect(item).toHaveLength(1);

  let metaTags = container.getElementsByClassName('char-holder');
  expect(metaTags.length).toBe(4);

  const minimum = await screen.findAllByText("Minimum", {exact: false})
  expect(item).toHaveLength(1);

  fireEvent.click(screen.getByText('Submit'));
  fireEvent.click(screen.getByText('Close'));
})
