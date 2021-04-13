'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define(
    "Movie",
    {
      name: DataTypes.STRING,
      duration: DataTypes.STRING,
      release: { 
        type: DataTypes.DATE,
        field: "release_at",
      },
      rate: DataTypes.INTEGER,
      description: DataTypes.STRING,
      createdAt: {
        type: DataTypes.DATE,
        field: "created_at",
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: "updated_at",
      },
    },
    {
      tableName: "movies",
    }
  );

  return Movie;
};