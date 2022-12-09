import unique from 'unique-selector';
import axios from 'axios';

const interaction = (element, module) => {
  const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/interactions';
  const headers = {'Authorization': process.env.API_KEY};
  const time = new Date();
  const data = {
    "element": unique(element),
    "widget": module,
    "time": String(time)
  }


  axios.post(url, data, {headers});
}

export default interaction;