const { userMovieRepository } = require("../../repositories");

module.exports.myRating = async (userId) => {
  const { count, rows } = await userMovieRepository.rating({ userId });

  return {
    metadata: {
      total: count,
    },
    data: rows,
  };
};
