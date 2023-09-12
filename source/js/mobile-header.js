const navMain = document.querySelector(".main-nav");
const navToggle = document.querySelector(".main-nav__toggle");

const onNavToggleClick = () => {
  navMain.classList.toggle('main-nav--closed');
}

const initMobileHeader = () => {
  navMain.classList.remove('main-nav--nojs');
  navMain.classList.add('main-nav--closed');
  navToggle.addEventListener('click', onNavToggleClick);
}

export {initMobileHeader};
