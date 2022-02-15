current_full_url = window.location.href;
current_url_path = window.location.pathname;

console.log(current_full_url);

const side_navigation_bar_content = document.querySelectorAll(".side-navigation-bar-content ul li.icon-content");

for (const each_li_item of side_navigation_bar_content) {
    console.log(each_li_item.children[1].href);

    if (each_li_item.children[1].href === current_full_url) {
        console.log("Added");
        each_li_item.classList.add("clicked");
    }
    else
        each_li_item.classList.remove("clicked");
}
