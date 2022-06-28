let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

AOS.init();

/* LIGHT/DARK MODE TOGGLE */

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += "dark--theme";
  } else {
    document.body.classList.remove("dark--theme");
  }
}

/* TOGGLE CONTACT MODAL */

function toggleModal1() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open1");
  }
  isModalOpen = true;
  document.body.classList += "modal--open1";
}

function toggleModal2() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open2");
  }
  isModalOpen = true;
  document.body.classList += "modal--open2";
}

/* EMAIL CONTACT */
function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += "modal__overlay--visible";
  emailjs
    .sendForm(
      "service_uqvpwlw",
      "template_x0wyvxp",
      event.target,
      "aamWpQoPDNxdqQc_G"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += "modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on dominic.tjong0408@gmail.com"
      );
    });
}
