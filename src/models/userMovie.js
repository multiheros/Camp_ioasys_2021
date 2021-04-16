'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserMovie = sequelize.define(
    "UserMovie",
    {
      userId: {
        type: DataTypes.INTEGER,
        field: "user_id"
      },
      movieId: {
        type: DataTypes.INTEGER,
        field: "movie_id"
      },
      vote: DataTypes.INTEGER,
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
      tableName: "users_movies",
      timestamps: true
    },
  );

  UserMovie.associate = function(models) {
    UserMovie.belongsTo(models.User, { foreignKey: 'userId'})
    UserMovie.belongsTo(models.Movie, { foreignKey: 'movieId'})
  };

  return UserMovie;
};