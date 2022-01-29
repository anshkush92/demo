// Theory: For finding the current height and width of the document

// References => https://www.w3schools.com/howto/howto_js_get_current_window.asp
// References (Get information about element) => https://stackoverflow.com/questions/294250/how-do-i-retrieve-an-html-elements-actual-width-and-height?rq=1
// References (Check element contains specific class or not) => https://stackoverflow.com/questions/5898656/check-if-an-element-contains-a-class-in-javascript

// Error -------------------------------------------------- All Selections ----------------------------------------------------------------------------------

// Theory: Selecting the hammburger icon
// Todo: Hamburger icon, array_of_span element in hamburger icon selected
const hamburger_icon = document.querySelector(".side-navigation-bar");
const array_of_span_element_in_side_navigation_bar = document.querySelectorAll(".side-navigation-bar span");


// Theory: For selecting the <div> which contains all the content in one place
// Todo: Dummy content Selected
const content_moved_right_when_clicked_hamburger = document.querySelector(
    ".animation"
);
// console.log(content_moved_right_when_clicked_hamburger.offsetHeight);


// Theory: For selecting the <body> element to give original width  
const body_element_for_width = document.querySelector("body");
content_moved_right_when_clicked_hamburger.style.width = body_element_for_width.getBoundingClientRect().width;


// THeory: Selecting the side-navigation-bar-animation element or <aside> element
// Todo: <aside> selected
const aside_element_side_nav_bar = document.querySelector("aside");
console.log(aside_element_side_nav_bar);

// Theory: Selecting the backdrop filter
const backdrop_filter = document.getElementById("backdrop-filter");
console.log(backdrop_filter);

console.log(hamburger_icon);
console.log(array_of_span_element_in_side_navigation_bar);

// Error -------------------------------------------------- All Event Listeners ----------------------------------------------------------------------------------

// Theory: Adding the Event listener on the hamburger icon
hamburger_icon.addEventListener("click", toggle_hamburger_cross_icon);

// THeory: Adding EVent listener on the backdrop filter
backdrop_filter.addEventListener("click", toggle_hamburger_cross_icon);

// Error -------------------------------------------------- All Functions ----------------------------------------------------------------------------------

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
    let current_height_of_content = information_about_content_moved_right_when_clicked_hamburger.height;


    // Todo: For debugging purposes only
    // Fix: Remove these, only for debugging purposes 
    console.log(content_moved_right_when_clicked_hamburger);
    console.log(current_width_of_content);
    console.log("Height: " + current_height_of_content);
    console.log(original_width);

    aside_element_side_nav_bar.style.height = `calc(${current_height_of_content}px)`;

    // Todo: If else logic for the content width :) also for the backdrop filter
    if (content_moved_right_when_clicked_hamburger.classList.contains("move-content-when-toggled-hamburger")) {
        content_moved_right_when_clicked_hamburger.style.width = `calc(${original_width}px - 200px)`;
        backdrop_filter.style.display = "block";
        console.log(content_moved_right_when_clicked_hamburger.style.width);
        console.log("Contains");
    }
    else {
        content_moved_right_when_clicked_hamburger.style.width = `calc(${original_width}px - 0px)`;
        console.log(content_moved_right_when_clicked_hamburger.style.width);
        backdrop_filter.style.display = "none";
        console.log("Doesn't contains");
    }
}




