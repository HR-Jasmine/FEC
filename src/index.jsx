import React from "react";
import { createRoot } from "react-dom/client";
import App from './components/App.jsx';
import axios from 'axios';

const url = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products";
const root = createRoot(document.getElementById("root"));
const headers = {'Authorization': process.env.API_KEY};

axios.get(url, {headers})
  .then(response => {
    root.render(<App product={response.data[0]}/>);
  });
