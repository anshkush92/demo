const express = require("express");
const router = express.Router();

// Test ----------------------------------- Our own custom code Imports (utilities) ------------------------------------------------------
const read_file_data_json_object = require("../utilities/read-file-data");
const write_file_data_json_object = require("../utilities/write-file-data");
const sent_email_object = require("../utilities/sending-newsletter-email");

// Debug ---------------------------------------------------------- URL --> localhost:3000/contact ---------------------------------------
router.get("/contact", function (req, res) {
    res.render("contact-us-form");
})

// Theory: POST request in case of form submission
router.post("/contact", function (req, res) {
    write_file_data_json_object.write_file_data_json("contact-us.json", req.body);

    res.redirect("/");
});

// Debug ---------------------------------------------------------- URL --> localhost:3000/newsletter (POST) -----------------------------
router.post("/newsletter", function (req, res) {
    write_file_data_json_object.write_file_data_json("newsletter.json", req.body);
    
    sent_email_object.sent_email(req.body.useremail)
    
    res.redirect("/");
});

// Test ------------------------------------------------------------ Exporting this file code -----------------------------------------
module.exports = router;