import {cart, removeFromCart} from "../data/cart.js";
import { products } from "../data/products.js";
import { sharedCurrency } from "./utils/money.js";
import {deliveryOptions} from '../data/deliveryOptions.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';



let cartSummaryHTML = '';



cart.forEach((cartItem) => {
  const productId = cartItem.productId;

  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

const deliveryOptionId = cartItem.deliveryOptionId;

let deliveryOption;

deliveryOptions.forEach((option) => {
  if (option.id === deliveryOptionId) {
  deliveryOption = option;
  }
});



const today = dayjs();
const deliveryDate = today.add(deliveryOption.deliveryTime, 'days');
const formatDate = deliveryDate.format('dddd, MMMM D');

  cartSummaryHTML +=
  `
  <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
  <div class="delivery-date">
  Delivery date: ${formatDate}
</div>

<div class="cart-item-details-grid">
  <img class="product-image"
    src="${matchingProduct.image}">

  <div class="cart-item-details">
    <div class="product-name">
      ${matchingProduct.name}
    </div>
    <div class="product-price">
      $${sharedCurrency(matchingProduct.price)}
    </div>
    <div class="product-quantity">
      <span>
        Quantity: <span class="quantity-label">${cartItem.quantity}</span>
      </span>
      <span class="update-quantity-link link-primary">
        Update
      </span>
      <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
        Delete
      </span>
    </div>
  </div>

  <div class="delivery-options">
    <div class="delivery-options-title">
      Choose a delivery option:
    </div>
  ${deliveryOptionHTML(matchingProduct, cartItem)}
  </div>
</div>
</div>

  `
});

function deliveryOptionHTML(matchingProduct, cartItem) {
let html = '';

deliveryOptions.forEach((deliveryOption) =>{
  const today = dayjs();
    const deliveryDate = today.add(deliveryOption.deliveryTime, 'days');
  const formatDate = deliveryDate.format('dddd, MMMM D');
  const deliveryPrice = deliveryOption.deliveryPrice === 0
    ? 'FREE'
    : `$${sharedCurrency(deliveryOption.deliveryPrice)} -`;

    const isChecked = deliveryOption.id = cartItem.deliveryOptionId;
  html +=
  `
    <div class="delivery-option">
    <input type="radio"
    ${isChecked ? 'checked' : ''}
      class="delivery-option-input"
      name="delivery-option-${matchingProduct.id}">
    <div>
      <div class="delivery-option-date">
       ${formatDate}
      </div>
      <div class="delivery-option-price">
        ${deliveryPrice} - Shipping
      </div>
    </div>
  </div>
  `
});
return html;
}

function updateDisplayQuantity() {
  let cartQuantity = 0;
    cart.forEach((cartItem) =>{
      cartQuantity += cartItem.quantity;
    });

    document.querySelector('.js-checkout-class').innerHTML = `${cartQuantity} items`;
};



document.querySelector('.js-summary').innerHTML = cartSummaryHTML;


document.querySelectorAll('.js-delete-link')
      .forEach((link) =>{
        link.addEventListener('click', () =>{
        const productId = link.dataset.productId;
        removeFromCart(productId);


      const container = document.querySelector(
          `.js-cart-item-container-${productId}`
          );
        container.remove();

        updateDisplayQuantity();

        });



  });



document.querySelectorAll('.js-delivery-option').forEach((element) =>{
  element.addEventListener('click', () => {
    const {productId, dOptionId} = element.dataset;
    updateDeliveryOptions(productId, dOptionId);
  })
});
updateDisplayQuantity();