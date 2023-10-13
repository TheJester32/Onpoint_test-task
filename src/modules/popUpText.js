export default function changePopUpText() {
  const prev = document.querySelector(".slider-3__popup-btn-prev");
  const next = document.querySelector(".slider-3__popup-btn-next");
  const circlePrev = document.querySelector(".slider-3__popup-circle-1");
  const circleNext = document.querySelector(".slider-3__popup-circle-2");
  const advantagesNums = document.querySelectorAll(
    ".slider-3__advantage-number"
  );
  const advantagesTxt = document.querySelectorAll(".slider-3__advantage-text");

  next.addEventListener("click", () => {
    circlePrev.style.background = "#fff";
    circleNext.style.background = "rgb(239, 99, 152)";

    for (let i = 0; i < advantagesNums.length; i++) {
      advantagesNums[i].classList.add("active-text");
      advantagesNums[0].textContent = "04";
      advantagesNums[1].textContent = "05";
      advantagesNums[2].textContent = "06";
    }

    for (let i = 0; i < advantagesTxt.length; i++) {
      advantagesTxt[i].classList.add("active-text");
      advantagesTxt[0].textContent =
        "Excepteur sint occaecat cupidatat non proident";
      advantagesTxt[1].textContent =
        "Sunt in culpa qui officia deserunt mollit anim id est laborum";
      advantagesTxt[2].textContent = "Lorem ipsum";
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

  prev.addEventListener("click", () => {
    circleNext.style.background = "#fff";
    circlePrev.style.background = "rgb(239, 99, 152)";

    for (let i = 0; i < advantagesNums.length; i++) {
      advantagesNums[i].classList.add("active-text");
      advantagesNums[0].textContent = "01";
      advantagesNums[1].textContent = "02";
      advantagesNums[2].textContent = "03";
    }

    for (let i = 0; i < advantagesTxt.length; i++) {
      advantagesTxt[i].classList.add("active-text");
      advantagesTxt[0].textContent =
        "Lorem ipsum dolor sit amet, consectetur sit amet adipisicing elit";
      advantagesTxt[1].textContent = "Lorem ipsum dolor sit amet";
      advantagesTxt[2].textContent = "Lorem ipsum dolor sit amet";
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
