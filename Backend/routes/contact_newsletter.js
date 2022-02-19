const express = require("express");
const router = express.Router();

// Test ----------------------------------- Our own custom code Imports (utilities) ------------------------------------------------------
// Imp: Commenting as we are not using this instead we use database to store data
// const read_file_data_json_object = require("../utilities/read-file-data");
// const write_file_data_json_object = require("../utilities/write-file-data");

const sent_email_object = require("../utilities/sending-newsletter-email");

// Test ----------------------------------- Our own custom code Imports (Databases) ------------------------------------------------------
const db = require("../data/database");

// Debug ---------------------------------------------------------- URL --> localhost:3000/contact ---------------------------------------
router.get("/contact", function (req, res) {
    res.render("contact-us-form");
})

// Theory: POST request in case of form submission
router.post("/contact", async function (req, res) {
    // Theory: Writing entered data into the contact-us.json (commenting now as using database for this now)
    // write_file_data_json_object.write_file_data_json("contact-us.json", req.body);

    let entered_data = [
        req.body.name,
        req.body.email,
        req.body.phone,
        req.body.subject,
        req.body.message
    ];

    // Theory: This is how we entered the data in MySQL database using (?) and [entered_data]
    // Theory: ? is filled by the values in the entered_data, only 1 ? required 
    await db.query("INSERT INTO contact_us VALUES (?)", [entered_data]);

    // Theory: the below query result data is in form [data, metadata] and we using array destructuring to give the data only
    let [result] = await db.query("SELECT *FROM contact_us");
    console.log(result);

    res.redirect("/");
});

// Debug ---------------------------------------------------------- URL --> localhost:3000/newsletter (POST) -----------------------------
router.post("/newsletter", async function (req, res) {
    // Theory: Writing the entered email into the newsletter.json (now commenting as using database for this)
    // write_file_data_json_object.write_file_data_json("newsletter.json", req.body);
    
    let useremail = req.body.useremail;
    sent_email_object.sent_email(useremail);

    try {
        // Imp: Entering the data into the database using SQL query (? -> Fills all the values from [useremail])
        await db.query("INSERT INTO newsletter (emails) VALUES (?)", [useremail]);
    } catch (error) {
        let error_number = error.errno;
        console.log(error);

        if (error_number === 1062)
            console.log("You are already subscribed to our Newsletter");   
    }

    // Imp: Async operation takes times so use await to perform operations on these results as it is capable of returning promise
    // Imp: Gives the arrays which contains [data, metadata] -> Using array destructuing to extract data only
    let [emails_in_newsletter] = await db.query('SELECT *from newsletter');
    console.log(emails_in_newsletter);

    res.redirect("/");
});

// Test ------------------------------------------------------------ Exporting this file code -----------------------------------------
module.exports = router;