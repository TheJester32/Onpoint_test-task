export default function observeAnimatedPics() {
  const animatedItems = [
    document.querySelector('.slider-2__biggest-sperm'),
    document.querySelector('.slider-2__medium-sperm'),
    document.querySelector('.slider-2__small-sperm'),
    document.querySelector('.slider-2__smallest-sperm'),
    document.querySelector('.slider-2__short-sperm')
  ];
  const SLIDER_WIDTH = -2048;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animation');
        entry.target.style.opacity = 1;
      } else {
        entry.target.classList.remove('animation');
        entry.target.style.opacity = 0;
      }
      // if (document.querySelector('.slider__slider-line').style.transform.includes(`translate3d(${SLIDER_WIDTH}px, 0, 0)`) === true) {
      //   console.log("test")
      //   entry.target.classList.remove('animation');
      //   entry.target.style.opacity = 0;
      // } else {
      //   console.log(document.querySelector('.slider__slider-line').style.transform)
      // }
    });
  });
    animatedItems.forEach(item => {
    observer.observe(item);
  });
}