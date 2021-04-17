const { Movie } = require("../models");

module.exports = {
  list: (query) => Movie.findAndCountAll(query),
  listAll: (query) => Movie.findAndCountAll({ where:query, paranoid: false }),
  getById: (id) => Movie.findByPk(id),
  get: (params) => Movie.findOne({ where: params }),
  create: (params) => Movie.create(params),
  update: (movie) => movie.save(),
  destroy: (id) => Movie.destroy({ where: { id } }),
  getDeativate: (id) => Movie.findOne({ where: id , paranoid: false}),
  restore: (id) => Movie.restore(id)
};