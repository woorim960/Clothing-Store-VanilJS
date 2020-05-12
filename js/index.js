'use strict';

const logoBtn = document.querySelector('.main-title .logo'),
  clothingBtns = document.querySelectorAll('.main-title .nav .clothing-btn'),
  clothingList = Array.from(document.querySelectorAll('.main-view .clothing-list'))[0].children;

function reload() {
  location.reload();
}

function showSlectedClothing(event) {
  const btn = event.target;
  
  for (let clothing of clothingList) {
    let img = clothing.childNodes[1];
    if (img.classList.contains(btn.id)) {
      clothing.classList.remove('deactivate');
    } else {
      clothing.classList.add('deactivate');
    }
  }
}

function init() {
  logoBtn.addEventListener('click', reload);
  Array.from(clothingBtns).forEach(clothingBtn => {
    addEventListener('click', showSlectedClothing);
  });
}

init();