const { StatusCodes } = require("http-status-codes");
const { moviesRepository } = require("../../repositories");
const { messages } = require("../../helpers");

module.exports.register = async (body) => {
  const { name, duration, release, director, category, description } = body;
  const Movie = await moviesRepository.get({ name });

  if (Movie) {
    throw {
      status: StatusCodes.CONFLICT,
      message: messages.alreadyExists("movie"),
    };
  }

  const movie = {
    name: name,
    duration: duration,
    release: release,
    director: director,
    category: category,
    description: description,
    isActivated: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  moviesRepository.create(movie);

  return "Movie inserted successfully!";
};
