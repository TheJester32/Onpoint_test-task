import "./index.pug";
import "./index.scss";
import bigSlider from "./modules/bigSlider";
import observeAnimatedPics from "./modules/slide-2";
import closePopup from "./modules/closePopup";
import openPopup from "./modules/openPopup";
import changePopUpText from "./modules/popUpText";

document.querySelector(".slider-3__pop-up").classList.add("hidden");

new bigSlider(document.getElementById("slider"));

observeAnimatedPics();
closePopup();
openPopup();
changePopUpText();
