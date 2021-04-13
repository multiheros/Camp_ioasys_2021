'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define(
    "Movie",
    {
      name: DataTypes.STRING,
      duration: DataTypes.STRING,
      release: DataTypes.DATE,
      rate: DataTypes.FLOAT,
      description: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      tableName: "movies",
    }
  );

  return Movie;
};