'use strict';
let totalPrice = 0;
document.addEventListener('DOMContentLoaded', init);

function addToCart() {
  const countTag = document.getElementById('cart-count'),
        totalPriceTag = document.getElementById('cart-total-price');
  
  countTag.innerHTML = Number(countTag.innerHTML) + 1;
  totalPrice += Number(this.dataset.price);
  totalPriceTag.innerHTML = getPriceFormatted(totalPrice);
};

function init() {
  const buttons = document.getElementsByClassName('add'); 
  
  Array.from(buttons).forEach((button) => {
    button.addEventListener('click', addToCart);
  });
};