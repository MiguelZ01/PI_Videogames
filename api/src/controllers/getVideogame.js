const axios = require("axios");
require("dotenv").config();

const URL = process.env.URL;
const KEY = process.env.API_KEY;

const games = [];

const getGames = async (req, res) => {
   try {
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
            };
         });

      // answers.forEach((answer) => {
      //    const results = answer.data.results;
      //    if (!results) res.status(404).send("Videogame not found");

      //    results.forEach((datavalue) => {
      //       const videogame = {
      //          id: datavalue.id,
      //          name: datavalue.name,
      //          description: datavalue.description_raw,
      //          platforms: datavalue.platforms.map((platforms) => platforms.platform.name),
      //          imagen: datavalue.background_image,
      //          date: datavalue.updated,
      //          rating: datavalue.rating_top,
      //          genres: datavalue.genres.map((genres) => genres.name),
      //       };
      //       games.push(videogame);
      //    });
      // });

      const uniqueSet = new Set(apiInfo);
      const uniqueArray = Array.from(uniqueSet);
      res.status(200).json(uniqueArray);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};

module.exports = getGames;
