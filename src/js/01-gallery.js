// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';

// Change code below this line

const container = document.querySelector(".gallery");

function createMarkup(arr){
    return arr.map(({preview, original, description}) => `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`).join('')
};

container.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', { 
    captions: true,
    captionType:'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,

  });
  
