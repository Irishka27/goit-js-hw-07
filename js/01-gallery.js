import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const gallery = document.querySelector('.gallery');
const imageMarcup = createGalleryMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', imageMarcup);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    }).join('');
    
};
gallery.addEventListener('click', onImageClick);
function onImageClick(e) {
    e.preventDefault();
    // if (!e.target.classList.contains('gallery__item')) {
    //     return;
    // }
    const image = e.target.dataset.source;
    const instance = basicLightbox.create(`
    <img src = "${image}" width = "800" height = "600">`);
    instance.show();
    document.addEventListener('keydown', onCloseModal);
    function onCloseModal(e) {
        if (e.code === 'Escape') {
            instance.close();
        }
    }
  
};


      
    

