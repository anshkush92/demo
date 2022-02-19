const express = require("express");
const router = express.Router();

const multer = require("multer");
const upload = multer({ dest: "uploads" });

// Debug ---------------------------------------------------------- URL --> localhost:3000/roles -----------------------------------------
router.get("/roles", function (req, res) {
    res.render("roles");
})

// Debug ---------------------------------------------------------- URL --> localhost:3000/admin-login ---------------------------------

// Todo: To check whether the admin credentials are correct or not 
router.get("/admin-login", function (req, res) {
    res.render("admin");
});

// Debug ---------------------------------------------------------- URL --> localhost:3000/admin-upload ---------------------------------

// Test ----------------------------------------------------------- GET REQUEST ---------------------------------------------------------
router.get("/admin-upload", function (req, res) {
    res.render("admin-upload");
})

// Test ----------------------------------------------------------- POST REQUEST ---------------------------------------------------------
// Imp: We can add unlimited middleware function before the function that we are going to execute like upload.single() -> middleware
// Imp: We use multer middleware only that place where we expect the file  upload (working correctly)
router.post("/admin-upload", upload.single("grades-file"), function (req, res) {
    // Theory: For getting the file which we have uploadded 
    let uploaded_grades_file = req.file;
    let entered_data = req.body;

    console.log(uploaded_grades_file);
    console.log(entered_data);

    res.redirect("/admin-upload");
});

// Debug ---------------------------------------------------------- URL --> localhost:3000/student-register --------------------------

// Test ----------------------------------------------------------- GET REQUEST ------------------------------------------------------
router.get("/student-register", function (req, res) {
    res.render("student-sign-up");
});

// Test ----------------------------------------------------------- POST REQUEST ---------------------------------------------------------
router.post("/student-register", function(req, res) {
    let entered_data = req.body;
    console.log(entered_data);

    res.render("student-sign-in");
});

// Debug ---------------------------------------------------------- URL --> localhost:3000/student-view-result -----------------------

// Test ----------------------------------------------------------- GET REQUEST ------------------------------------------------------
router.get("/student-view-result", function (req, res) {
    res.render("student-sign-in");
});

// Test ----------------------------------------------------------- POST REQUEST ---------------------------------------------------------
router.post("/student-view-result", upload.single("private-key") ,function (req, res) {
    let entered_data = req.body;
    let private_key_uploaded = req.file;


    console.log(entered_data);
    console.log(private_key_uploaded);
    res.render("student-sign-in");
});


// Debug ---------------------------------------------------------- URL --> localhost:3000/verifier-verify-result --------------------

// Test ----------------------------------------------------------- GET REQUEST ------------------------------------------------------
router.get("/verifier-verify-result", function(req, res){
    res.render("verifier-verify");
});

// Test ----------------------------------------------------------- POST REQUEST ---------------------------------------------------------
router.post("/verifier-verify-result", upload.single("grades-file"), function(req, res) {
    let entered_data = req.body;
    let uploaded_grades_file = req.file;

    console.log(entered_data);
    console.log(uploaded_grades_file);
    res.render("verifier-verify");
});


// Test ------------------------------------------------------------ Exporting this file code -----------------------------------------
module.exports = router;
