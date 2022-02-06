const side_navigation_bar_content = document.querySelectorAll(".side-navigation-bar-content ul li.icon-content");

for (const each_li_item of side_navigation_bar_content) {
    each_li_item.addEventListener("click", current_page_side_navigation_bar);
    console.log("Click Event added");
}

function current_page_side_navigation_bar(event) {
    console.dir(event);

    for (const each_li_item of side_navigation_bar_content) {
        each_li_item.classList.remove("clicked");
    }

    console.log("Hello world");
    event.target.classList.add("clicked");
}

console.log(side_navigation_bar_content);