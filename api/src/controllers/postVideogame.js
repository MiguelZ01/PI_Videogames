const { Videogame, Genres } = require("../db");

const postVideogame = async () => {
  try {
    const { id, name, description, platforms, imagen, date, rating } = req.body;

    if (!name || !description || !platforms || !imagen || !date || !rating) {
      return res.status(401).json({ error: "Faltan datos" });
    }

    const newViedogame = await Videogame.findOrCreate({
      where: {
        id: id,
        name: name,
        description: description,
        platforms: platforms,
        imagen: imagen,
        date: date,
        rating: rating,
      },
    });

    const created = await Favorite.create(newViedogame);

    if (created) {
      const NewGames = await newViedogame.findAll();
      return res.status(200).json(NewGames);
    } else {
      return res.status(404).send({ message: "existing Videgame" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = postVideogame;
