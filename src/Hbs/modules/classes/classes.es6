class ClassesBg {
    constructor() {
        this.sections = document.querySelectorAll(".bg-fade")
        this.bodyTag = document.querySelector("body")

        if (this.sections) {
            this.addMovement()

            document.addEventListener("scroll", this.addMovement)

            window.addEventListener("resize", this.addMovement)
        }
    }

    /**
     * @desc Gallery Slider
     */
     addMovement = () => {
        const topViewport = window.pageYOffset
        const midViewport = topViewport + (window.innerHeight / 2)

        // lets find the middle of each section
        // (section, index) => {}
        this.sections.forEach((section, index) => {
            const topSection = section.offsetTop
            const midSection = topSection + (section.offsetHeight / 4)

            // how far away is the section from the visible area of the page
            const distanceToSection = midViewport - midSection
            console.log(distanceToSection);

            // check the background
            if (distanceToSection > -100) {
                const dataBackground = section.getAttribute("data-background")
                this.bodyTag.style.backgroundColor = dataBackground
            }
        })
    }
}
