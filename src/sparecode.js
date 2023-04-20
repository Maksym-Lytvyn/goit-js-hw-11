// // робимо необхідні імпорти
// import Notiflix from "notiflix";
// import axios from "axios";

// // захоплюємо необхідні елементи
// const input = document.querySelector('.search-form');
// console.log(input);
// const submit = document.querySelector('.submit-btn');
// console.log(submit);
// const gallery = document.querySelector('.gallery');
// console.log(gallery);
// const loadMore = document.querySelector('.load-btn');
// console.log(loadMore);
// const buttonArea = document.querySelector('.button-area');
// console.log(buttonArea);

// // визначаємо початкові "лічильні" змінні
// let value;
// let page = 1;
// let perPage = 20;


// // виводимо рядок запиту з поля в функцію 
// input.addEventListener('input', (event) => {
//     value = event.target.value;
//     console.log(value);
//     if (value.length < 1){
//         gallery.innerHTML = '';
//         loadMore.classList.add('hidden');
//         Notiflix.Notify.warning('Результати пошуку скинуто')
//     }
// })


// // надсилаємо запит на сервер
// submit.addEventListener('click', (event) => {
//     event.preventDefault();
//     console.log(value);
//     fetch(`https://pixabay.com/api/?key=35499078-ae1aac6b87ed3c45ca8fde2a7&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}`)
//     .then(response => response.json())
//     .then(pictures => {
//         if (pictures.total === 0) {
//             Notiflix.Notify.failure('Вибачте, але за вашим пошуковим запитом не знайдено зображень. Спробуйте ще раз')
//         }
//         else {
//             Notiflix.Notify.success(`Пошук здійснено! Знайдено ${pictures.totalHits} зображень`);
//             console.log(pictures);
//             renderImagesGallery(pictures);
//             loadMore.classList.remove('hidden');
//         }
//         }
//         )
    
//     .catch(error => console.log(error));
    
// })


// // робимо ідентичний запит, але розширюючи об'єм результатів з кожним натисканням
// loadMore.addEventListener('click', () => {
//   perPage +=20
//   fetch(`https://pixabay.com/api/?key=35499078-ae1aac6b87ed3c45ca8fde2a7&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=${perPage}`)
//     .then(response => response.json())
//     .then(pictures => {
//         if (pictures.total === 0) {
//             Notiflix.Notify.failure('Вибачте, але за вашим пошуковим запитом не знайдено зображень. Спробуйте ще раз')
//         }
//         else if (pictures.hits.length === pictures.totalHits){
//           Notiflix.Notify.failure('Вибачте, але ліміт запитів вичерпано');
//         }
//         else {
//             console.log(pictures);
//             renderImagesGallery(pictures);
//             loadMore.classList.remove('hidden');
//         }
//         }
//         )
    
//     .catch(error => console.log(error));
// })


// // виводимо потрібні дані з масиву об'єктів та розкладаємо їх по тегах в шаблонній розмітці
// function renderImagesGallery(pictures){
//    gallery.innerHTML = pictures.hits.map((hit) => {
//     return `
//     <div class='all-cards'>
//     <div class="photo-card">
//     <img src='${hit.webformatURL}' alt="${hit.tags}" loading="lazy" />
//     <div class="info">
//       <p class="info-item">
//         <b>Вподобань: </b>
//         <br>
//         ${hit.likes}
//       </p>
//       <p class="info-item">
//         <b>Переглядів: </b>
//         <br>
//         ${hit.views}
//       </p>
//       <p class="info-item">
//         <b>Коментарів: </b>
//         <br>
//         ${hit.comments}
//       </p>
//       <p class="info-item">
//         <b>Завантажень: </b>
//         <br>
//         ${hit.downloads}
//       </p>
//     </div>
//   </div>
//   </div>
//   `
//    })
// }



// // Початкове сповіщення застосунку
// function Notify() {
//     Notiflix.Notify.info('Програма готова!');
// }

// Notify();