const { Videogame, Genres } = require("../db");

const postVideogame = async (req, res) => {
   try {
      const result = await Videogame.findOne({ order: [["id", "DESC"]] });
      const lastID = result ? result.id : 960529;
      let count = +lastID + 1;

      const { name, description, platforms, imagen, date, rating, genres } = req.body;

      const DBgenres = await Genres.findAll();

      const isValidGenres = genres.every((genre) =>
         DBgenres.some((DBgenre) => DBgenre.name === genre)
      );

      if (!isValidGenres) return res.status(401).json({ error: "Genre invalid" });

      if (!name || !description || !platforms || !imagen || !date || !rating || !genres) {
         return res.status(401).json({ error: "Faltan datos" });
      }

      const [newVideogame, created] = await Videogame.findOrCreate({
         where: {
            name,
         },
         defaults: {
            id: count,
            description,
            platforms,
            imagen,
            date,
            rating,
            genres,
            created: "DB",
         },
      });

      if (created) res.status(200).json(newVideogame);
      else res.status(404).send("Videogame existente");
   } catch (error) {
      throw Error(error.message);
   }
};

module.exports = postVideogame;
