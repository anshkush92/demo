// Important: Creating the server for our project

// Test ---------------------------------------------------------- Package Imports ------------------------------------------------------
// Theory: We use require to import the packages that we are gonna use in the server making

const fs = require("fs");

const path = require("path");

const express = require("express");
const app = express();

// Test ---------------------------------------------------------- Middleware Functions --------------------------------------------------

// Theory: Serving the static files using the routes would be hectic so for that we use express.static("folder") to serve request static files
app.use(express.static("public"));

// Theory: For checking that is there any formData in the response or not (if there is it decoded that data by using this) 
app.use(express.urlencoded({ extended: false }));

// Theory: Telling the template engine which folder file will work as templates || changing the template engine of the Express
app.set("views");
app.set("view engine", "ejs");

// Test ---------------------------------------------------------- Functions for code reuseability ---------------------------------------

// Theory: Function which is use to read-write data in the JSON files used for data collected from contact-us and newsletter
function read_write_data_in_json_files(file_name, data_entered) {
    let file_path = path.join(__dirname, "data", file_name);
    let data_in_file_raw_format = fs.readFileSync(file_path);
    let data_in_file_json_format = JSON.parse(data_in_file_raw_format);

    data_in_file_json_format.push(data_entered);
    fs.writeFileSync(file_path, JSON.stringify(data_in_file_json_format));
}

// Test ---------------------------------------------------------- Routes ----------------------------------------------------------------

// Debug ---------------------------------------------------------- URL --> localhost:3000/ ----------------------------------------------
app.get("/", function (req, res) {
    res.render("index");
})

// Debug ---------------------------------------------------------- URL --> localhost:3000/about -----------------------------------------
app.get("/about", function (req, res) {
    res.send("<h1> Hello about </h1>");
})

// Debug ---------------------------------------------------------- URL --> localhost:3000/roles -----------------------------------------
app.get("/roles", function (req, res) {
    res.render("roles");
})

// Debug ---------------------------------------------------------- URL --> localhost:3000/faq -----------------------------------------
app.get("/faq", function (req, res) {
    res.send("<h1> Hello faq </h1>");
})

// Debug ---------------------------------------------------------- URL --> localhost:3000/contact ---------------------------------------
app.get("/contact", function (req, res) {
    res.render("contact-us-form");
})

// Theory: POST request in case of form submission
app.post("/contact", function (req, res) {
    read_write_data_in_json_files("contact-us.json", req.body);

    res.redirect("/");
});

// Debug ---------------------------------------------------------- URL --> localhost:3000/newsletter ---------------------------------------
app.post("/newsletter", function (req, res) {
    read_write_data_in_json_files("newsletter.json", req.body);

    res.redirect("/");
});

// Test ---------------------------------------------------------- Server starting -------------------------------------------------------
app.listen(3000, function (req, res) {
    console.log("Server is listening on the port 3000");
    console.log("Access the server by typing localhost:3000")
})

