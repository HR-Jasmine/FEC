/**
 * @jest-environment jsdom
 */

import {render, fireEvent, screen} from '@testing-library/react';

import React from 'react';
import {useState} from 'react';
import IndividualReview from '../IndividualReview.jsx';

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

test('<IndividualReview />', async() => {
  let beenClicked = {"1277407": false};
  const setBeenClicked = () => {
    beenClicked = {"1277407": true};
  }
  const {container} = render(<IndividualReview review={testReview} beenClicked={beenClicked} setBeenClicked={setBeenClicked} theme={'a'} themes={themes} key={i}/>);

  // Individual Review is rendering with summary
  const summary = await screen.findAllByText("Great outfit", {exact: false})
  expect(summary).toHaveLength(1);

  //Individual review is rendering with body
  const body = await screen.findAllByText("Very comfortable!", {exact: false})
  expect(body).toHaveLength(1);

  fireEvent.click(screen.getByText('Yes', {exact: false}));
  expect(beenClicked['1277407']).toBe(true);
})

test('<IndividualReview />', async() => {
  let beenClicked = {"1277407": false};
  const setBeenClicked = () => {
    beenClicked = {"1277407": true};
  }
  const {container} = render(<IndividualReview review={testReview} beenClicked={beenClicked} setBeenClicked={setBeenClicked} theme={'a'} themes={themes} key={i}/>);

  // Individual Review is rendering with summary
  const summary = await screen.findAllByText("Great outfit", {exact: false})
  expect(summary).toHaveLength(1);

  //Individual review is rendering with body
  const body = await screen.findAllByText("Very comfortable!", {exact: false})
  expect(body).toHaveLength(1);

  fireEvent.click(screen.getByText('No', {exact: false}));
  expect(beenClicked['1277407']).toBe(true);
})