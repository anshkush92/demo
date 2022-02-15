const express = require("express");
const router = express.Router();

// Debug ---------------------------------------------------------- URL --> localhost:3000/roles -----------------------------------------
router.get("/roles", function (req, res) {
    res.render("roles");
})

// Test ------------------------------------------------------------ Exporting this file code -----------------------------------------
module.exports = router;
