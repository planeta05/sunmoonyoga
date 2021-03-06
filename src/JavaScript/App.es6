class App {
  constructor() {
    new ClassesBg()

    if (document.querySelector('.form-row')) {
      new FormValidation()
    }
  }
}

new App()


/*
 * navigation
 */
const navOpen = document.querySelector('a.nav-toggle')
const navClose = document.querySelector('a.close-nav')
const navTag = document.querySelector('nav')
const navBackdropTag = document.querySelector('.nav-backdrop')
const htmlTag = document.querySelector('html')
const navLinks = navTag.querySelectorAll('a')
const headerTag = document.querySelector('header .container')

// Open Nav and backdrop control
navOpen.addEventListener('click', function () {
  navTag.classList.add('open')
  navBackdropTag.classList.add('show')
  htmlTag.classList.add('fixed')
})

// Close Nav
navClose.addEventListener('click', function () {
  navTag.classList.remove('open')
  navBackdropTag.classList.remove('show')
  htmlTag.classList.remove('fixed')
})

// Close Nav when a link is clicked
navLinks.forEach((navLink) => {
  navLink.addEventListener('click', function () {
    navTag.classList.remove('open')
    navBackdropTag.classList.remove('show')
    htmlTag.classList.remove('fixed')
  })
})

// when we scroll the page, at a certain point
// toggle a class to the header
document.addEventListener('scroll', function () {
  const pixels = window.pageYOffset

  if (pixels > 200) {
    headerTag.classList.add('scrolled')
  } else {
    headerTag.classList.remove('scrolled')
  }
})
