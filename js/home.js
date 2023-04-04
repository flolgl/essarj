const TIME_INTERVAL = 3000, NUMBER_OF_SLIDES = 9;
let currentSlide = 1;

/**
 * Fonction permettant de changer la slide affichée
 */
const changeSlide = () => {
  const slideName = "#carousel__slide";
  window.location.hash = slideName + ((currentSlide++%NUMBER_OF_SLIDES) + 1);
}

setInterval(changeSlide, TIME_INTERVAL);
