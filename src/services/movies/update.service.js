const { StatusCodes } = require("http-status-codes");
const { moviesRepository } = require("../../repositories");
const { messages } = require("../../helpers");

module.exports.update = async (id, body) => {
  const movie = await moviesRepository.getById(id);

  if (!movie) {
    throw {
      status: StatusCodes.NOT_FOUND,
      message: messages.notFound("id"),
    };
  }

  if (body.name && body.name !== "") {
    const { name } = body;
    const checkName = await moviesRepository.get({ name });

    if (checkName) {
      throw {
        status: StatusCodes.CONFLICT,
        message: messages.alreadyExists("name"),
      };
    }
  }

  Object.assign(movie, body);

  moviesRepository.update(movie);

  return "Movie updated successfully!";
};
