const body_element = document.querySelector("body");
const horizontal_navigation_bar = document.querySelector(".navigation-bar");
const content_for_scroll_testing = document.querySelector(
  ".content-for-scroll-testing"
);

// Theory: To check whether the window has been scrolled or not
window.addEventListener("scroll", display_scroll);
let y_current_position = 0,
  y_start_position = 80;

function display_scroll(event) {
  let y_new_position = window.scrollY;

  if (y_current_position > y_start_position) {
    if (y_new_position > y_current_position) {
      console.log("Scrolled Down");
      horizontal_navigation_bar.classList.add("bring-up-down-toggle");
      content_for_scroll_testing.classList.remove("content-for-scroll-testing");
    } else if (y_new_position < y_current_position) {
      console.log("Scrolled Up");
      horizontal_navigation_bar.classList.remove("bring-up-down-toggle");
      content_for_scroll_testing.classList.add("content-for-scroll-testing");
    }
  }
  console.log(
    "Starting Position : " + y_start_position,
    "\tCurrent Position: " +
      y_current_position +
      "\tNew Positon : " +
      y_new_position
  );
  y_current_position = y_new_position;
}
