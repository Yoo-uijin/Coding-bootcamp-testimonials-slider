const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

console.log(slides.length);
console.log(slides);

let counter = 0;

function carousel() {
  //working with slides
  if (counter === slides.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slides.length - 1;
  }

  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
});

prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});
