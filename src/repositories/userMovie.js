const { UserMovie } = require("../models");
const { Movie } = require("../models");
const { Op } = require("sequelize");

module.exports = {
  list: (query) => UserMovie.findAndCountAll(query),
  getById: (id) => UserMovie.findByPk(id),
  get: (params) => UserMovie.findOne({ where: params }),
  create: (params) => UserMovie.create(params),
  update: (vote) => vote.save(),
  destroy: (id) => UserMovie.destroy({ where: { id } }),
  get: (idUser, idMovie) =>
    UserMovie.findOne({
      where: { [Op.and]: [{ userId: idUser }, { movieId: idMovie }] },
    }),
  myRating: (query) =>
    UserMovie.findAndCountAll({ where: query, include: Movie }),
};
