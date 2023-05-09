const express = require("express");
const router = express.Router();

const genre = require("../controllers/getGenres");

router.get("/", genre);

module.exports = router;
