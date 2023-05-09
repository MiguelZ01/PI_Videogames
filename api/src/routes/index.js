const { Router } = require("express");
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const characters = require("./characters");
const genre = require("./genre");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/characters", characters);
router.use("/genre", genre);

module.exports = router;
