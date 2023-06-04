import { galleryItems } from './gallery-items.js';
// Change code below this line


const ul = document.querySelector('.gallery');


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

const galleryLightBox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionsDelay: 250,
});


console.log(galleryItems);
