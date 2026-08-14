import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

import './css/styles.css';

const formEl = document.querySelector('.form');
const inputEl = formEl.elements['search-text'];

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const query = inputEl.value.trim();

  if (query === '') {
    iziToast.warning({
      message: 'Please, fill in the search field!',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      if (!data.hits.length) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          maxWidth: 400,
        });
        return;
      }

      createGallery(data.hits);
    })
    .catch(() => {
      iziToast.error({
        message: 'Something went wrong. Please try again later!',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
      formEl.reset();
    });
}
