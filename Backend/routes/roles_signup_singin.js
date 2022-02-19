const express = require("express");
const router = express.Router();

// Debug ---------------------------------------------------------- URL --> localhost:3000/roles -----------------------------------------
router.get("/roles", function (req, res) {
    res.render("roles");
})

// Debug ---------------------------------------------------------- URL --> localhost:3000/admin-login ---------------------------------

// Todo: To check whether the admin credentials are correct or not 
router.get("/admin-login", function (req, res) {
    res.render("admin");
});

// Debug ---------------------------------------------------------- URL --> localhost:3000/admin-login ---------------------------------

router.get("/admin-upload", function (req, res) {
    res.render("admin-upload");
})

// Test ------------------------------------------------------------ Exporting this file code -----------------------------------------
module.exports = router;
