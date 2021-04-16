'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define(
    "Movie",
    {
      name: DataTypes.STRING,
      duration: DataTypes.STRING,
      release: DataTypes.DATE,
      description: DataTypes.STRING,
      deletedAt: {
        type: DataTypes.DATE,
        field: "deleted_at"
      },
      createdAt: {
        type: DataTypes.DATE,
        field: "created_at"
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: "updated_at"
      },
    },
    {
      tableName: "movies",
      paranoid: true,
      timestamps: true

    },
  );

  Movie.associate = function(models) {
    Movie.belongsToMany(models.User, { through: 'UserMovie', foreignKey: 'movieId' })
  }
  
  return Movie;
};