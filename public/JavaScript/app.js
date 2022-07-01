"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ClassesBg = /*#__PURE__*/_createClass(function ClassesBg() {
  var _this = this;

  _classCallCheck(this, ClassesBg);

  _defineProperty(this, "addMovement", function () {
    var topViewport = window.pageYOffset;
    var midViewport = topViewport + window.innerHeight / 2; // lets find the middle of each section
    // (section, index) => {}

    _this.sections.forEach(function (section, index) {
      var topSection = section.offsetTop;
      var midSection = topSection + section.offsetHeight / 6; // how far away is the section from the visible area of the page

      var distanceToSection = midViewport - midSection; // check the background

      if (distanceToSection > -100) {
        var dataBackground = section.getAttribute('data-background');
        _this.bodyTag.style.backgroundColor = dataBackground;
      }
    });
  });

  this.sections = document.querySelectorAll('.bg-fade');
  this.bodyTag = document.querySelector('body');

  if (this.sections) {
    this.addMovement();
    document.addEventListener('scroll', this.addMovement);
    window.addEventListener('resize', this.addMovement);
  }

  if (this.videoBg) {
    this.addVideoMovement();
    document.addEventListener('scroll', this.addVideoMovement);
    window.addEventListener('resize', this.addVideoMovement);
  }
}
/**
 * @desc Gallery Slider
 */
);
"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ContactForm = /*#__PURE__*/_createClass(function ContactForm() {
  _classCallCheck(this, ContactForm);

  _defineProperty(this, "handleFocus", function () {
    var formTag = document.querySelectorAll("div.form-group");
    var focusTag = document.querySelectorAll(".focus-toggle");
    focusTag.addEventListener("click", function () {
      formTag.classList.toggle("show-focus");
    });
  });

  this.form = document.querySelector(".focus-handler");

  if (this.form) {
    this.handleFocus();
  }
}
/**
 * @desc navbar
 */
);
"use strict";
"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = /*#__PURE__*/_createClass(function App() {
  _classCallCheck(this, App);

  new ClassesBg();

  if (document.querySelector('.form-row')) {
    new FormValidation();
  }
});

new App();
/*
 * navigation
 */

var navOpen = document.querySelector('a.nav-toggle');
var navClose = document.querySelector('a.close-nav');
var navTag = document.querySelector('nav');
var navBackdropTag = document.querySelector('.nav-backdrop');
var htmlTag = document.querySelector('html');
var navLinks = navTag.querySelectorAll('a');
var headerTag = document.querySelector('header .container'); // Open Nav and backdrop control

navOpen.addEventListener('click', function () {
  navTag.classList.add('open');
  navBackdropTag.classList.add('show');
  htmlTag.classList.add('fixed');
}); // Close Nav

navClose.addEventListener('click', function () {
  navTag.classList.remove('open');
  navBackdropTag.classList.remove('show');
  htmlTag.classList.remove('fixed');
}); // Close Nav when a link is clicked

navLinks.forEach(function (navLink) {
  navLink.addEventListener('click', function () {
    navTag.classList.remove('open');
    navBackdropTag.classList.remove('show');
    htmlTag.classList.remove('fixed');
  });
}); // when we scroll the page, at a certain point
// toggle a class to the header

document.addEventListener('scroll', function () {
  var pixels = window.pageYOffset;

  if (pixels > 200) {
    headerTag.classList.add('scrolled');
  } else {
    headerTag.classList.remove('scrolled');
  }
});