const router = require('express').Router();
const path = require("path");

// ROUTE TO GET HOMEPAGE
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

// ROUTE TO GET EXERCISE PAGE
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
})

// ROUTE TO GET STATS PAGE
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
})

module.exports = router;
