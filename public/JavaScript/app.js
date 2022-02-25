"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CategorySlider = /*#__PURE__*/_createClass(function CategorySlider() {
  _classCallCheck(this, CategorySlider);

  _defineProperty(this, "initCategorySlider", function () {
    var swiper = new Swiper(".category-slider", {
      slidesPerView: 1,
      effect: "fade",
      centeredSlides: false,
      navigation: {
        nextEl: ".category-slider-button-next",
        prevEl: ".category-slider-button-prev"
      }
    });
  });

  this.CategorySlider = document.querySelector(".category-slider");

  if (this.CategorySlider) {
    this.initCategorySlider();
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
      var midSection = topSection + section.offsetHeight / 4; // how far away is the section from the visible area of the page

      var distanceToSection = midViewport - midSection;
      console.log(distanceToSection); // check the background

      if (distanceToSection > -100) {
        var dataBackground = section.getAttribute("data-background");
        _this.bodyTag.style.backgroundColor = dataBackground;
      }
    });
  });

  this.sections = document.querySelectorAll(".bg-fade");
  this.bodyTag = document.querySelector("body");

  if (this.sections) {
    this.addMovement();
    document.addEventListener("scroll", this.addMovement);
    window.addEventListener("resize", this.addMovement);
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

var SliderHero = /*#__PURE__*/_createClass(function SliderHero() {
  _classCallCheck(this, SliderHero);

  _defineProperty(this, "initSliderHero", function () {
    var heroSwiper = new Swiper(".hero-slider .swiper", {
      slidesPerView: 1,
      loop: true,
      effect: "fade",
      navigation: {
        nextEl: ".swiper-hero-button-next",
        prevEl: ".swiper-hero-button-prev"
      }
    });
  });

  this.sliderHero = document.querySelector(".hero-slider .swiper");

  if (this.sliderHero) {
    this.initSliderHero();
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

var ImageGallery = /*#__PURE__*/_createClass(function ImageGallery() {
  _classCallCheck(this, ImageGallery);

  _defineProperty(this, "initImageGallery", function () {
    console.log('image-gallery started');
    var swiper = new Swiper(".image-gallery-thumbs.swiper", {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 2.5,
      watchSlidesProgress: true,
      breakpoints: {
        500: {
          slidesPerView: 3.5,
          spaceBetween: 30
        }
      }
    });
    var swiper2 = new Swiper(".image-gallery.swiper", {
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-gallery-button-next",
        prevEl: ".swiper-gallery-button-prev"
      },
      thumbs: {
        swiper: swiper
      }
    });
  });

  this.imageGalllery = document.querySelector(".image-gallery.swiper");

  if (this.imageGalllery) {
    this.initImageGallery();
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

var Navbar = /*#__PURE__*/_createClass(function Navbar() {
  _classCallCheck(this, Navbar);

  _defineProperty(this, "initNavbarToggle", function () {
    document.addEventListener("click", function (event) {
      if (event.target.closest("[data-js='navbar-toggler']")) {
        event.preventDefault();
        document.body.classList.toggle("navbar--open");
      }
    }, false);
  });

  this.navbar = document.querySelector("[data-js='navbar']");

  if (this.navbar) {
    this.initNavbarToggle();
  }
}
/**
 * @desc navbar
 */
);
"use strict";
"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FormValidation = /*#__PURE__*/function () {
  function FormValidation() {
    var _this = this;

    _classCallCheck(this, FormValidation);

    _defineProperty(this, "initValidation", function () {
      _this.form.element = document.querySelector(_this.form.formValidationClass);
      _this.form.inputs = _this.form.element.querySelectorAll('input, textarea, select');
      var inputEventListenerTypes = ['blur', 'change', 'keyup'];

      _this.getSubmitButton();

      _this.form.element.addEventListener('submit', _this.formSubmit.bind(_this));

      if (window.location.hostname !== 'localhost') {
        _this.initializeRecaptcha();
      }

      Array.from(_this.form.inputs).forEach(function (input) {
        inputEventListenerTypes.forEach(function (type) {
          input.addEventListener(type, _this.validateOnChange.bind(_this));
        });
      });
    });

    _defineProperty(this, "getSubmitButton", function () {
      _this.form.submitButton = _this.form.element.querySelector('button[type="submit"]');
    });

    _defineProperty(this, "formSubmit", function (event) {
      if (!_this.validateFormData()) {
        event.preventDefault();

        _this.focusFirstErrorField();
      }
    });

    _defineProperty(this, "getFormData", function (form) {
      var formData = new FormData(form);
      formData.append(_this.form.submitButton.name, _this.form.submitButton.value);
      return formData;
    });

    _defineProperty(this, "focusFirstErrorField", function () {
      var formError = false;

      for (var i = 0; i < _this.form.inputs.length; i++) {
        if (_this.validateSingleInput(_this.form.inputs[i]) || formError) {
          _this.form.inputs[i].focus();

          break;
        }
      }
    });

    _defineProperty(this, "validateFormData", function () {
      var formError = false;
      Array.from(_this.form.inputs).forEach(function (input) {
        formError = _this.validateSingleInput(input) || formError;
      });
      return !formError;
    });

    _defineProperty(this, "validateOnChange", function (event) {
      _this.validateSingleInput(event.target);
    });

    _defineProperty(this, "validateSingleInput", function (input) {
      var rule = input.dataset['rule'],
          exp,
          inputError = false;

      if (rule !== undefined) {
        var _rule$split = rule.split(':');

        var _rule$split2 = _slicedToArray(_rule$split, 2);

        rule = _rule$split2[0];
        exp = _rule$split2[1];

        switch (rule) {
          case 'required':
            inputError = _this.ruleRequired(input, inputError);
            break;

          case 'minlen':
            inputError = _this.ruleMinLength(input, exp, inputError);
            break;

          case 'email':
            inputError = _this.ruleEmail(input, inputError);
            break;

          case 'confirmEmail':
            inputError = _this.ruleConfirmEmail(input, inputError);
            break;

          case 'phone':
            inputError = _this.rulePhone(input, inputError);
            break;

          case 'checked':
            inputError = _this.ruleChecked(input, inputError);
            break;

          case 'radio':
            inputError = _this.ruleRadio(input, inputError);
            break;

          case 'selected':
            inputError = _this.ruleSelected(input, inputError);
            break;

          case 'regexp':
            inputError = _this.ruleExp(input, exp, inputError);
            break;

          case 'recaptcha':
            inputError = _this.ruleRequired(input, inputError);
            break;
        }

        if (inputError) {
          _this.showError(input);
        } else {
          _this.hideError(input);
        }
      }

      return inputError;
    });

    _defineProperty(this, "ruleRequired", function (input, inputError) {
      if (input.value === '') {
        inputError = true;
      }

      return inputError;
    });

    _defineProperty(this, "ruleMinLength", function (input, exp, inputError) {
      if (input.value.length < parseInt(exp)) {
        inputError = true;
      }

      return inputError;
    });

    _defineProperty(this, "ruleEmail", function (input, inputError) {
      if (!_this.form.emailExp.test(input.value)) {
        inputError = true;
      }

      return inputError;
    });

    _defineProperty(this, "ruleConfirmEmail", function (input, inputError) {
      var value = input.parentElement.previousElementSibling.querySelector('input[type="text"]').value,
          confirmValue = input.value;

      if (!_this.form.emailExp.test(input.value) || value !== confirmValue) {
        inputError = true;
      }

      return inputError;
    });

    _defineProperty(this, "rulePhone", function (input, inputError) {
      if (input.value.length > 0 && !_this.form.phoneExp.test(input.value)) {
        inputError = true;
      }

      return inputError;
    });

    _defineProperty(this, "ruleChecked", function (input, inputError) {
      if (!input.checked) {
        inputError = true;
      }

      return inputError;
    });

    _defineProperty(this, "ruleRadio", function (input, inputError) {
      var radioGroup = Array.from(document.querySelectorAll("[name=\"".concat(input.name, "\"]")));
      inputError = true;
      radioGroup.forEach(function (radio) {
        if (radio.checked) {
          inputError = false;
        }
      });
      return inputError;
    });

    _defineProperty(this, "ruleSelected", function (input, inputError) {
      var value = input.options[input.selectedIndex].value;

      if (value === '') {
        inputError = true;
      }

      return inputError;
    });

    _defineProperty(this, "ruleExp", function (input, exp, inputError) {
      exp = new RegExp(exp);

      if (!exp.test(input.value)) {
        inputError = true;
      }

      return inputError;
    });

    _defineProperty(this, "getFieldset", function (input) {
      var fieldset = input.parentElement;

      while (!fieldset.classList.contains('form-group')) {
        fieldset = fieldset.parentElement;
      }

      return fieldset;
    });

    _defineProperty(this, "getError", function (fieldset) {
      return fieldset.querySelector('.error');
    });

    _defineProperty(this, "createError", function (input) {
      var error = document.createElement('div');
      error.className = 'error';
      error.setAttribute('role', 'alert');
      error.innerText = input.dataset['msg'] !== undefined ? input.dataset['msg'] : 'wrong Input';
      return error;
    });

    _defineProperty(this, "insertError", function (input, error) {
      var element = input,
          checkbox = input.dataset['rule'] === 'checked',
          radiobox = input.dataset['rule'] === 'radiochecked',
          requiredBox = input.dataset['rule'] === 'required',
          recaptcha = input.dataset['rule'] === 'recaptcha';

      if (input.nextElementSibling) {
        if (checkbox || radiobox) {
          element = input.parentElement;
        } else if (requiredBox) {
          element = input.nextElementSibling;
        } else if (recaptcha) {
          element = input.nextElementSibling;
        }
      }

      _this.insertAfter(error, element);
    });

    _defineProperty(this, "showError", function (input) {
      var fieldset = _this.getFieldset(input),
          error = _this.getError(fieldset);

      _this.addClassOnElement(fieldset, _this.form.filedInvalideClass);

      if (error !== undefined && error !== null) {
        _this.removeClassOnElement(error, 'd-none');
      } else {
        error = _this.createError(input);

        _this.insertError(input, error);
      }
    });

    _defineProperty(this, "hideError", function (input) {
      var fieldset = _this.getFieldset(input),
          error = _this.getError(fieldset);

      _this.removeClassOnElement(fieldset, _this.form.filedInvalideClass);

      if (error !== undefined && error !== null) {
        _this.removeClassOnElement(error, 'd-none');

        _this.addClassOnElement(error, 'd-none');
      }
    });

    _defineProperty(this, "initializeRecaptcha", function () {
      window.grecaptcha.ready(function () {
        _this.recaptcha = _this.form.element.querySelector(_this.form.recaptchaClass);

        if (_this.recaptcha) {
          if (_this.recaptcha.childElementCount === 0) {
            window.grecaptcha.render(_this.recaptcha, _this.recaptcha.dataset);
          }

          window.recaptchaCallback = _this.setCaptchaValue.bind(_this);
          window.recaptchaExpiredCallback = _this.unsetCaptchaValue.bind(_this);
        }
      });
    });

    _defineProperty(this, "setCaptchaValue", function () {
      var input = _this.getRecapchaField();

      if (input) {
        input.value = '1';
      }

      _this.validateSingleInput(input);
    });

    _defineProperty(this, "unsetCaptchaValue", function () {
      var input = _this.getRecapchaField();

      if (input) {
        input.value = '';
      }

      _this.validateSingleInput(input);
    });

    _defineProperty(this, "getRecapchaField", function () {
      var field,
          grecaptchaElement = _this.form.element.querySelector(_this.form.recaptchaClass);

      if (grecaptchaElement) {
        field = document.getElementById(grecaptchaElement.dataset['fieldId']);
      }

      return field;
    });

    _defineProperty(this, "addClassOnElement", function (element, classValue) {
      element.classList.add(classValue);
    });

    _defineProperty(this, "removeClassOnElement", function (element, classValue) {
      element.classList.remove(classValue);
    });

    this.form = {
      formValidationClass: '.validate',
      recaptchaClass: '.g-recaptcha',
      filedInvalideClass: 'invalid',
      emailExp: /^[^\s()<>@,;:\/]+@\w[\w.-]+\.[a-z]{2,}$/i,
      phoneExp: /^[0-9]{2,5}( )?([0-9]{4,9})$/i
    };

    if (document.querySelector(this.form.formValidationClass)) {
      this.initValidation();
    }
  }
  /**
   * @desc init validation
   */


  _createClass(FormValidation, [{
    key: "insertAfter",
    value:
    /**
     * @desc helper func for insert element after given element
     * @param newNode
     * @param existingNode
     */
    function insertAfter(newNode, existingNode) {
      existingNode.parentNode.append(newNode);
    }
    /**
     * @desc add class on given element
     * @param element
     * @param classValue
     */

  }]);

  return FormValidation;
}();
"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = /*#__PURE__*/_createClass(function App() {
  _classCallCheck(this, App);

  new Navbar();
  new SliderHero();
  new CategorySlider();
  new ImageGallery();
  new ClassesBg();

  if (document.querySelector('.form-row')) {
    new FormValidation();
  }
});

new App();
/* Form underline */

var focusToggle = document.querySelectorAll(".focus-toggle");
var focusHolder = document.querySelector(".form-group");
focusToggle.forEach(function (pustekuchen) {
  pustekuchen.addEventListener('focus', function (event) {
    event.target.parentElement.classList.add("show-focus");
  });
  pustekuchen.addEventListener('blur', function (event) {
    event.target.parentElement.classList.remove("show-focus");
  });
});
/*
 * navigation
 */

var navOpen = document.querySelector("a.nav-toggle");
var navClose = document.querySelector("a.close-nav");
var navTag = document.querySelector("nav");
var navBackdropTag = document.querySelector(".nav-backdrop");
var htmlTag = document.querySelector("html");
var navLinks = navTag.querySelectorAll("a");
var headerTag = document.querySelector("header .container"); // Open Nav and backdrop control

navOpen.addEventListener("click", function () {
  navTag.classList.add("open");
  navBackdropTag.classList.add("show");
  htmlTag.classList.add("fixed");
}); // Close Nav

navClose.addEventListener("click", function () {
  navTag.classList.remove("open");
  navBackdropTag.classList.remove("show");
  htmlTag.classList.remove("fixed");
}); // Close Nav when a link is clicked

navLinks.forEach(function (navLink) {
  navLink.addEventListener("click", function () {
    navTag.classList.remove("open");
    navBackdropTag.classList.remove("show");
    htmlTag.classList.remove("fixed");
  });
}); // when we scroll the page, at a certain point
// toggle a class to the header

document.addEventListener("scroll", function () {
  var pixels = window.pageYOffset;

  if (pixels > 200) {
    headerTag.classList.add("scrolled");
  } else {
    headerTag.classList.remove("scrolled");
  }
});