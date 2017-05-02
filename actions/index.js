import axios from 'axios';

export const REQUEST_GIFS = 'request_gifs';
export const OPEN_MODAL = 'open_modal';
export const CLOSE_MODAL = 'close_modal';

const API_URL = 'http://api.giphy.com/v1/gifs/search?q=';
const API_KEY = '&api_key=dc6zaTOxFJmzC';

export const requestGifs = (term = null) => async dispatch => {
  let data = await axios.get(`${API_URL}${term.replace(/\s/g, '+')}${API_KEY}`);

   dispatch({
    type: REQUEST_GIFS,
    payload: data
  })
}

export const openModal = (gif) => {
  return {
    type: OPEN_MODAL,
    gif
  }
} 

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  }
}