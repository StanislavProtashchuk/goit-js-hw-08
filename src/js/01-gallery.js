// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
import galleryTpl from '../templates/gallery.hbs';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createGallery(galleryItems) {
    return galleryItems.map(galleryTpl).join('');    
}

let gallery = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250,});