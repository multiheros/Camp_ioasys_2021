const { UserMovie } = require("../models");
const { Movie } = require("../models");
const { Op } = require("sequelize");
const { fn, col } = require("sequelize");

module.exports = {
  list: (query) => UserMovie.findAndCountAll(query),
  getById: (id) => UserMovie.findByPk(id),
  get: (params) => UserMovie.findOne({ where: params }),
  create: (params) => UserMovie.create(params),
  update: (vote) => vote.save(),
  destroy: (id) => UserMovie.destroy({ where: { id } }),
  avg: (movieId) =>
    UserMovie.findAll({
      where: {movieId},
      attributes: ["movieId", [fn("AVG", col("vote")), "avgRating"]],
      group: ['UserMovie.movie_id'],
    }),
  get: (idUser, idMovie) =>
    UserMovie.findOne({
      where: { [Op.and]: [{ userId: idUser }, { movieId: idMovie }] },
    }),
  myRating: (id) =>
    UserMovie.findAndCountAll({ where: {id}, include: Movie }),
};
