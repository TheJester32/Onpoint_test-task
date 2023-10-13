export default function closePopup() {
  const closeBtn = document.querySelector(".slider-3__popup-btn-close");
  const openBtn = document.querySelector(".slider-3__button");
  const popup = document.querySelector(".slider-3__pop-up");

  closeBtn.addEventListener("click", () => {
    popup.classList.remove("active");
    openBtn.classList.remove("hiddenEl");
    document.querySelector(".slider-3__icon-1").classList.remove("hiddenEl");
    document.querySelector(".slider-3__icon-2").classList.remove("hiddenEl");
    document.querySelector(".slider-3__option-1").classList.remove("hiddenEl");
    document.querySelector(".slider-3__option-2").classList.remove("hiddenEl");
  });
}
