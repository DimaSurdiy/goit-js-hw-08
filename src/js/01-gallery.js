import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

createGalleryItemsMarkup();

galleryEl.addEventListener('click', onGalleryItemsClick);

function createGalleryItemsMarkup() {
  const galleryMarkup = galleryItems
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
        </a>
    `;
    })
    .join('');

  galleryEl.innerHTML = galleryMarkup;
}

function onGalleryItemsClick(event) {
  event.preventDefault();

  var lightbox = new SimpleLightbox('.gallery a');
}
