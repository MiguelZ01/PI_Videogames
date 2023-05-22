require("dotenv").config();
const axios = require("axios");
const { Videogame } = require("../db");
const { Op } = require("sequelize");
const URL = process.env.URL;
const API_KEY = process.env.API_KEY;

const getGameByName = async (req, res) => {
   try {
      const name = req.query.name.toLowerCase();

      const DBvideogames = await Videogame.findAll({
         where: {
            name: {
               [Op.iLike]: `%${name}%`,
            },
         },
      });

      const { data } = await axios.get(`${URL}?search=${name}&key=${API_KEY}&page_size=15`);

      const videogamesAPI = data.results.map((game) => ({
         id: game.id,
         name: game.name,
         description: game.description_raw,
         platforms: JSON.stringify(game.platforms.map((platform) => platform.platform.name)),
         imagen: game.background_image,
         date: game.updated,
         rating: game.rating_top,
         genres: JSON.stringify(game.genres.map((genre) => genre.name)),
      }));

      const videogamesDB = DBvideogames.map((game) => ({
         id: game.id,
         name: game.name,
         description: game.description,
         platforms: game.platforms,
         imagen: game.imagen,
         date: game.date,
         rating: game.rating,
         genres: game.genres,
      }));

      const allVideogames = [...videogamesAPI, ...videogamesDB];

      if (allVideogames.length === 0) {
         return res.status(404).send("No videogames with that name were found.");
      }

      res.status(200).json(allVideogames);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};

module.exports = getGameByName;
