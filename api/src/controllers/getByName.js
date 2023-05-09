require("dotenv").config();
const axios = require("axios");
const { Videogame, Genres } = require("../db");
const URL = process.env.URL;
const API_KEY = process.env.API_KEY;
const { Op } = require("sequelize");

const getGameByName = async (req, res) => {
  try {
    const name = req.query.name.toLowerCase();

    const { data } = await axios.get(`${URL}?search=${name}&key=${API_KEY}&page_size=15`);

    const videogames = data.results;

    if (!videogames) {
      const dbVideogames = Videogame.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
        include: Genres,
      });

      if (!dbVideogames.length) {
        return res.status(404).send("Videogame not found");
      }
    }

    const FoundGame = videogames.map((game) => ({
      id: game.id,
      name: game.name,
      description: game.description,
      plataformas: game.plataformas,
      imagen: game.imagen,
      date: game.date,
      rating: game.rating,
    }));

    res.status(200).json(FoundGame);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getGameByName;
