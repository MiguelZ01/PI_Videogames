const express = require("express");
const router = express.Router();

// Se importa el archivo relacionado a los generos para la creacion de su respectiva ruta
const genres = require("../controllers/getGenres");

// Se crea su respectiva configuracion para la ruta
router.get("/", genres);

module.exports = router;
