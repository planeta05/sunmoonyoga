class CategorySlider {
  constructor() {
    this.CategorySlider = document.querySelector(".category-slider");

    if (this.CategorySlider) {
      this.initCategorySlider();
    }
  }

  /**
   * @desc Gallery Slider
   */
  initCategorySlider = () => {
    let swiper = new Swiper(".category-slider", {
      slidesPerView: 1,
      effect: "fade",
      centeredSlides: false,
      navigation: {
        nextEl: ".category-slider-button-next",
        prevEl: ".category-slider-button-prev"
      },
    });
  }
}
