class ImageGallery {
  constructor() {
    this.imageGalllery = document.querySelector('.image-gallery.swiper')

    if (this.imageGalllery) {
      this.initImageGallery()
    }
  }

  /**
   * @desc Gallery Slider
   */
  initImageGallery = () => {
    let swiper = new Swiper('.image-gallery-thumbs.swiper', {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 2.5,
      watchSlidesProgress: true,

      breakpoints: {
        500: {
          slidesPerView: 3.5,
          spaceBetween: 30,
        },
      },
    })
    let swiper2 = new Swiper('.image-gallery.swiper', {
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-gallery-button-next',
        prevEl: '.swiper-gallery-button-prev',
      },
      thumbs: {
        swiper: swiper,
      },
    })
  }
}
