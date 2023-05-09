const URL = process.env.URL;
const axios = require("axios");
const API_KEY = process.env.API_KEY;

const getGameById = async (req, res) => {
  try {
    const { id } = req.params;

    const { data } = await axios.get(`${URL}/${id}?key=${API_KEY}`);
    const getInfo = data;

    getInfo = {
      id: datavalue.id,
      name: datavalue.name,
      description: datavalue.description,
      plataformas: datavalue.plataformas,
      imagen: datavalue.imagen,
      date: datavalue.date,
      rating: datavalue.rating,
    };

    return getInfo;
  } catch (error) {
    return "Id not found";
  }
};

module.exports = getGameById;
