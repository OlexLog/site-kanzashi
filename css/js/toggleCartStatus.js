function toggleCartStatus() {
  const cartWrapper = document.querySelector('.cart-wrapper');
  const cartEmptyBadge = document.querySelector('[data-cart-empty]');

  const orderform = document.querySelector('#order-form');

  if (cartWrapper.children.length > 0) {
    console.log('Full');

    cartEmptyBadge.classList.add('none');
    orderform.classList.remove('none');
  } else {
    console.log('Empty');
    cartEmptyBadge.classList.remove('none');
    orderform.classList.add('none');
  }
}


