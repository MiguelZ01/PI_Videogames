const express = require("express");
const router = express.Router();

const getVideogame = require("../controllers/getVideogame");
const getById = require("../controllers/getById");
const getByName = require("../controllers/getByName");

router.get("/", getVideogame);
router.get("/:id", getById);
router.get(" /:name", getByName);
router.post("/", getVideogame);

module.exports = router;
