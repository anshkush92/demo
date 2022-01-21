// Theory: Selecting all the <img> that is present in the slideshow as an array
const slideshow_images = document.querySelectorAll(".slideshow-images img");
console.dir(slideshow_images);

// Theory: Selecting the left, right arrow button
const previous_button = document.getElementById("previous-button");
const next_button = document.getElementById("next-button");

// Theory: Adding an event listener on the (previous => -1) (next => + 1) arrow <button>
previous_button.addEventListener("click", which_button);
previous_button.addEventListener("keyup", which_key);
next_button.addEventListener("click", which_button);
next_button.addEventListener("keyup", which_key);

function which_key(event) {
  if (event.keyCode == 39) {
    which_button(+1);
  } else if (event.keyCode == 37) {
    which_button(-1);
  }
}

// Theory: To get to know the index of the current image
let current_image = 0,
  previous_image = current_image,
  total_slideshow_images = slideshow_images.length;

// Todo: Function that executes when the left or right arrow button is clicked
function which_button(clicked_button_value) {
  // Theory: To get to know we clicked which button
  if (clicked_button_value == 1) {
    console.log("Pressed Next button");
    previous_image = current_image;
    current_image = (current_image + 1) % total_slideshow_images;
  } else if (clicked_button_value == -1) {
    console.log("Pressed Previous button");
    previous_image = current_image;
    current_image =
      (((current_image - 1) % total_slideshow_images) +
        total_slideshow_images) %
      total_slideshow_images;
  }

  let current_image_parent_element =
    slideshow_images[current_image].parentElement.parentElement;
  console.log(current_image_parent_element);

  let previous_image_parent_element =
    slideshow_images[previous_image].parentElement.parentElement;
  console.log(previous_image_parent_element);

  current_image_parent_element.style.display = "flex";
  previous_image_parent_element.style.display = "none";

  //   console.log(current_image);
  // Error: console.dir(event);
}
