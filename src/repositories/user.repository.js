const { User } = require("../models");

module.exports = {
  list: (query) => User.findAndCountAll(query),
  getById: (id) => User.findByPk(id),
  get: (params) => User.findOne({ where: params }),
  getDeativate: (id) => User.findOne({ where: id, paranoid: false }),
  create: (params) => User.create(params),
  update: (user) => user.save(),
  destroy: (id) => User.destroy({ where: { id } }),
  restore: (object) => User.restore(object),
};
