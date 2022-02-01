// Error ---------------------------------------------------------- Declaring Global variables --------------------------------------------------------

let current_image_content_container_shown = 0;

// Error ---------------------------------------------------------- Selecting an Element --------------------------------------------------------------

const previous_arrow = document.querySelector(".image-content-container .previous-arrow button");
const next_arrow = document.querySelector(".image-content-container .next-arrow button");
const list_of_images = document.querySelectorAll(".image-content-container .image-slideshow");
const list_of_span_for_circles = document.querySelectorAll(".circles span");

// Error ---------------------------------------------------------- Adding Event Listener to the Element ----------------------------------------------

previous_arrow.addEventListener("click", which_button);
next_arrow.addEventListener("click", which_button);

for (const circle_span_element of list_of_span_for_circles) {
    circle_span_element.addEventListener("click", direct_image_change)
}

// Error ---------------------------------------------------------- Adding Functino for the Event Listeners --------------------------------------------

// Theory: To change image directly using the circles
function direct_image_change(event) {

    // Test: For testing whether logic working correctly or not ----------------> Working correctly
    // Todo: Comment these at last
    console.dir(event);
    console.dir(event.target.dataset.id);

    const current_span_element = event.target;

    // Theory: Logic for adding hte class current image
    list_of_span_for_circles[current_image_content_container_shown].classList.remove("current-image");
    event.target.classList.add("current-image");

    // Theory: Logic for changing the images
    list_of_images[current_image_content_container_shown].style.display = "none";
    list_of_images[current_image_content_container_shown].style.animation = "disappear 0.7s ease";

    current_image_content_container_shown = event.target.dataset.id - 1;

    list_of_images[current_image_content_container_shown].style.display = "flex";
    list_of_images[current_image_content_container_shown].style.animation = "appear 0.9s ease";
}

// Theory: Functino for checking which arrows was pressed using the contains 
function which_button(event, which_button) {

    // console.dir(event);

    // Test: Just checking if the arrows are working correctly or not -----------> Working Correctly
    if (event.target.parentElement.classList.contains("previous-arrow")) {
        console.log("Previous arrow");
        image_slideshow(event, -1);
    }
    else if (event.target.parentElement.classList.contains("next-arrow")) {
        console.log("Next-arrow");
        image_slideshow(event, +1);
    }
}

// Theory: Functino for changing the display property of the containers containing image + content
function image_slideshow(event, number) {

    // Test: For checking whehter working correctly or not -------------------> Working Correctly
    console.log(event);
    console.log(number);

    list_of_images[current_image_content_container_shown].style.animation = "disappear 0.7s ease";
    list_of_images[current_image_content_container_shown].style.display = "none";
    list_of_span_for_circles[current_image_content_container_shown].classList.remove("current-image");

    // Debug: TO avoid negative indexes, learn modular artihematic if don't understand
    current_image_content_container_shown = ((current_image_content_container_shown + number) % 3 + 3) % 3;

    // Test: For checking whether the logic is working correctly or not ---------------> Working correctly 
    console.log(current_image_content_container_shown);

    list_of_images[current_image_content_container_shown].style.display = "flex";
    list_of_images[current_image_content_container_shown].style.animation = "appear 0.9s ease";
    list_of_span_for_circles[current_image_content_container_shown].classList.add("current-image");
}

function click_next_arrow() {
    console.log("Clicking next arrow");
    next_arrow.click();
}


// TODO: Automate the image slideshow :(
// Theory: To repeat the task after a certain interval of time
setInterval(click_next_arrow, 2000);