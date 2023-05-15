const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
   // defino el modelo
   sequelize.define(
      "videogame",
      {
         id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
         },
         name: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         description: {
            type: DataTypes.TEXT,
            allowNull: false,
         },
         platforms: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         imagen: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         date: {
            type: DataTypes.DATE,
            allowNull: false,
         },
         rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
         },
         genres: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         createBy: {
            type: DataTypes.STRING,
            defaultvalue: "DB",
         },
      },
      { timestamps: false }
   );
};
