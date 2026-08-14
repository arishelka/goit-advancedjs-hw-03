import axios from 'axios';

const API_KEY = '57022063-da2df4a93bd779678523c41d5';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
      timeout: 10000,
    })
    .then(response => response.data);
}
