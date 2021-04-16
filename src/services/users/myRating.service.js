const { userMovieRepository } = require("../../repositories");

module.exports.myRating = async (options) => {
  console.log(options);
  const query = {};

  if (options.name && options.name !== "") {
    query.where = { name: options.name };
  }

  const { count, rows } = await userMovieRepository.myRating(query);

  return {
    metadata: {
      total: count,
    },
    data: rows,
  };
};
