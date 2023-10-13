export default function openPopup() {
  const openBtn = document.querySelector(".slider-3__button");
  const popup = document.querySelector(".slider-3__pop-up");
  const advantagesNums = document.querySelectorAll(
    ".slider-3__advantage-number"
  );
  const advantagesTxt = document.querySelectorAll(".slider-3__advantage-text");

  openBtn.addEventListener("click", () => {
    openBtn.classList.add("hiddenEl");
    document.querySelector(".slider-3__icon-1").classList.add("hiddenEl");
    document.querySelector(".slider-3__icon-2").classList.add("hiddenEl");
    document.querySelector(".slider-3__option-1").classList.add("hiddenEl");
    document.querySelector(".slider-3__option-2").classList.add("hiddenEl");
    popup.classList.add("active");
    for (let i = 0; i < advantagesNums.length; i++) {
      advantagesNums[i].classList.add("active-text");
    }
    for (let i = 0; i < advantagesTxt.length; i++) {
      advantagesTxt[i].classList.add("active-text");
    }

    setTimeout(() => {
      for (let i = 0; i < advantagesNums.length; i++) {
        advantagesNums[i].classList.remove("active-text");
      }

      for (let i = 0; i < advantagesTxt.length; i++) {
        advantagesTxt[i].classList.remove("active-text");
      }
    }, 500);
  });
}
