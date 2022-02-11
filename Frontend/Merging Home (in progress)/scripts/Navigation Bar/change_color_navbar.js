const navigation_bar = document.querySelector(".navigation-bar");

window.addEventListener("scroll", change_color);
let height_scrolled = 0;

function change_color(event) {

    // Test: Just for the sake of testing purpose ------------------------> Logic working correctly
    // console.log(document.body.scrollTop);
    // console.log(document.documentElement.scrollTop);

    height_scrolled = document.documentElement.scrollTop;

    if (height_scrolled >= "80") {
        navigation_bar.style.backgroundColor = "white";
    } else {
        navigation_bar.style.backgroundColor = "";
    }
}