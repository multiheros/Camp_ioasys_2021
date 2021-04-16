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
  getMore: (one, two) => UserMovie.findOne({ where: { [Op.and]: [one, two]} }),
  myRating: (query) => UserMovie.findAndCountAll({ where: query, include: Movie })
};
