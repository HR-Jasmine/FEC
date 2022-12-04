import axios from 'axios';

const headers = {'Authorization': process.env.API_KEY};

var getProductStyles = function(id, state, setState) {
  var url = process.env.URL + `/products/${id}/styles`;

  axios.get(url, {headers})
    .then(response => {
      var styles = response.data.results;

      setState({
        ...state,
        styles: styles,
        activeStyle: styles[0]
      })
      return response.data.results;
    });
};

var getImageURL = function(state) {
  if (state.activeStyle) {
    var photos = state.activeStyle.photos;
    var i = state.selectedPhoto;
    return photos[i].url;
  }

  return "https://www.petalrepublic.com/wp-content/uploads/2021/04/Ultimate-Guide-to-Jasmine-Flower-Meaning-Types-and-Uses.jpeg";
}

var helpers = {
  getProductStyles: getProductStyles,
  getImageURL: getImageURL
}

export default helpers;