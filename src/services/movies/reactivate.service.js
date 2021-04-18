const { StatusCodes } = require("http-status-codes");
const { moviesRepository } = require("../../repositories");
const { messages } = require("../../helpers");

module.exports.reactivate = async (id) => {
  let movie = await moviesRepository.get({ id });

  if (movie) {
    throw {
      status: StatusCodes.CONFLICT,
      message: messages.alreadyExists("movie"),
    };
  }

  movie = await moviesRepository.getDeativate({ id });

  if (!movie) {
    throw {
      status: StatusCodes.NOT_FOUND,
      message: messages.notFound("movie"),
    };
  }

  moviesRepository.restore(movie);

  return "Movie successfully restored!";
};
