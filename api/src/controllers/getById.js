const URL = process.env.URL;
const API_KEY = process.env.API_KEY;

require("dotenv").config();
const axios = require("axios");
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
         description: datavalue.description_raw,
         platforms: JSON.stringify(
            datavalue.platforms.map((platforms) => platforms.platform.name).join(", ")
         ),
         imagen: datavalue.background_image,
         date: datavalue.released,
         rating: datavalue.rating_top,
         genres: JSON.stringify(datavalue.genres.map((genre) => genre.name).join(", ")),
      };

      return res.status(200).json(getInfo);
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
};

module.exports = getGameById;
