// Reference (Getting URL from JS) => https://stackoverflow.com/a/46616104

// Test -------------------------------------------------- Another logic since we have added the links --------------------------
let current_full_url = window.location.href;
let current_url_path = window.location.pathname;
// console.log(current_full_url);
// console.log(current_url_path);

const navigation_bar_element_items = document.querySelectorAll(".nav-content li");
// console.dir(navigation_bar_element_items);

for (const li_items of navigation_bar_element_items) {
    li_items.addEventListener("click", toggle_current_page_class);
    // console.dir(li_items);
    // console.log(li_items.children[0].href);

    if (li_items.children[0].href === current_full_url)
        li_items.classList.add("current-page");
    else  
        li_items.classList.remove("current-page"); 
}   

function toggle_current_page_class(event) {
    for (const li_items of navigation_bar_element_items) {
        li_items.classList.remove("current-page");
    }

    // console.log("Hello World");
    event.target.classList.add("current-page");
}


