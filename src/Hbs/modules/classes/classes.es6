class ClassesBg {
  constructor() {
    this.sections = document.querySelectorAll('.bg-fade')
    this.bodyTag = document.querySelector('body')
    this.videoBg = document.querySelector('.video-bg.desktop')

    if (this.sections) {
      this.addMovement()

      document.addEventListener('scroll', this.addMovement)

      window.addEventListener('resize', this.addMovement)
    }

    if (this.videoBg) {
      this.addVideoMovement()

      document.addEventListener('scroll', this.addVideoMovement)

      window.addEventListener('resize', this.addVideoMovement)
    }
  }

  /**
   * @desc Gallery Slider
   */
  addMovement = () => {
    const topViewport = window.pageYOffset
    const midViewport = topViewport + window.innerHeight / 2

    // lets find the middle of each section
    // (section, index) => {}
    this.sections.forEach((section, index) => {
      const topSection = section.offsetTop
      const midSection = topSection + section.offsetHeight / 6

      // how far away is the section from the visible area of the page
      const distanceToSection = midViewport - midSection

      // check the background
      if (distanceToSection > -100) {
        const dataBackground = section.getAttribute('data-background')
        this.bodyTag.style.backgroundColor = dataBackground
      }
    })
  }

  addVideoMovement = () => {
    const topViewport = window.pageYOffset
    const midViewport = topViewport + window.innerHeight / 2

    const topVideo = this.videoBg.getBoundingClientRect().top
    const midVideo = topVideo + this.videoBg.offsetHeight / 6

    const distanceToVideo = midViewport - midVideo
    console.log(distanceToVideo)

    if (distanceToVideo > 200) {
      this.videoBg.style.opacity = 1
    }
  }
}
