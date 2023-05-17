"use strict";

class Slider {
  sliderItems = Array.from(document.querySelectorAll(".slide-item"));
  btns = document.querySelector(".slider-buttons");
  curSlide = 0;
  maxSlides = this.sliderItems.length - 1;

  constructor() {
    this.btns.addEventListener(
      "click",
      function (e) {
        this.changeSlide(e);
      }.bind(this)
    );
  }

  changeSlide(e) {
    const target =
      e.target.tagName !== "BUTTON" ? e.target.parentElement : e.target;
    console.log(target);
    console.log(this.sliderItems);
    if (target.classList.contains("btn--next")) {
      this.curSlide === this.maxSlides ? (this.curSlide = 0) : this.curSlide++;
    }
    if (target.classList.contains("btn--previous")) {
      this.curSlide === 0 ? (this.curSlide = this.maxSlides) : this.curSlide--;
    }
    this.moveSlide();
  }

  moveSlide() {
    this.sliderItems.forEach((slide, i) => {
      slide.style.transform = `translateX(${100 * (i - this.curSlide)}%)`;
      if (this.curSlide !== i) {
        slide.style.visibility = "hidden";
        slide.style.opacity = "0";
      }
      if (this.curSlide === i) {
        slide.style.visibility = "visible";
        slide.style.opacity = "1";
      }
    });
  }
}

const app = new Slider();
