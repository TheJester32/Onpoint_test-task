const sliderLine = document.querySelector('.slider__slider-line');

export function secondSlide () {
    const sliderWidth = 1024;
    sliderLine.style.transform += `translate3d(${sliderWidth}, 0, 0)`;
}
