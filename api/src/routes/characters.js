const express = require("express");
const router = express.Router();

const getByName = require("../controllers/getByName");
const getById = require("../controllers/getById");
const getVideogame = require("../controllers/getVideogame");

router.get("/name/", getByName);
router.get("/:id", getById);
router.get("/", getVideogame);
router.post("/", getVideogame);

module.exports = router;
