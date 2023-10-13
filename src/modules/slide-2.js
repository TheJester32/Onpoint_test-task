export default function observeAnimatedPics() {
  const animatedItems = [
    document.querySelector(".slider-2__biggest-sperm"),
    document.querySelector(".slider-2__medium-sperm"),
    document.querySelector(".slider-2__small-sperm"),
    document.querySelector(".slider-2__smallest-sperm"),
    document.querySelector(".slider-2__short-sperm"),
  ];
  const SLIDER_WIDTH = -2048;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animation");
        entry.target.style.opacity = 1;
      } else {
        entry.target.classList.remove("animation");
        entry.target.style.opacity = 0;
      }
    });
  });
  animatedItems.forEach((item) => {
    observer.observe(item);
  });
}
