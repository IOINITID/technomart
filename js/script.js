// modals
var mapButton = document.querySelector('.contacts__map-button');
var map = document.querySelector('.map-popup');
var closeModalMap = document.querySelector('.close-button-map');
var writeUsButton = document.querySelector('.contacts__link');
var writeUsPopup = document.querySelector('.write-us');
var closeModalInfo = document.querySelector('.close-button-info');
var cartButtons = document.querySelectorAll('.item__buy');
var cart = document.querySelector('.cart-popup');
var closeModalCart = document.querySelector('.close-button-cart');

if (mapButton) {
  mapButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    map.classList.remove('hide');
  });
}
if (closeModalMap) {
  closeModalMap.addEventListener('click', function (evt) {
    evt.preventDefault();
    map.classList.add('hide');
  });
  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      map.classList.add('hide');
    }
  });
}
if (writeUsButton) {
  writeUsButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    writeUsPopup.classList.remove('hide');
  });
}
if (closeModalInfo) {
  closeModalInfo.addEventListener('click', function (evt) {
    evt.preventDefault();
    writeUsPopup.classList.add('hide');
  });
  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      writeUsPopup.classList.add('hide');
    }
  });
}
if (cartButtons) {
  document.addEventListener("DOMContentLoaded", function () {
    for (var i = 0; i < cartButtons.length; i++) {
      cartButtons[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        cart.classList.remove('hide');
      });
    }
  });
}
if (closeModalCart) {
  closeModalCart.addEventListener('click', function (evt) {
    evt.preventDefault();
    cart.classList.add('hide');
  });
  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      cart.classList.add('hide');
    }
  });
}
// tabs
var deliverLink = document.querySelector('.features__link-deliver');
var guaranteeLink = document.querySelector('.features__link-guarantee');
var creditLink = document.querySelector('.features__link-credit');
var deliverBlock = document.querySelector('.features__deliver');
var guaranteeBlock = document.querySelector('.features__guarantee');
var creditBlock = document.querySelector('.features__credit');

if (deliverLink !== null) {
  deliverLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    deliverBlock.classList.remove('hide');
    guaranteeBlock.classList.add('hide');
    creditBlock.classList.add('hide');
    deliverLink.classList.add('features__link--active');
    guaranteeLink.classList.remove('features__link--active');
    creditLink.classList.remove('features__link--active');
  });
}
if (guaranteeLink !== null) {
  guaranteeLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    deliverBlock.classList.add('hide');
    guaranteeBlock.classList.remove('hide');
    creditBlock.classList.add('hide');
    deliverLink.classList.remove('features__link--active');
    guaranteeLink.classList.add('features__link--active');
    creditLink.classList.remove('features__link--active');
  });
}
if (creditLink !== null) {
  creditLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    deliverBlock.classList.add('hide');
    guaranteeBlock.classList.add('hide');
    creditBlock.classList.remove('hide');
    deliverLink.classList.remove('features__link--active');
    guaranteeLink.classList.remove('features__link--active');
    creditLink.classList.add('features__link--active');
  });
}

document.querySelector('.slider__next').addEventListener('click', function (evt) {
  evt.preventDefault();
  document.querySelector('.slider__two').classList.add('slider-next');
  document.querySelector('.slider__next').classList.add('slider__last');
  document.querySelector('.slider__prev').classList.remove('slider__last');
});

document.querySelector('.slider__prev').addEventListener('click', function (evt) {
  evt.preventDefault();
  document.querySelector('.slider__two').classList.remove('slider-next');
  document.querySelector('.slider__prev').classList.add('slider__last');
  document.querySelector('.slider__next').classList.remove('slider__last');
});
