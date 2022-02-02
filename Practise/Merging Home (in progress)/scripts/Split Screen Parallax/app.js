// console.log("Hello world");
const html_element = document.querySelector("html");
// console.log(html_element);
let html_element_width = html_element.getBoundingClientRect().width;
console.log(html_element_width);

const customers_test = document.querySelector(".customers-test");
// console.log(customers_test);
const customers_test_height = customers_test.getBoundingClientRect().height;
// console.log(customers_test_height);

function parallax_scrolling() {

    // Theory: Init controller
    let controller = new ScrollMagic.Controller();

    // Theory: Creating a new scene (check docs)
    new ScrollMagic.Scene({
        duration: `${(2 * customers_test_height) / 5}`,
        triggerElement: ".customers-title",
        triggerHook: 0
    })

        .setPin(".customers-title")
        // .addIndicators()
        .addTo(controller);
}

if (html_element_width > "768") {
    // console.log("Working");
    parallax_scrolling();
}