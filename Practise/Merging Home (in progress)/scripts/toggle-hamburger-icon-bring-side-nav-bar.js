// Theory: Selecting the hammburger icon
const hamburger_icon = document.querySelector(".side-navigation-bar");
const array_of_span_element_in_side_navigation_bar = document.querySelectorAll(".side-navigation-bar span");

// THeory: Selecting the side-navigation-bar-animation element or <aside> element
const aside_element_side_nav_bar = document.querySelector("aside");
console.log(aside_element_side_nav_bar);

console.log(hamburger_icon);
console.log(array_of_span_element_in_side_navigation_bar);

// Theory: Adding the Event listener on the hamburger icon
hamburger_icon.addEventListener("click", toggle_hamburger_cross_icon);

// Theory: Function to be executed when clicked on the hamburger icon
function toggle_hamburger_cross_icon(event) {
    for (let i = 0; i < array_of_span_element_in_side_navigation_bar.length; i++) {
        let current_span_element_class = "bar" + (i+1);
        array_of_span_element_in_side_navigation_bar[i].classList.toggle(current_span_element_class);
    }
    
    aside_element_side_nav_bar.classList.toggle("side-nav-bar-animation");
}