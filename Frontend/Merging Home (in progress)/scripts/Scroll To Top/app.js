const move_to_top_button = document.querySelector(".move-to-top .fas");

move_to_top_button.addEventListener("click", move_to_top);

function move_to_top(event) {
    console.log("Hello world");
    window.scrollTo(0, 0);
}