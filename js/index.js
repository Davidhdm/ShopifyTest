import { products } from './products/products.js';

let newInContainer = document.querySelector('.content__newIn');
let bestSellersContainer = document.querySelector('.content__bestSellers');

console.log('hola');

products.new_in_products.forEach((product) => {
  newInContainer.innerHTML += `

    <div class="content__productCard">
      <div class="productImgContainer">
        <img class="content__productImg" src="${product.img}" alt="${product.name}">
      </div>
      <span class="content__productName">${product.name}</span>
      <span class="content__productBrand">${product.brand}</span>
      <span class="content__productPrice">${product.price}</span>
      <a class="content__shopNowBtn" href="#">SHOP NOW
        <div class="lineAnimation"></div>
      </a>
    </div>`;
});

products.best_sellers.forEach((product) => {
  bestSellersContainer.innerHTML += `

    <div class="content__productCard">
      <div class="productImgContainer">
        <img class="content__productImg" src="${product.img}" alt="${product.name}">
      </div>
      <span class="content__productName">${product.name}</span>
      <span class="content__productBrand">${product.brand}</span>
      <span class="content__productPrice">${product.price}</span>
      <a class="content__shopNowBtn" href="#">SHOP NOW
        <div class="lineAnimation"></div>
      </a>
    </div>`;
});

let newIn_LeftBtn = document.querySelectorAll('.sliderLeftBtn')[0];
newIn_LeftBtn.addEventListener('click', function() {
  newInContainer.scrollLeft -= 850;
});

let newIn_RightBtn = document.querySelectorAll('.sliderRightBtn')[0];
newIn_RightBtn.addEventListener('click', () => {
  newInContainer.scrollLeft += 850;
});

let bestSellers_LeftBtn = document.querySelectorAll('.sliderLeftBtn')[1];
bestSellers_LeftBtn.addEventListener('click', function() {
  bestSellersContainer.scrollLeft -= 851;
});

let bestSellers_RightBtn = document.querySelectorAll('.sliderRightBtn')[1];
bestSellers_RightBtn.addEventListener('click', () => {
  bestSellersContainer.scrollLeft += 850;
});

console.log('hola');