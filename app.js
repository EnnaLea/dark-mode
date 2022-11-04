const container = document.querySelector(".container");
const toggle = document.querySelector(".toggle");

addEventListener("click", () => {
    container.classList.toggle("dark") ?(toggle.firstElementChild.className = "far fa-moon") :(toggle.firstElementChild.className = "far fa-sun"); 

})