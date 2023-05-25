const axios = require("axios");
const { Videogame } = require("../db");

require("dotenv").config();
const URL = process.env.URL;
const KEY = process.env.API_KEY;

const getGames = async (req, res) => {
   try {
      const DB = await Videogame.findAll();
      const DataBases = DB.map((Database) => {
         return {
            id: Database.id,
            name: Database.name,
            description: Database.description,
            platforms: Database.platforms,
            imagen: Database.imagen,
            date: Database.date,
            rating: Database.rating,
            genres: Database.genres,
            created: Database.created,
         };
      });

      const iterador = [];
      for (let i = 1; i < 10; i++) {
         const promise = axios.get(`${URL}?key=${KEY}&page=${i}`);
         iterador.push(promise);
      }

      const answers = await Promise.all(iterador);

      const apiInfo = answers
         .map((response) => response.data.results)
         .flat()
         .map((datavalue) => {
            return {
               id: datavalue.id,
               name: datavalue.name,
               description: datavalue.description_raw,
               platforms: datavalue.platforms.map((platforms) => platforms.platform.name),
               imagen: datavalue.background_image,
               date: datavalue.updated,
               rating: datavalue.rating_top,
               genres: datavalue.genres.map((genres) => genres.name),
               created: "API",
            };
         });

      const Allvideogames = [...apiInfo, ...DataBases];

      res.status(200).json(Allvideogames);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};

module.exports = getGames;
