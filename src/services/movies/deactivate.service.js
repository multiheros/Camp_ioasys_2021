const { StatusCodes } = require("http-status-codes");
const { moviesRepository } = require("../../repositories");
const { messages } = require("../../helpers");

module.exports.deactivate = async (id) => {
  const movie = await moviesRepository.get({ id });

  if (!movie) {
    throw {
      status: StatusCodes.NOT_FOUND,
      message: messages.notFound("movie"),
    };
  }

  moviesRepository.destroy(id);

  return "Movie deactivated successfully!";
};
