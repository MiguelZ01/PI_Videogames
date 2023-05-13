const axios = require("axios");
const { Genres } = require("../db");

const URL_GENRES = process.env.URL_GENRES;
const KEY = process.env.API_KEY;

const getGenres = async (req, res) => {
   try {
      const [DBgenres, created] = await Promise.all([
         Genres.findAll(),
         Genres.findOrCreate({
            where: {
               id: 1,
            },
            defaults: {
               id: 1,
               name: "example",
            },
         }),
      ]);

      if (created) {
         const { data } = await axios.get(`${URL_GENRES}?key=${KEY}`);
         const genres = data.results;

         const Allgenres = genres.map((genre) => {
            return {
               id: genre.id,
               name: genre.name,
            };
         });

         await Promise.all(
            Allgenres.map(async (genre) => {
               const [dbGenre] = await Genres.findOrCreate({
                  where: { id: genre.id },
                  defaults: {
                     name: genre.name,
                  },
               });

               return dbGenre;
            })
         );
      }

      const genres = DBgenres.map((genre) => {
         return {
            id: genre.id,
            name: genre.name,
         };
      });

      res.status(200).json(genres);
   } catch (error) {
      throw Error(error.message);
   }
};

module.exports = getGenres;
