const { userMovieRepository } = require("../../repositories");

module.exports.rating = async (options) => {
    const query = {};

    if(options.movieId && options.movieId !== "") {
        query.where = { movieId: options.movieId };
    }
  const { count, rows } = await userMovieRepository.list(query);
    
  return {
    metadata: {
      total: count,
    },
    data: rows,
  };
};
