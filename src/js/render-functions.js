import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
        <li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img
              class="gallery-image"
              src="${webformatURL}"
              alt="${tags}"
              loading="lazy"
            />
          </a>
          <ul class="gallery-stats">
            <li class="gallery-stats-item">
              <span class="stats-label">Likes</span>
              <span class="stats-value">${likes}</span>
            </li>
            <li class="gallery-stats-item">
              <span class="stats-label">Views</span>
              <span class="stats-value">${views}</span>
            </li>
            <li class="gallery-stats-item">
              <span class="stats-label">Comments</span>
              <span class="stats-value">${comments}</span>
            </li>
            <li class="gallery-stats-item">
              <span class="stats-label">Downloads</span>
              <span class="stats-value">${downloads}</span>
            </li>
          </ul>
        </li>`
    )
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryEl.innerHTML = '';
}

export function showLoader() {
  loaderEl.classList.add('is-visible');
}

export function hideLoader() {
  loaderEl.classList.remove('is-visible');
}
