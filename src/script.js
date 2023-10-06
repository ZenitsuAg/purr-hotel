const hamburger = document.querySelector("#hamburger");
const ul = document.querySelector("#mobile-menu");

hamburger.addEventListener("click", () => {
    ul.classList.toggle("sm:translate-x-96");
    ul.classList.toggle("-translate-y-96");
});

document.addEventListener("click", (event) => {
    // Check if the user clicked outside of the menu if so add these classes to close the menu
    if (!ul.contains(event.target) && event.target !== hamburger) {
        ul.classList.add("sm:translate-x-96");
        ul.classList.add("-translate-y-96");
    }
});
