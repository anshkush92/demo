// Important: Tried creating something like sleep() in JS, doesn't work if used display before opacity :(
// References (CSS Animations with JS) => https://redstapler.co/add-css-animation-with-javascript/
// References (Keyframes in CSS) => https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes

// Theory: Selecting the <button> (+) for drop - down effect
const plus_button_array = document.querySelectorAll(
  ".question-button-toggle button"
);

// Theory: Adding the click event listener on each <button>
for (let plus_button of plus_button_array) {
  plus_button.addEventListener("click", toggle_display_answer);
}

// Theory: Function for toggling the FAQs
function toggle_display_answer(event) {
  // Fix: For checking whether selected element is correct or not
  console.log(event.target.parentElement);
  console.dir(event.target.parentElement);

  for (let button of plus_button_array) {
    let toggle_answer = button.parentElement.nextElementSibling;
    if (button !== event.target) {
      if (button.textContent === "-") {
        button.textContent = "+";
        button.style.fontSize = "1.5rem";
        delayedGreeting(toggle_answer, "-");
      }
    }
  }

  let toggle_answer = event.target.parentElement.nextElementSibling;
  let button = event.target;
  console.dir(toggle_answer.style);
  toggle_answer.style.opacity = "1";

  if (button.textContent === "+") {
    button.textContent = "-";
    button.style.fontSize = "2rem";
    delayedGreeting(toggle_answer, "+");
  } else if (button.textContent === "-") {
    button.textContent = "+";
    button.style.fontSize = "1.5rem";
    delayedGreeting(toggle_answer, "-");
  }

}


// Fix: Trying to give the 2s delay but ain't happening so going for the opacity keyframes
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function delayedGreeting(toggle_answer, button) {
  if (button === "+") {
    // console.log("+ hello");
    // toggle_answer.style.opacity = "1";
    toggle_answer.style.animation =
      "answer_opacity_from_0_to_1 0s ease";
    // console.log("Opacity to 1 executed");
    // await sleep(500);
    // console.log("Display to block executed");
    toggle_answer.style.display = "block";
  }

  else if (button === "-") {
    // console.log("- world");
    // toggle_answer.style.opacity = "0";
    toggle_answer.style.animation =
      "answer_opacity_from_1_to_0 0s ease";
    // console.log("Opacity to 0 executed");
    // await sleep(500);
    toggle_answer.style.display = "none";
    // console.log("Display none executed");
  }
}
