import { galleryItems } from './gallery-items.js';
// Change code below this line

const ul = document.querySelector('.gallery');
    ul.addEventListener('click', onClick);

let currentBasicLightbox = null;

const galeryMarkup = galleryItems.map((image) => {
    const { preview, original, description } = image;
    return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li>`;
}).join('');

ul.insertAdjacentHTML('afterbegin', galeryMarkup);
function onClick(evt) {
    if (evt.target.nodeName !== 'IMG') {
        return;
    }
    evt.preventDefault();
    currentBasicLightbox = basicLightbox.create(`
        <img width="1400" height="900" src="${evt.target.dataset.source}">
    `, {
        onClose: (instance) => {
            document.removeEventListener('keydown', onEscPressed);
        }
    });
    currentBasicLightbox.show();
    document.addEventListener('keydown', onEscPressed);
}

function onEscPressed(evt) {
    if (evt.code === "Escape") {
        currentBasicLightbox.close();
    }
};
// console.log(galleryItems);




















