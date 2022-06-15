import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';
import galleryItemTpl from '../templates/galleryItem.hbs';

const galleryEl = document.querySelector('.gallery');
const markup = galleryItemTpl(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', markup);
galleryEl.addEventListener('click', onGalleryClick);

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function onGalleryClick(e) {
  e.preventDefault();

  if (!e.target.classList.contains('gallery__image')) {
    return;
  }
}
