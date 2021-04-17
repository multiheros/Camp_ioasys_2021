const { StatusCodes } = require("http-status-codes");
const { moviesRepository } = require("../../repositories");
const { messages } = require("../../helpers");

module.exports.update = async (id, body) => {
  const idExist = await moviesRepository.get({ id });

  if (!idExist) {
    throw {
      status: StatusCodes.NOT_FOUND,
      message: messages.notFound("id"),
    };
  }

  const { name } = body;
  const movieExist = await moviesRepository.get({ name });

  if (movieExist) {
    throw {
      status: StatusCodes.CONFLICT,
      message: messages.alreadyExists("name"),
    };
  }

  const movie = await moviesRepository.get(id);

  Object.assign(movie, body);

  moviesRepository.update(movie);

  return "Filme alterado com sucesso!";
};
