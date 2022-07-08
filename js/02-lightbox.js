import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryBlockEl = document.querySelector(".gallery");

// Функція для створення карточки makeGalleryCard(cardInfo)

const makeGalleryCard = ({ preview, original, description } = {}) => {
  return `
    <div class="gallery__item">
        <a href="${original}">
            <img class="gallery__image" 
            src="${preview}" 
            alt="${description}" />
        </a>
    </div>
  `;
};

// Створення масиву рядків із елементами
const galleryCardsArr = galleryItems.map((el) => {
  return makeGalleryCard(el);
});

// Вставка елементів на сторінку
galleryBlockEl.insertAdjacentHTML("afterbegin", galleryCardsArr.join(""));

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
