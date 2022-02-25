class Navbar {
  constructor () {
    this.navbar = document.querySelector("[data-js='navbar']");

    if (this.navbar) {
      this.initNavbarToggle();
    }
  }

  /**
   * @desc navbar
   */
  initNavbarToggle = () => {
    document.addEventListener("click",  event => {
      if (event.target.closest("[data-js='navbar-toggler']")) {
        event.preventDefault();
        document.body.classList.toggle("navbar--open");
      }
    }, false);
  }
}
