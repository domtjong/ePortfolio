let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

AOS.init();

/* LIGHT/DARK MODE TOGGLE */

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark--theme";
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
  document.body.classList += " modal--open1";
}

function toggleModal2() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open2");
  }
  isModalOpen = true;
  document.body.classList += " modal--open2 ";
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

/* CAROUSEL */
const carouselSlide = document.querySelector('.project__img--wrapper');
const carouselImages = document.querySelectorAll('.project__img');

const previous = document.querySelector('#previous');
const next = document.querySelector('#next');

const images = document.querySelectorAll('.project__img');

let count = 1;

function styleNoTransition(image, visibility, left) {
    image.classList.add('notransition');
    image.style.visibility = `${visibility}`;
    image.style.transform = "none";
    image.style.left = `${left}px`;
    image.offsetHeight;
    image.classList.remove('notransition');
}

function hideIrrelevantImages() {
    images.forEach(function(image, index) {
        if (index !== count && index !== count - 1) {
            styleNoTransition(image, "hidden", 0);
        }
    })
}

function updateIndicator() {
    if (count === 1) {
        document.querySelector('.indicator-1').classList.add('filled');
        document.querySelector('.indicator-2').classList.remove('filled');
        document.querySelector('.indicator-3').classList.remove('filled');
    }
    if (count === 2) {
        document.querySelector('.indicator-1').classList.remove('filled');
        document.querySelector('.indicator-2').classList.add('filled');
        document.querySelector('.indicator-3').classList.remove('filled');
    }
    if (count === 3) {
        document.querySelector('.indicator-1').classList.remove('filled');
        document.querySelector('.indicator-2').classList.remove('filled');
        document.querySelector('.indicator-3').classList.add('filled');
    }
}

function updateDescription() {
    if (count === 1) {
        document.querySelector('.project__description--wrapper').classList.add('p1');
        document.querySelector('.project__description--wrapper').classList.remove('p2');
        document.querySelector('.project__description--wrapper').classList.remove('p3');
    }
    if (count === 2) {
        document.querySelector('.project__description--wrapper').classList.add('p2');
        document.querySelector('.project__description--wrapper').classList.remove('p1');
        document.querySelector('.project__description--wrapper').classList.remove('p3');
    }
    if (count === 3) {
        document.querySelector('.project__description--wrapper').classList.add('p3');
        document.querySelector('.project__description--wrapper').classList.remove('p2');
        document.querySelector('.project__description--wrapper').classList.remove('p1');
    }
}

function updateLinks() {
    if (count === 1) {
        document.querySelector('.project__site').parentElement.setAttribute('href', 'https://jonathan6242.github.io/eportfoliobasic/');
        document.querySelector('.project__github').parentElement.setAttribute('href', 'https://github.com/jonathan6242/eportfoliobasic');
    }
    if (count === 2) {
        document.querySelector('.project__site').parentElement.setAttribute('href', 'https://jonathan6242.github.io/treact/');
        document.querySelector('.project__github').parentElement.setAttribute('href', 'https://github.com/jonathan6242/treact');
    }
    if (count === 3) {
        document.querySelector('.project__site').parentElement.setAttribute('href', 'https://jonathan6242.github.io/todolist/');
        document.querySelector('.project__github').parentElement.setAttribute('href', 'https://github.com/jonathan6242/todolist');
    }
}



// setInterval(nextItem, 5000);

function nextItem(event) {
    if (count < images.length) {
        const width = document.querySelector('#placeholder').width;
        const currentImage = images[count-1];
        const nextImage = images[count];
        hideIrrelevantImages();
        styleNoTransition(currentImage, "visible", 0);
        styleNoTransition(nextImage, "visible", width);
        currentImage.style.transform = `translateX(${-width}px)`
        nextImage.style.transform = `translateX(${-width}px)`
        count = count + 1;
    } else {
        const width = document.querySelector('#placeholder').width;
        const currentImage = images[count - 1];
        const nextImage = images[0];
        hideIrrelevantImages();
        styleNoTransition(currentImage, "visible", 0);
        styleNoTransition(nextImage, "visible", width);
        currentImage.style.transform = `translateX(${-width}px)`
        nextImage.style.transform = `translateX(${-width}px)`
        count = 1;
    }
    updateIndicator();
    updateDescription();
    updateLinks();
}

function previousItem(event) {
    if (count > 1) {
        const width = document.querySelector('#placeholder').width;
        const currentImage = images[count - 1];
        const previousImage = images[count - 2];
        hideIrrelevantImages();
        styleNoTransition(previousImage, "visible", -width);
        styleNoTransition(currentImage, "visible", 0);
        previousImage.style.transform = `translateX(${width}px)`;
        currentImage.style.transform = `translateX(${width}px)`;
        count = count - 1;
    } else {
        const width = document.querySelector('#placeholder').width;
        const currentImage = images[count - 1];
        const previousImage = images[images.length - 1];
        hideIrrelevantImages();
        styleNoTransition(previousImage, "visible", -width);
        styleNoTransition(currentImage, "visible", 0);
        previousImage.style.transform = `translateX(${width}px)`;
        currentImage.style.transform = `translateX(${width}px)`;
        count = images.length;
    }
    updateIndicator();
    updateDescription();
    updateLinks();
}