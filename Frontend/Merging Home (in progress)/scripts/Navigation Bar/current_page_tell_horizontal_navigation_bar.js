const navigation_bar_element_items = document.querySelectorAll(".nav-content li");
console.dir(navigation_bar_element_items);

for (const li_items of navigation_bar_element_items) {
    li_items.addEventListener("click", toggle_current_page_class);
}

function toggle_current_page_class(event) {
    for (const li_items of navigation_bar_element_items) {
        li_items.classList.remove("current-page");
    }

    console.log("Hello World");
    event.target.classList.add("current-page");
}