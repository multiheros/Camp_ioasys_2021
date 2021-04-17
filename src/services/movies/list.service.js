const { moviesRepository } = require("../../repositories");

module.exports.list = async (options) => {
  const query = {};

  if (options.name && options.name !== "") {
    query.where = { name: options.name };
  }

  const { count, rows } = await moviesRepository.list(query);

  return {
    metadata: {
      total: count,
    },
    data: rows,
  };
};
