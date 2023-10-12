import './index.pug';
import './index.scss';
import bigSlider from './modules/bigSlider';
import observeAnimatedPics from './modules/slide-2';

new bigSlider(document.getElementById('slider'));

observeAnimatedPics();