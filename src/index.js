import './index.pug';
import './index.scss';
import bigSlider from './modules/bigSlider';
import { secondSlide } from './modules/buttons';

new bigSlider(document.getElementById('slider'));

document.querySelector('.slider-1__button').addEventListener('click', () => { 
    secondSlide();
});