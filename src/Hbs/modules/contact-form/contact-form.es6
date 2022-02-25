class ContactForm {
    constructor () {
        this.form = document.querySelector(".focus-handler");

        if (this.form) {
            this.handleFocus();
        }
    }

    /**
     * @desc navbar
     */
    handleFocus = () => {
        const formTag = document.querySelectorAll("div.form-group");
        const focusTag = document.querySelectorAll(".focus-toggle");

        focusTag.addEventListener("click", function() {
            formTag.classList.toggle("show-focus")
        })
    }

}
