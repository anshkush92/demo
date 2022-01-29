// Theory: For finding the current height and width of the document

// References => https://www.w3schools.com/howto/howto_js_get_current_window.asp
// References (Get information about element) => https://stackoverflow.com/questions/294250/how-do-i-retrieve-an-html-elements-actual-width-and-height?rq=1
// References (Check element contains specific class or not) => https://stackoverflow.com/questions/5898656/check-if-an-element-contains-a-class-in-javascript

// Theory: Selecting the hammburger icon
const hamburger_icon = document.querySelector(".side-navigation-bar");
const array_of_span_element_in_side_navigation_bar = document.querySelectorAll(".side-navigation-bar span");

// Theory: For selecting the <div> which contains all the content in one place
const content_moved_right_when_clicked_hamburger = document.querySelector(
    ".animation"
);

// Theory: For selecting the <body> element to give original width 
const body_element_for_width = document.querySelector("body");
content_moved_right_when_clicked_hamburger.style.width = body_element_for_width.getBoundingClientRect().width;


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
        let current_span_element_class = "bar" + (i + 1);
        array_of_span_element_in_side_navigation_bar[i].classList.toggle(current_span_element_class);
    }

    aside_element_side_nav_bar.classList.toggle("side-nav-bar-animation");
    content_moved_right_when_clicked_hamburger.classList.toggle("move-content-when-toggled-hamburger");

    // Todo: Learn from the 2nd refernce provided above
    // Fix: Remove cluttered code or the same thing that I did over and over :(
    let information_about_content_moved_right_when_clicked_hamburger = content_moved_right_when_clicked_hamburger.getBoundingClientRect();
    let whole_width = body_element_for_width.getBoundingClientRect();

    let current_width_of_content = information_about_content_moved_right_when_clicked_hamburger.width;
    let original_width = whole_width.width;


    // Fix: Remove these, only for debugging purposes 
    console.log(current_width_of_content);
    console.log(original_width);

    // Todo: If else logic for the content width :) 
    if (content_moved_right_when_clicked_hamburger.classList.contains("move-content-when-toggled-hamburger")) {
        content_moved_right_when_clicked_hamburger.style.width = `calc(${original_width}px - 200px)`;
        console.log(content_moved_right_when_clicked_hamburger.style.width);
        console.log("Contains");
    }
    else {
        content_moved_right_when_clicked_hamburger.style.width = `calc(${original_width}px - 0px)`;
        console.log(content_moved_right_when_clicked_hamburger.style.width);
        console.log("Doesn't contains");
    }
}

// Error ============================================ For mobile view :  Push content to the right when clicked on hamburger ==========================================



