window.onload = inicio

function inicio(){
    checkScroll();
    window.addEventListener("scroll", checkScroll);
}


function checkScroll() {
    const animatedElements = document.querySelectorAll(".animated-element");

    animatedElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (elementPosition < screenHeight * 0.90) {
            element.classList.add("animate");
        }
    });

}
