const axios = require("axios");
const { Genres } = require("../db");

const URL_GENRES = process.env.URL_GENRES;
const KEY = process.env.API_KEY;

const getGenres = async (req, res) => {
  try {
    const DBgenres = await Genres.findAll();

    if (!DBgenres.length) {
      const { data } = await axios.get(`${URL_GENRES}?key=${KEY}`);
      const genres = data.results;

      const Allgenres = genres.map((genre) => {
        return {
          id: genre.id,
          name: genre.name,
        };
      });
      await Genres.bulkCreate(Allgenres);
      res.status(200).json(Allgenres);
    }

    return DBgenres.map((genre) => {
      return {
        id: genre.id,
        name: genre.name,
      };
    });
  } catch (error) {
    throw Error(error.message);
  }
};

module.exports = getGenres;
