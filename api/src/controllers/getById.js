const URL = process.env.URL;
const axios = require("axios");
const API_KEY = process.env.API_KEY;

const getGameById = async (req, res) => {
  try {
    const { id } = req.params;

    const { data } = await axios.get(`${URL}/${id}?key=${API_KEY}`);
    const datavalue = data;

    if (!videogames) {
      videogames = Videogame.findAll({
        where: {
          id: {
            [Op.iLike]: `%${id}%`,
          },
        },
        include: Genres,
      });

      if (!videogames) {
        return res.status(404).send("Not found");
      }
    }

    const getInfo = {
      id: datavalue.id,
      name: datavalue.name,
      description: datavalue.description,
      plataformas: datavalue.plataformas,
      imagen: datavalue.imagen,
      date: datavalue.date,
      rating: datavalue.rating,
    };

    return res.status(200).json(getInfo);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getGameById;
