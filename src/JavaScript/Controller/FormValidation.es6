class FormValidation {
  constructor() {
    this.form = {
      formValidationClass: '.validate',
      recaptchaClass: '.g-recaptcha',
      filedInvalideClass: 'invalid',
      emailExp: /^[^\s()<>@,;:\/]+@\w[\w.-]+\.[a-z]{2,}$/i,
      phoneExp: /^[0-9]{2,5}( )?([0-9]{4,9})$/i,
    }

    if (document.querySelector(this.form.formValidationClass)) {
      this.initValidation();
    }
  }

  /**
   * @desc init validation
   */
  initValidation = () => {
    this.form.element = document.querySelector(this.form.formValidationClass);
    this.form.inputs = this.form.element.querySelectorAll('input, textarea, select');

    let inputEventListenerTypes = ['blur', 'change', 'keyup'];

    this.getSubmitButton();
    this.form.element.addEventListener('submit', this.formSubmit.bind(this));
    if(window.location.hostname !== 'localhost') {
      this.initializeRecaptcha();
    }

    Array.from(this.form.inputs).forEach(input => {
      inputEventListenerTypes.forEach(type => {
        input.addEventListener(type, this.validateOnChange.bind(this));
      })
    })
  }

  /**
   * @desc get submit button
   */
  getSubmitButton = () => {
    this.form.submitButton = this.form.element.querySelector('button[type="submit"]');
  }

  /**
   * @desc stops submit process focus first error field
   * @param event
   */
  formSubmit = event => {
    if (!this.validateFormData()) {
      event.preventDefault();
      this.focusFirstErrorField();
    }
  }

  /**
   * NOT IN USE
   * @desc getting form data
   */
  getFormData = form => {
    let formData = new FormData(form);
    formData.append(this.form.submitButton.name, this.form.submitButton.value);
    return formData;
  }

  /**
   * @desc focused first field with error
   */
  focusFirstErrorField = () => {
    let formError = false;

    for (let i = 0; i < this.form.inputs.length; i++) {
      if (this.validateSingleInput(this.form.inputs[i]) || formError) {
        this.form.inputs[i].focus();
        break;
      }
    }
  }

  /**
   * @desc triggers field validation for every field
   * @returns {boolean}
   */
  validateFormData = () => {
    let formError = false;

    Array.from(this.form.inputs).forEach(input => {
      formError = this.validateSingleInput(input) || formError;
    })

    return !formError;
  }

  /**
   * @desc triggers field validation of given field
   * @param event
   */
  validateOnChange = event => {
    this.validateSingleInput(event.target);
  }

  /**
   * @desc vallidate single given field
   * @param input
   * @returns {boolean}
   */
  validateSingleInput = input => {
    let rule = input.dataset['rule'],
      exp,
      inputError = false;

    if (rule !== undefined) {
      [rule, exp] = rule.split(':');

      switch (rule) {
        case 'required':
          inputError = this.ruleRequired(input, inputError);
          break;

        case 'minlen':
          inputError = this.ruleMinLength(input, exp, inputError);
          break;

        case 'email':
          inputError = this.ruleEmail(input, inputError);
          break;

        case 'confirmEmail':
          inputError = this.ruleConfirmEmail(input, inputError);
          break;

        case 'phone':
          inputError = this.rulePhone(input, inputError);
          break;

        case 'checked':
          inputError = this.ruleChecked(input, inputError);
          break;

        case 'radio':
          inputError = this.ruleRadio(input, inputError);
          break;

        case 'selected':
          inputError = this.ruleSelected(input, inputError);
          break;

        case 'regexp':
          inputError = this.ruleExp(input, exp, inputError);
          break;

        case 'recaptcha':
          inputError = this.ruleRequired(input, inputError);
          break;
      }

      if (inputError) {
        this.showError(input);
      } else {
        this.hideError(input);
      }
    }

    return inputError;
  }

  /**
   * @desc checks given field if value is empty
   * @param input
   * @param inputError
   * @returns {boolean}
   */
  ruleRequired = (input, inputError) => {
    if (input.value === '') {
      inputError = true;
    }

    return inputError;
  }

  /**
   * @desc checks given field if value matches given min length
   * @param input
   * @param exp
   * @param inputError
   * @returns {boolean}
   */
  ruleMinLength = (input, exp, inputError) => {
    if (input.value.length < parseInt(exp)) {
      inputError = true;
    }

    return inputError;
  }

  /**
   * @desc checks given field if value matches given email regEx
   * @param input
   * @param inputError
   * @returns {boolean}
   */
  ruleEmail = (input, inputError) => {
    if (!this.form.emailExp.test(input.value)) {
      inputError = true;
    }

    return inputError;
  }

  /**
   * @desc checks given field if value matches given email regEx and matches other mail field
   * @param input
   * @param inputError
   * @returns {boolean}
   */
  ruleConfirmEmail = (input, inputError) => {
    let value = input.parentElement.previousElementSibling.querySelector('input[type="text"]').value,
      confirmValue = input.value;

    if (!this.form.emailExp.test(input.value) || (value !== confirmValue)) {
      inputError = true;
    }

    return inputError;
  }

  /**
   * @desc checks given field if value matches given phone number regEx
   * @param input
   * @param inputError
   * @returns {boolean}
   */
  rulePhone = (input, inputError) => {
    if (input.value.length > 0 && !this.form.phoneExp.test(input.value)) {
      inputError = true;
    }

    return inputError;
  }

  /**
   * @desc checks given field if field is checked
   * @param input
   * @param inputError
   * @returns {boolean}
   */
  ruleChecked = (input, inputError) => {
    if (!input.checked) {
      inputError = true;
    }

    return inputError;
  }

  /**
   * @desc checks given field if input item selected
   * @param input
   * @param inputError
   * @returns {boolean}
   */
  ruleRadio = (input, inputError) => {
    let radioGroup = Array.from(document.querySelectorAll(`[name="${input.name}"]`));

    inputError = true;
    radioGroup.forEach((radio) => {
      if (radio.checked) {
        inputError = false;
      }
    })

    return inputError;
  }

  /**
   * @desc checks given field if option is selected
   * @param input
   * @param inputError
   * @returns {boolean}
   */
  ruleSelected = (input, inputError) => {
    let value = input.options[input.selectedIndex].value;

    if (value === '') {
      inputError = true;
    }

    return inputError;
  }

  /**
   * @desc checks given field if value matches given RegEx
   * @param input
   * @param exp
   * @param inputError
   * @returns {boolean}
   */
  ruleExp = (input, exp, inputError) => {
    exp = new RegExp(exp);

    if (!exp.test(input.value)) {
      inputError = true;
    }

    return inputError;
  }

  /**
   * @desc get fieldset of given field
   * @param input
   * @returns {HTMLElement}
   */
  getFieldset = input => {
    let fieldset = input.parentElement;

    while (!fieldset.classList.contains('form-group')) {
      fieldset = fieldset.parentElement;
    }

    return fieldset;
  }

  /**
   * @desc get error message wrapper inside given fieldset
   * @param fieldset
   * @returns {*}
   */
  getError = fieldset => {
    return fieldset.querySelector('.error');
  }

  /**
   * @desc create error field
   * @param input
   * @returns {HTMLDivElement}
   */
  createError = input => {
    let error = document.createElement('div');

    error.className = 'error';
    error.setAttribute('role', 'alert');
    error.innerText = (input.dataset['msg'] !== undefined ? input.dataset['msg'] : 'wrong Input');

    return error;
  }

  /**
   * @desc insert error field inside fieldset
   * @param input
   * @param error
   */
  insertError = (input, error) => {
    let element = input,
      checkbox = input.dataset['rule'] === 'checked',
      radiobox = input.dataset['rule'] === 'radiochecked',
      requiredBox = input.dataset['rule'] === 'required',
      recaptcha = input.dataset['rule'] === 'recaptcha';

    if(input.nextElementSibling) {

      if (checkbox || radiobox) {
        element = input.parentElement;
      } else if (requiredBox) {
        element = input.nextElementSibling;
      } else if (recaptcha) {
        element = input.nextElementSibling;
      }

    }

    this.insertAfter(error, element);
  }

  /**
   * @desc show error message for given field
   * @param input
   */
  showError = input => {
    let fieldset = this.getFieldset(input),
      error = this.getError(fieldset);

    this.addClassOnElement(fieldset, this.form.filedInvalideClass);

    if (error !== undefined && error !== null) {
      this.removeClassOnElement(error, 'd-none');
    } else {
      error = this.createError(input);
      this.insertError(input, error);
    }
  }

  /**
   * @desc hide error message for given field
   * @param input
   */
  hideError = input => {
    let fieldset = this.getFieldset(input),
      error = this.getError(fieldset);

    this.removeClassOnElement(fieldset, this.form.filedInvalideClass);

    if (error !== undefined && error !== null) {
      this.removeClassOnElement(error, 'd-none');
      this.addClassOnElement(error, 'd-none');
    }
  }

  /**
   * @desc init recaptcha validation
   */
  initializeRecaptcha = () => {
    window.grecaptcha.ready(() => {
      this.recaptcha = this.form.element.querySelector(this.form.recaptchaClass);

      if (this.recaptcha) {
        if (this.recaptcha.childElementCount === 0) {
          window.grecaptcha.render(this.recaptcha, this.recaptcha.dataset);
        }

        window.recaptchaCallback = this.setCaptchaValue.bind(this);
        window.recaptchaExpiredCallback = this.unsetCaptchaValue.bind(this);
      }
    })
  }

  /**
   * @desc set capture value
   */
  setCaptchaValue = () => {
    let input = this.getRecapchaField();

    if (input) {
      input.value = '1';
    }

    this.validateSingleInput(input);
  }

  /**
   * @desc unset capture value
   */
  unsetCaptchaValue = () => {
    let input = this.getRecapchaField();

    if (input) {
      input.value = '';
    }

    this.validateSingleInput(input);
  }

  /**
   * @desc get recaptcha filed
   * @returns {HTMLElement}
   */
  getRecapchaField = () => {
    let field,
      grecaptchaElement = this.form.element.querySelector(this.form.recaptchaClass);

    if (grecaptchaElement) {
      field = document.getElementById(grecaptchaElement.dataset['fieldId']);
    }

    return field;
  }

  /**
   * @desc helper func for insert element after given element
   * @param newNode
   * @param existingNode
   */
  insertAfter(newNode, existingNode) {
    existingNode.parentNode.append(newNode);
  }

  /**
   * @desc add class on given element
   * @param element
   * @param classValue
   */
  addClassOnElement = (element, classValue) => {
    element.classList.add(classValue);
  }

  /**
   * @desc remove class on given element
   * @param element
   * @param classValue
   */
  removeClassOnElement = (element, classValue) => {
    element.classList.remove(classValue);
  }
}
