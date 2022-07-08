import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryBlockEl = document.querySelector(".gallery");

// Функція для створення карточки makeGalleryCard(cardInfo)

const makeGalleryCard = ({ preview, original, description } = {}) => {
  return `
    <div class="gallery__item">
  <a class="gallery__link" href="#">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
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

// import * as basicLightbox from "basiclightbox";

const onGalleryImgClick = (event) => {
  event.preventDefault();
  let instance;
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const bannerUrl = event.target.dataset.source;

  instance = basicLightbox.create(
    `<img src="${bannerUrl}" width="800" height="600">`
  );

  instance.show();
};

galleryBlockEl.addEventListener("click", onGalleryImgClick);
