const { Router } = require("express");
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const Videogames = require("./Videogames");
const genres = require("./genres");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/Videogames", Videogames);
router.use("/genres", genres);

module.exports = router;
