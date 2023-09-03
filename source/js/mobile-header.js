const navToggle = document.querySelector(".main-nav__toggle");
const navMobile = document.querySelector(".main-nav__list");

navToggle.classList.add('main-nav__toggle--burger');
navMobile.classList.add('main-nav__list--hidden');

const onNavToggleClick = () => {
  navToggle.classList.toggle('main-nav__toggle--burger');
  navMobile.classList.toggle('main-nav__list--hidden');
}

const initMobileHeader = () => {
  navToggle.addEventListener('click', onNavToggleClick);
}

export {initMobileHeader};
