const { StatusCodes } = require("http-status-codes");
const { moviesRepository } = require("../../repositories");
const { userMovieRepository } = require("../../repositories");
const { messages } = require("../../helpers");

module.exports.details = async (name) => {
  const Movie = await moviesRepository.get({ name });

  if (!Movie) {
    throw {
      status: StatusCodes.NOT_FOUND,
      message: messages.notFound("movie"),
    };
  }
  const avgRating = await userMovieRepository.avg(Movie.id);

  return {
    details: {
      Movie: Movie,
      average: avgRating,
    },
  };
};
