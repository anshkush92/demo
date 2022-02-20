let ajax_request_newsletter_form = document.getElementById("submit-button");
console.log(ajax_request_newsletter_form);

ajax_request_newsletter_form.addEventListener("click", send_ajax_request_for_newsletter_emails);

async function send_ajax_request_for_newsletter_emails(event) {
    console.log(event);
}