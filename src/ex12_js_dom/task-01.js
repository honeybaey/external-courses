const sliderItems = document.querySelector(".slider__items");

const images = [
  "asset/jellyfish-53e5dc4149_1280.jpg",
  "asset/library-52e3d44442_1280.jpg",
  "asset/stairs-53e2d6444e_1280.jpg",
  "asset/startup-53e9d14343_1280.jpg",
];

let fragment = "";

images.forEach((item, i) => {
  fragment = `<img src=${item} alt=slide-${i + 1} class="slider__img"/>`;
  sliderItems.insertAdjacentHTML("beforeend", fragment);
});

window.addEventListener("load", () => {
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const imagesList = document.querySelectorAll(".slider__items .slider__img");

  let counter = 0;
  let stepSize = imagesList[0].clientWidth;

  prevBtn.addEventListener("click", () => {
    counter <= 0 ? (counter = imagesList.length) : null;

    counter--;
    sliderItems.style.transform = "translateX(" + `${-stepSize * counter}px)`;
  });

  nextBtn.addEventListener("click", () => {
    counter >= imagesList.length - 1 ? (counter = -1) : null;

    counter++;
    sliderItems.style.transform = "translateX(" + `${-stepSize * counter}px)`;
  });
});
