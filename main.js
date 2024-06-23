const prevButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');
const slides = document.querySelector('.zone-4');

let slideIndex = 0;

prevButton.addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + 3) % 3;
  updateSlidePosition();
});

nextButton.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % 3;
  updateSlidePosition();
});

function updateSlidePosition() {
  const slideWidth = document.querySelector('img').clientWidth;
  slides.style.transform = `translateX(${-slideWidth * slideIndex}px)`;
}

let currentSlideIndex = 1;
showSlides(currentSlideIndex);

function currentSlide(n) {
  showSlides(currentSlideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel-slide");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    currentSlideIndex = 1;
  }

  if (n < 1) {
    currentSlideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[currentSlideIndex - 1].style.display = "block";
  dots[currentSlideIndex - 1].className += " active";
}

function fClick(){
  document.getElementById("first").style.display = "none";
  document.getElementById("second").style.transform = "rotate(45deg)";
  document.getElementById("third").style.transform = "rotate(-45deg)";
  document.getElementById("fourth").style.display = "none";
  document.getElementById("nokno").style.left = "0";
  document.getElementById("kmenu").style.opacity = "0";
  iClick2();
}

function iClick(){
  document.getElementById("fline").style.display = "block";
  document.getElementById("sline").style.transform = "rotate(0deg)";
  document.getElementById("cline").style.transform = "rotate(0deg)";
  document.getElementById("oline").style.display = "block";
  document.getElementById("nokno").style.left = "-50%";
  document.getElementById("kmenu").style.opacity = "1";
  fClick2();
}

function fClick2(){
  document.getElementById("first").style.display = "block";
  document.getElementById("second").style.transform = "rotate(0deg)";
  document.getElementById("third").style.transform = "rotate(0deg)";
  document.getElementById("fourth").style.display = "block";
}

function iClick2(){
  document.getElementById("fline").style.display = "none";
  document.getElementById("sline").style.transform = "rotate(45deg)";
  document.getElementById("cline").style.transform = "rotate(-45deg)";
  document.getElementById("oline").style.display = "none";
}