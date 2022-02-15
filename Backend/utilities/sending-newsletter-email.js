// References (Using Nodemailer to sent Email in Gmail) => https://www.youtube.com/watch?v=Va9UKGs1bwI
const nodemailer = require("nodemailer");
require("dotenv").config();

// Creating Function for reusability
function sent_email(receiver_address) {
    // Step 1: Creating a transporter
    let transporter = nodemailer.createTransport({
        service: "gmail",

        auth: {
            user: process.env.email,
            pass: process.env.password
        }
    });


    // Step 2: Configuring the mail options
    let mail_options = {
        from: process.env.email,
        to: receiver_address,
        subject: "Subscribed to our Newsletter",
        text: "Thank You for subscribing to our Newsletter, now you are one step closer into all the sneak peaks of our product"
    };


    // Step 3: Sending the Emails 
    transporter.sendMail(mail_options, function (err, data) {
        if (err)
            console.log(`Error occurred when sending emails ${err}`);
        else
            console.log(`Email sent successfully`);
    })
}

// sent_email();

module.exports = {
    sent_email: sent_email
}