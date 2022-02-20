// Todo: Create a 404 and 500 Custom Error pages
// Todo: Create a Thank You Page which tells that data was taken

// Important: Creating the server for our project

// Test ---------------------------------------------------------- Package Imports ------------------------------------------------------
// Theory: We use require to import the packages that we are gonna use in the server making

const fs = require("fs");

const path = require("path");

const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

// Test ---------------------------------------------------------- Our Own Custom Routes (Imported) --------------------------------------
const index_about_faq_routes = require("./routes/index_about_faq");
const roles_signup_sign_routes = require("./routes/roles_signup_singin");
const contact_newsletter_routes = require("./routes/contact_newsletter");

// Test ---------------------------------------------------------- Middleware Functions --------------------------------------------------

// Theory: Serving the static files using the routes would be hectic so for that we use express.static("folder") to serve request static files
app.use(express.static("public"));

// Theory: For checking that is there any formData in the response or not (if there is it decoded that data by using this) 
app.use(express.urlencoded({ extended: false }));

// Theory: Telling the template engine which folder file will work as templates || changing the template engine of the Express
app.set("views");
app.set("view engine", "ejs");

// Test ---------------------------------------------------------- Using our Imported Routes --------------------------------------
app.use("/", index_about_faq_routes);
app.use("/", roles_signup_sign_routes);
app.use("/", contact_newsletter_routes);

// Test ----------------------------------------- Custom Middleware Configuring Routes for 404 error -------------------------------------
app.use(function(req, res, next){
    res.render("404");
}); 

// Test ----------------------------------------- Custom Middleware Configuring Routes for 500 error -------------------------------------
app.use(function(error, req, res, next) {
    console.log(error);
    res.send("Server is on a break 🙂");
})

// Test ---------------------------------------------------------- Server starting -------------------------------------------------------
app.listen(port, function (req, res) {
    console.log("Server is listening on the port 3000");
    console.log("Access the server by typing localhost:3000")
})

