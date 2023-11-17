document.addEventListener("DOMContentLoaded", function() {
    const animatedElements = document.querySelectorAll(".animated-element");

    function checkScroll() {
        animatedElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (elementPosition < screenHeight * 0.90) {
                element.classList.add("animate");
            }
        });
    }

    // Llama a la función cuando se carga la página y en cada evento de scroll
    checkScroll();
    window.addEventListener("scroll", checkScroll);
});
