const { userMovieRepository } = require("../../repositories");

module.exports.myRating = async (id) => {
  const query = {};

  const { count, rows } = await userMovieRepository.myRating(id);

  return {
    metadata: {
      total: count,
    },
    data: rows,
  };
};
