const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("videogame", {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoincrement: true,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Plataformas: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Imagen: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
    },
    Date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    Rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
