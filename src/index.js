import './index.pug';
import './index.scss';
import bigSlider from './modules/bigSlider';
import { secondSlide } from './modules/buttons';

new bigSlider(document.getElementById('slider'));

const whatIsNext = document.querySelector('.slider-1__button');

console.log(whatIsNext)

whatIsNext.addEventListener('click', () => { 
    secondSlide();
    console.log('test2') 
});