const URL = process.env.URL;
const API_KEY = process.env.API_KEY;
const axios = require("axios");

const getGameByName = async (req, res) => {
  try {
    const name = req.query.search;

    const { data } = await axios(`${URL}?search=${name}?key=${API_KEY}`);
    let videogames = data.result;

    videogames = result.map((game) => ({
      id: datavalue.id,
      name: datavalue.name,
      description: datavalue.description,
      plataformas: datavalue.plataformas,
      imagen: datavalue.imagen,
      date: datavalue.date,
      rating: datavalue.rating,
    }));

    if (videogames.length > 15) return res.status(404).send("este es el maximo de personajes");
    res.status(200).json(videogames);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getGameByName;
