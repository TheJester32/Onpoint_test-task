export function secondSlide() {
    const sliderLine = document.querySelector('.slider__slider-line');
    const sliderSlide = document.querySelector('.slider__slide');
    const sliderWidth = parseInt(sliderSlide.style.width);
  
    const newTransformValue = -sliderWidth;
    sliderLine.style.transform = `translate3d(${newTransformValue}px, 0, 0)`;
  }
