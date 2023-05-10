const express = require("express");
const router = express.Router();

const genres = require("../controllers/getGenres");

router.get("/", genres);

module.exports = router;
