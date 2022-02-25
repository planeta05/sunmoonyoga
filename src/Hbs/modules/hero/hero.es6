class SliderHero {
    constructor() {
        this.sliderHero = document.querySelector(".hero-slider .swiper");

        if (this.sliderHero) {
            this.initSliderHero();
        }
    }

    /**
     * @desc Gallery Slider
     */
    initSliderHero = () => {
        let heroSwiper = new Swiper(".hero-slider .swiper", {
            slidesPerView: 1,
            loop: true,
            effect: "fade",
            navigation: {
                nextEl: ".swiper-hero-button-next",
                prevEl: ".swiper-hero-button-prev"
            },
        });
    }
}
