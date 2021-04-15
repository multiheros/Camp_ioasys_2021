const { StatusCodes } = require("http-status-codes");
const { moviesRepository } = require("../../repositories");
const { messages } = require("../../helpers");

module.exports.register = async (name, duration, release, description) => {
    const Movie = await moviesRepository.get({ name });
    if (Movie) {
        throw {
            status: StatusCodes.CONFLICT,
            message: messages.alreadyExists("movie"),
        };
    };

    const movie = {
        name: name, 
        duration: duration, 
        release: release, 
        description: description,
        created_at: new Date(),
        updated_at: new Date(),
    };

    moviesRepository.create(movie);

    return "Filme inserido com sucesso!";
}