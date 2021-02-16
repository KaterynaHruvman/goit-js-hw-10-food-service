import galleryItem from '../templates/menu.hbs';
import menu from '../menu.json';

const  markUp = galleryItem(menu);
const galleryRef = document.querySelector('.js-menu');

galleryRef.insertAdjacentHTML('beforeend', markUp);