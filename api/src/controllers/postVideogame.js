const { Videogame } = require("../db");

const postVideogame = async (req, res) => {
  try {
    const { name, description, platforms, imagen, date, rating, genres } = req.body;

    if (!name || !description || !platforms || !imagen || !date || !rating || !genres) {
      return res.status(401).json({ error: "Faltan datos" });
    }

    const [newVideogame, created] = await Videogame.findOrCreate({
      where: {
        name: name,
        description: description,
        platforms: platforms,
        imagen: imagen,
        date: date,
        rating: rating,
        genres: genres,
      },
    });

    if (created) {
      res.status(200).json(newVideogame);
    } else {
      res.status(404).send({ message: "existing Videogame" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = postVideogame;
