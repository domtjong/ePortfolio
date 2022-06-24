let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

AOS.init();

/* LIGHT/DARK MODE TOGGLE */

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += "dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}

/* TOGGLE CONTACT MODAL*/

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += "modal--open"
}