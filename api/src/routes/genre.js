const express = require("express");
const router = express.Router();

const genre = require("../controllers/getGenre");

router.get("/", genre);

module.exports = router;
