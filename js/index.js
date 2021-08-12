import { products } from './products/products.js';

let newInContainer = document.querySelector('.content__newIn');
let bestSellersContainer = document.querySelector('.content__bestSellers');

products.new_in_products.forEach((product) => {
  newInContainer.innerHTML += `

    <div class="content__productCard">
      <img class="content__productImg" src="${product.img}" alt="${product.name}">
      <span class="content__productName">${product.name}</span>
      <span class="content__productBrand">${product.brand}</span>
      <span class="content__productPrice">${product.price}</span>
      <a class="content__shopNowBtn" href="#">SHOP NOW
        <div class="lineAnimation"></div>
      </a>
    </div>`;
});