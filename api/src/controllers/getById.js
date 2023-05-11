const URL = process.env.URL;
const axios = require("axios");
const API_KEY = process.env.API_KEY;
const { Videogame } = require("../db");

const getGameById = async (req, res) => {
  try {
    const { id } = req.params;

    const videogameDB = await Videogame.findOne({
      where: {
        id: id,
      },
    });

    if (videogameDB) {
      return res.status(200).json(videogameDB);
    }

    const { data } = await axios.get(`${URL}/${id}?key=${API_KEY}`);
    const datavalue = data;

    if (!datavalue) {
      return res.status(404).send("Not found");
    }

    const getInfo = {
      id: datavalue.id,
      name: datavalue.name,
      description: datavalue.description,
      platforms: JSON.stringify(datavalue.platforms.map((platforms) => platforms.platform.name)),
      imagen: datavalue.background_image,
      date: datavalue.updated,
      rating: datavalue.rating_top,
      genres: JSON.stringify(datavalue.genres.map((genre) => genre.name)),
    };

    const videogameAPI = await Videogame.create(getInfo);

    return res.status(200).json(videogameAPI);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getGameById;
