const galleryImg = document.querySelector(".galleryImg");
const galleryHeader = document.querySelector("#galleryTextHeader");
const galleryBody = document.querySelector("#galleryTextBody");

const btnLeft = document.querySelector(".left");
const btnRight = document.querySelector(".right");

let index = 0;

const heroImg = [
  "<img src='images/desktop-image-hero-1.jpg' alt='' />",
  "<img src='images/desktop-image-hero-2.jpg' alt='' />",
  "<img src='images/desktop-image-hero-3.jpg' alt='' />",
];

const heroHeader = [
  "Discover innovative ways to decorate",
  "We are available all across the globe",
  "Manufactured with the best materials",
];

const heroBody = [
  "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with out collection and make your property a reflection of you and what you love.",
  "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
];

galleryImg.innerHTML = heroImg[index];
galleryHeader.innerText = heroHeader[index];
galleryBody.innerText = heroBody[index];

function updateContent() {
  galleryImg.innerHTML = heroImg[index];
  galleryHeader.innerText = heroHeader[index];
  galleryBody.innerText = heroBody[index];
}

function next() {
  if (index === 2) {
    index = 0;
  } else {
    ++index;
  }
  updateContent();
}

function prev() {
  if (index === 0) {
    index = 2;
  } else {
    --index;
  }
  updateContent();
}

btnRight.addEventListener("click", () => {
  next();
});

btnLeft.addEventListener("click", () => {
  prev();
});

document.querySelector('.menu').addEventListener('click', () => {
    document.querySelector('.menu').classList.add('displayNone')
    document.querySelector('.logo').classList.add('displayNone')
    document.querySelector('.close').classList.remove('displayNone')
    document.querySelector('.nav').classList.remove('displayNone')
    document.querySelector('.navWrapper').style.background = '#fff'
})

document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.menu').classList.remove('displayNone')
    document.querySelector('.logo').classList.remove('displayNone')
    document.querySelector('.close').classList.add('displayNone')
    document.querySelector('.nav').classList.add('displayNone')
    document.querySelector('.navWrapper').style.background = 'transparent'
})