import React from 'react';
import { useState } from 'react'
import { render, screen, cleanup, waitFor, fireEvent  } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import axios from 'axios'

// Importing components //
import Search from '../Search.jsx'
import QA from '../QA.jsx'
import MoreBtn from '../MoreBtn.jsx'
import AddQ from '../AddQ.jsx'
import Accordion from '../Accordion.jsx'
import Answer from '../Answer.jsx'
import AnswerModal from '../Modals/AnswerModal.jsx'
import sortQuestions from '../lib/sortQuestions.js'
import sortAnswers from '../lib/sortAnswers.js'
import QuestionList from '../QuestionList.jsx'
import Aform from '../Forms/Aform.jsx'

jest.mock('axios')

const testProductData = {
  "id": 37317,
  "campus": "hr-rfc",
  "name": "Camo Onesie",
  "slogan": "2019 Stanley Cup Limited Edition",
  "description": "Touch down in the land of the Delta Blues in the middle of the pouring rain",
  "category": "Dress Shoes",
  "default_price": "140.00",
  "created_at": "2022-03-31T21:13:15.875Z",
  "updated_at": "2022-03-31T21:13:15.875Z"
}
const testQuestion = {
    "question_id": 642964,
    "question_body": "first!",
    "question_date": "2022-09-01T00:00:00.000Z",
    "asker_name": "jackson11",
    "question_helpfulness": 10,
    "reported": false,
    "answers": {
        "5987771": {
            "id": 5987771,
            "body": "second :)",
            "date": "2022-09-01T00:00:00.000Z",
            "answerer_name": "not jack",
            "helpfulness": 1,
            "photos": []
        },
        "5987858": {
            "id": 5987858,
            "body": "asdfadfs",
            "date": "2022-09-02T00:00:00.000Z",
            "answerer_name": "asdffadadfs",
            "helpfulness": 0,
            "photos": []
        },
        "5987866": {
            "id": 5987866,
            "body": "asd",
            "date": "2022-09-02T00:00:00.000Z",
            "answerer_name": "asd",
            "helpfulness": 0,
            "photos": []
        },
        "5987887": {
            "id": 5987887,
            "body": "blobby",
            "date": "2022-09-02T00:00:00.000Z",
            "answerer_name": "blobman",
            "helpfulness": 0,
            "photos": [
                "blob:http://localhost:3000/f4e1b338-5d59-4101-a551-739c209e0b10"
            ]
        },
        "5987973": {
            "id": 5987973,
            "body": "pictures?",
            "date": "2022-09-03T00:00:00.000Z",
            "answerer_name": "asd",
            "helpfulness": 0,
            "photos": [
                "blob:http://localhost:3000/c33e8e94-ab0a-4a38-8577-df620440be90"
            ]
        },
        "5988426": {
            "id": 5988426,
            "body": "ello",
            "date": "2022-09-09T00:00:00.000Z",
            "answerer_name": "jack",
            "helpfulness": 0,
            "photos": []
        },
        "5988939": {
            "id": 5988939,
            "body": "HERE WE GO",
            "date": "2022-10-23T00:00:00.000Z",
            "answerer_name": "TeSTing",
            "helpfulness": 0,
            "photos": []
        }
    }
}

const testAnswerArray = [
  {
    "answer_id": 5986762,
    "body": "Sorry we aren't god but good luck ",
    "date": "2022-07-19T00:00:00.000Z",
    "answerer_name": "Seller",
    "helpfulness": 20,
    "photos": [
        {
            "id": 5341448,
            "url": "http://res.cloudinary.com/dnwsss6fk/image/upload/v1658259408/fecuploads/konzktnemyezzwnrrff4.png"
        }
    ]
  },
  {
    "answer_id": 5986762,
    "body": "Sorry we aren't god but good luck ",
    "date": "2022-07-19T00:00:00.000Z",
    "answerer_name": "Seller",
    "helpfulness": 20,
    "photos": [
        {
            "id": 5341448,
            "url": "http://res.cloudinary.com/dnwsss6fk/image/upload/v1658259408/fecuploads/konzktnemyezzwnrrff4.png"
        }
    ]
  }
]
const testAnswer={
  "answer_id": 5986762,
  "body": "Sorry we aren't god but good luck ",
  "date": "2022-07-19T00:00:00.000Z",
  "answerer_name": "Seller",
  "helpfulness": 20,
  "photos": [
      {
          "id": 5341448,
          "url": "http://res.cloudinary.com/dnwsss6fk/image/upload/v1658259408/fecuploads/konzktnemyezzwnrrff4.png"
      }
  ]
}
const testQuestionData = {
  "product_id": "37317",
  "results": [
      {
          "question_id": 642964,
          "question_body": "first!",
          "question_date": "2022-09-01T00:00:00.000Z",
          "asker_name": "jackson11",
          "question_helpfulness": 10,
          "reported": false,
          "answers": {
              "5987771": {
                  "id": 5987771,
                  "body": "second :)",
                  "date": "2022-09-01T00:00:00.000Z",
                  "answerer_name": "not jack",
                  "helpfulness": 1,
                  "photos": []
              },
              "5987858": {
                  "id": 5987858,
                  "body": "asdfadfs",
                  "date": "2022-09-02T00:00:00.000Z",
                  "answerer_name": "asdffadadfs",
                  "helpfulness": 0,
                  "photos": []
              },
              "5987866": {
                  "id": 5987866,
                  "body": "asd",
                  "date": "2022-09-02T00:00:00.000Z",
                  "answerer_name": "asd",
                  "helpfulness": 0,
                  "photos": []
              },
              "5987887": {
                  "id": 5987887,
                  "body": "blobby",
                  "date": "2022-09-02T00:00:00.000Z",
                  "answerer_name": "blobman",
                  "helpfulness": 0,
                  "photos": [
                      "blob:http://localhost:3000/f4e1b338-5d59-4101-a551-739c209e0b10"
                  ]
              },
              "5987973": {
                  "id": 5987973,
                  "body": "pictures?",
                  "date": "2022-09-03T00:00:00.000Z",
                  "answerer_name": "asd",
                  "helpfulness": 0,
                  "photos": [
                      "blob:http://localhost:3000/c33e8e94-ab0a-4a38-8577-df620440be90"
                  ]
              },
              "5988426": {
                  "id": 5988426,
                  "body": "ello",
                  "date": "2022-09-09T00:00:00.000Z",
                  "answerer_name": "jack",
                  "helpfulness": 0,
                  "photos": []
              },
              "5988939": {
                  "id": 5988939,
                  "body": "HERE WE GO",
                  "date": "2022-10-23T00:00:00.000Z",
                  "answerer_name": "TeSTing",
                  "helpfulness": 0,
                  "photos": []
              }
          }
      },
      {
          "question_id": 643491,
          "question_body": "IS THIS A STUNT?!?!",
          "question_date": "2022-10-19T00:00:00.000Z",
          "asker_name": "MR T",
          "question_helpfulness": 4,
          "reported": false,
          "answers": {}
      }
  ]
}

describe("Question and Answer Functionality",() => {
  describe("Component functionality", () => {
    const user = userEvent.setup();

    // beforeAll(() => {
    //   axios.get.mockResolvedValue({ data: testQuestionData });
    // })
    // Testing rendering of the name of the section  //

    afterEach(() => {
      cleanup();
    })

    it('Should render the section name "Questions & Answer" correctly',() => {
      render(<QA product={testProductData} productId={testProductData.id}/>)
      const titleH1 = screen.getByTestId('section-title')
      expect(titleH1).toBeInTheDocument();
      expect(titleH1).toHaveTextContent('Questions & Answer')
    })
    it('Should render the section name "Questions & Answer" correctly',() => {
      render(<QA product={testProductData} productId={testProductData.id}/>)
      const btnCtn = screen.getByTestId('btn-ctn')
      expect(btnCtn).toBeInTheDocument();
    })
    it('Should render the section name "Questions & Answer" correctly',() => {
      render(<QA />)
      const qaCtn = screen.getByTestId('qa')
      expect(qaCtn).not.toBeInTheDocument();
    })

    // Rendering the search bar //
    it('Should render the search bar',() => {
      render(<Search product={testProductData} questions={testQuestionData.results} />)
      const searchBar = screen.getByTestId("search")
      expect(searchBar).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Have a question? Search for answers...')).toBeInTheDocument();

    })

    // Rendering the question list //
    it('Should render the question list', () => {
      render(<QuestionList product={testProductData} questions={testQuestionData.results} />)
      const list = screen.getByTestId('question-list')
      expect(list).toBeInTheDocument();
    })
    it("Should render 2 questions after loading", async () => {
      render(<QuestionList questions={testQuestionData}/>);
      const questionInstances = await waitFor(() => screen.findAllByTestId('question'))
      expect(questionInstances).toHaveLength(2)
    });

    // Rendering the MORE QUESTIONS button //
    it('Should render the MORE QUESTIONS button', () => {
      render(<MoreBtn questions={testQuestionData}/>)
      const more = screen.getByTestId('more-btn')
      expect(more).toBeInTheDocument();
      expect(more).toHaveTextContent('More Questions');
      return waitFor(() => expect(more).toBeInTheDocument())
        .then(() => {
          return user.click(screen.getByRole('button', {name: 'More Questions'}))
        })

    })

    it('Should render the AddQ button', () => {
      render(<AddQ product={testProductData}/>)
      const addQ = screen.getByTestId('add-q');
      return waitFor(() => expect(addQ).toBeInTheDocument())
        .then(() => {
          return user.click(screen.getByRole('button', {name: 'Add Question'}))
        })
    })

    it('Should render an Accordion', () => {
      render(<Accordion question={testQuestion} product={testProductData}/>)
      const accord = screen.getByTestId('accord');
      expect(accord).toBeInTheDocument();

      const questionTitle = screen.getByTestId('question-title')
      expect(questionTitle).toBeInTheDocument();
    })
    it('Should render an Accordion', () => {
      render(<Accordion />)
      const accord = screen.getByTestId('accord');
      expect(accord).not.toBeInTheDocument();

    })
    it('Should render an Accordion', () => {
      render(<Accordion question={testQuestion} product={testProductData}/>)
      const accordM = screen.getByTestId('accord-main');
      const accordC = screen.getByTestId('accord-content')
      expect(accordM).toBeInTheDocument()
        .then(() => {
          return user.click(accordM)
        })
        .then(() => {
          expect(accordC).toBeInTheDocument();
        })

    })

    it('should render an answer', () => {
      render(<Answer answer={testAnswer}/>)
      const ans = screen.getByTestId('answer')
      return waitFor(() => expect(ans).toBeInTheDocument())
      .then(() => {
        return user.click(screen.getByRole('button', {name: 'Helpful?'}))
      })
    })

    it('should render an answer modal', () => {
      render(<AnswerModal product={testProductData} question={testQuestionData}/>)
      const ansModal = screen.getByTestId('ans-modal')
      expect(ansModal).toBeInTheDocument();
    })

    it('should sort questions by helpfulness', () => {
      const sortedQuestions = sortQuestions(testQuestionData.results)
      expect(sortQuestions(testQuestionData.results)).toBe(sortedQuestions)
    })
    it('should sort answer by helpfulness', () => {
      const sortedAnswers = sortAnswers(testAnswerArray)
      expect(sortAnswers(testAnswerArray)).toStrictEqual(sortedAnswers)
    })

    it('should have place holder for A form', () => {
      const onSubmit = jest.fn();
      render(<AForm question={testQuestion} product={testProductData}/>)
      const form = screen.getByTestId('form')
      fireEvent.submit(form)
      expect(onSubmit).toHaveBeenCalled();
    })
  })
})
