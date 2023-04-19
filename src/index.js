// робимо необхідні імпорти
import Notiflix from "notiflix";
import axios from "axios";

// захоплюємо необхідні елементи
const input = document.querySelector('.search-form');
console.log(input);
const submit = document.querySelector('.submit-btn');
console.log(submit);
const gallery = document.querySelector('.gallery');
console.log(gallery);
const button = document.querySelector('.button');
console.log(button);

let value;
// виводимо рядок запиту з поля в функцію 
input.addEventListener('input', (event) => {
    value = event.target.value;
    console.log(value);
    if (value.length < 1){
        gallery.innerHTML = '';
        button.innerHTML = '';
        Notiflix.Notify.warning('Результати пошуку скинуто')
    }
})


// надсилаємо запит на сервер
submit.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(value);
    fetch(`https://pixabay.com/api/?key=35499078-ae1aac6b87ed3c45ca8fde2a7&q=${value}&image_type=photo&orientation=horizontal&safesearch=true`)
    .then(response => response.json())
    .then(pictures => {
        if (pictures.total === 0) {
            Notiflix.Notify.failure('Вибачте, але за вашим пошуковим запитом не знайдено зображень. Спробуйте ще раз')
        }
        else {
            Notiflix.Notify.success(`Пошук здійснено! Знайдено ${pictures.totalHits} зображень`);
            console.log(pictures);
            renderImagesGallery(pictures);
        }
        }
        )
    
    .catch(error => console.log(error));
    
})

function renderImagesGallery(pictures){
   gallery.innerHTML = pictures.hits.map((hit) => {
    return `
    <div class='all-cards'>
    <div class="photo-card">
    <img src='${hit.webformatURL}' alt="${hit.tags}" loading="lazy" />
    <div class="info">
      <p class="info-item">
        <b>Вподобань: </b>
        <br>
        ${hit.likes}
      </p>
      <p class="info-item">
        <b>Переглядів: </b>
        <br>
        ${hit.views}
      </p>
      <p class="info-item">
        <b>Коментарів: </b>
        <br>
        ${hit.comments}
      </p>
      <p class="info-item">
        <b>Завантажень: </b>
        <br>
        ${hit.downloads}
      </p>
    </div>
  </div>
  </div>
  `
   })
   button.innerHTML = `<button class='load-btn'>Завантажити ще</button>`;
}




function Notify() {
    Notiflix.Notify.info('Програма готова!');
}

Notify();