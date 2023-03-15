//hàm show hide Element
const titleCategory = document.getElementById('title-category');
titleCategory.addEventListener('click', () => toggleClass('title-category'));

const titleBrand = document.getElementById('title-brand');
titleBrand.addEventListener('click', () => toggleClass('title-brand'));

const titlePrice = document.getElementById('title-price');
titlePrice.addEventListener('click', () => toggleClass('title-price'));

const titleElectron = document.getElementById('title-electron');
titleElectron.addEventListener('click', () => toggleClass('title-electron'));

function toggleClass(elementId) {
   const element = document.getElementById(elementId);
   if (element.classList.contains('show')) {
      element.classList.remove('show');
   } else {
      element.classList.add('show');
   }
}

// hàm lăn chọn giá

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
      }
   });
});
