const titleCategory = document.getElementById('title-category');
titleCategory.addEventListener('click', myFunction);

function myFunction() {
   if (titleCategory.classList.contains('show')) {
      titleCategory.classList.remove('show');
   } else {
      titleCategory.classList.add('show');
   }
}

const titleBrand = document.getElementById('title-brand');
titleBrand.addEventListener('click', brandFunction);

function brandFunction() {
   if (titleBrand.classList.contains('show')) {
      titleBrand.classList.remove('show');
   } else {
      titleBrand.classList.add('show');
   }
}

const titlePrice = document.getElementById('title-price');
titlePrice.addEventListener('click', priceFunction);

function priceFunction() {
   if (titlePrice.classList.contains('show')) {
      titlePrice.classList.remove('show');
   } else {
      titlePrice.classList.add('show');
   }
}

const titleElectron = document.getElementById('title-electron');
titleElectron.addEventListener('click', electronFunction);

function electronFunction() {
   if (titleElectron.classList.contains('show')) {
      titleElectron.classList.remove('show');
   } else {
      titleElectron.classList.add('show');
   }
}

// const rangeInput = document.querySelectorAll('.range-input input');
// const progress = document.querySelector('.slide .progress');

// let priceGap = 200;

// rangeInput.forEach((input) => {
//    input.addEventListener('input', (e) => {
//       let minVal = parseInt(rangeInput[0].value),
//          maxVal = parseInt(rangeInput[1].value),
//          sub = maxVal - minVal;

//       if (sub < priceGap) {
//          if (e.target.className === 'range-min') {
//             rangeInput[0].value = maxVal - priceGap;
//          } else {
//             rangeInput[1].value = minVal + priceGap;
//          }
//       } else {
//          progress.style.left = (minVal / rangeInput[0].max) * 100 + '%';
//          progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + '%';
//       }
//    });
// });

const rangeInput = document.querySelectorAll('.range-input input');
const progress = document.querySelector('.slide .progress');
const priceInput = document.querySelectorAll('.price-input input');

let priceGap = 200;

rangeInput.forEach((input) => {
   input.addEventListener('input', (e) => {
      let minVal = parseInt(rangeInput[0].value),
         maxVal = parseInt(rangeInput[1].value),
         sub = maxVal - minVal;

      if (sub < priceGap) {
         if (e.target.className === 'range-min') {
            rangeInput[0].value = maxVal - priceGap;
         } else {
            rangeInput[1].value = minVal + priceGap;
         }
      } else {
         priceInput[0].value = minVal;
         priceInput[1].value = maxVal;
         // progress.style.width.left = (minVal / rangeInput[0].max) * 100 + '%';
         // progress.style.width.right = 100 - (maxVal / rangeInput[1].max) * 100 + '%';
      }
   });
});
