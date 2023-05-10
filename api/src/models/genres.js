const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Genres", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoincrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
