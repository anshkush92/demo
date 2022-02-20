// Test ---------------------------------------------------------- Package Imports ------------------------------------------------------
const express = require("express");
const router = express.Router();

const multer = require("multer");

// Theory: To fiddle around with multer configurations for the file
const storage_config = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

// Theory: To get more control over the file uploaded by the user
const upload = multer({ storage: storage_config });

// Test ----------------------------------- Our own custom code Imports (Databases) ------------------------------------------------------
const db = require("../data/database");

// Debug ---------------------------------------------------------- URL --> localhost:3000/roles -----------------------------------------
router.get("/roles", function (req, res) {
    res.render("roles");
})

// Debug ---------------------------------------------------------- URL --> localhost:3000/admin-login ---------------------------------

// Test ----------------------------------------------------------- GET REQUEST ------------------------------------------------------
// Todo: To check whether the admin credentials are correct or not 
router.get("/admin-login", function (req, res) {
    res.render("admin");
});

// Test ----------------------------------------------------------- POST REQUEST ------------------------------------------------------
router.post("/admin-login", async function (req, res) {
    let entered_data = [
        req.body["admin-email"],
        req.body["admin-password"]
    ];

    try {
        await db.query("INSERT INTO admin_login VALUES (?)", [entered_data]);
    } catch (error) {
        if (error.errno === 1062)
            console.log("Duplicate Emails not allowed");
    }
    let [result] = await db.query("SELECT * FROM admin_login");

    // console.log(result);
    res.redirect("/admin-upload");
})

// Debug ---------------------------------------------------------- URL --> localhost:3000/admin-upload ---------------------------------

// Test ----------------------------------------------------------- GET REQUEST ---------------------------------------------------------
router.get("/admin-upload", function (req, res) {
    res.render("admin-upload");
})

// Test ----------------------------------------------------------- POST REQUEST ---------------------------------------------------------
// Imp: We can add unlimited middleware function before the function that we are going to execute like upload.single() -> middleware
// Imp: We use multer middleware only that place where we expect the file  upload (working correctly)
router.post("/admin-upload", upload.single("grades-file"), async function (req, res) {
    // Theory: For getting the file which we have uploadded 
    let uploaded_grades_file = req.file;

    let entered_data = [
        req.body["admin-email"],
        req.body["admin-password"],
        uploaded_grades_file.path
    ];

    try {
        await db.query("INSERT INTO admin_upload VALUES (?)", [entered_data]);
    } catch (error) {
        if (error.errno === 1062)
            console.log("Already uploaded result for this student");
    }

    let [result] = await db.query("SELECT * FROM admin_upload");

    // console.log(uploaded_grades_file);
    // console.log(entered_data);
    // console.log(result);

    res.redirect("/admin-upload");
});

// Debug ---------------------------------------------------------- URL --> localhost:3000/student-register --------------------------

// Test ----------------------------------------------------------- GET REQUEST ------------------------------------------------------
router.get("/student-register", function (req, res) {
    res.render("student-sign-up");
});

// Test ----------------------------------------------------------- POST REQUEST ---------------------------------------------------------
router.post("/student-register", async function (req, res) {
    let entered_data = [
        req.body["student-email"],
        req.body["roll-number"]
    ];

    try {
        await db.query("INSERT INTO student_sign_up VALUES (?)", [entered_data]);
    } catch (error) {
        if (error.errno === 1062)
            console.log("Student already exists");
    }

    let [result] = await db.query("SELECT * FROM student_sign_up");

    // console.log(entered_data);
    // console.log(result);

    res.redirect("/student-view-result");
});

// Debug ---------------------------------------------------------- URL --> localhost:3000/student-view-result -----------------------

// Test ----------------------------------------------------------- GET REQUEST ------------------------------------------------------
router.get("/student-view-result", function (req, res) {
    res.render("student-sign-in");
});

// Test ----------------------------------------------------------- POST REQUEST ---------------------------------------------------------
router.post("/student-view-result", upload.single("private-key"), async function (req, res) {
    let private_key_uploaded = req.file;

    let entered_data = [
        req.body["semester-number"],
        req.body["roll-number"],
        private_key_uploaded.path
    ];

    try {
        await db.query("INSERT INTO student_view_result VALUES (?)", [entered_data]);
    } catch (error) {
        console.log(error);
    }

    let [result] = await db.query("SELECT * FROM student_view_result");
    console.log(result);
    console.log(entered_data);
    console.log(private_key_uploaded);

    res.render("student-sign-in");
});


// Debug ---------------------------------------------------------- URL --> localhost:3000/verifier-verify-result --------------------

// Test ----------------------------------------------------------- GET REQUEST ------------------------------------------------------
router.get("/verifier-verify-result", function (req, res) {
    res.render("verifier-verify");
});

// Test ----------------------------------------------------------- POST REQUEST ---------------------------------------------------------
router.post("/verifier-verify-result", upload.single("grades-file"), async function (req, res) {
    let uploaded_grades_file = req.file;

    let entered_data = [
        req.body["semester-number"],
        req.body["roll-number"],
        uploaded_grades_file.path
    ];

    try {
        await db.query("INSERT INTO verifier_verify_result VALUES (?)", [entered_data]);
    } catch (error) {
        console.log(error);
    }

    let [result] = await db.query("SELECT * FROM verifier_verify_result");
    console.log(result);

    console.log(entered_data);
    console.log(uploaded_grades_file);
    res.render("verifier-verify");
});


// Test ------------------------------------------------------------ Exporting this file code -----------------------------------------
module.exports = router;
