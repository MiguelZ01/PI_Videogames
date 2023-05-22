// Se importa el enrrutador
const express = require("express");
const router = express.Router();

// En este archivo se importan todos los controladores relacionados a los videojuegos
const getByName = require("../controllers/getByName");
const getById = require("../controllers/getById");
const getVideogame = require("../controllers/getVideogame");
const postVideogame = require("../controllers/postVideogame");

// A partir de esta linea se configuran las diferentes rutas para cada controlador
router.get("/name/", getByName);
router.get("/:id", getById);
router.get("/", getVideogame);
router.post("/", postVideogame);

module.exports = router;
