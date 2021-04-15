const { StatusCodes } = require("http-status-codes");
const { moviesRepository } = require("../../repositories");

module.exports.register = async (name, duration, release, description) => {
    const Movie = await moviesRepository.get({ name, release });
    if (Movie) {
        throw {
            status: StatusCodes.CONFLICT,
            message: messages.alreadyExists("Movie"),
        };
    }

    const movie = {
        name: name, 
        duration: duration, 
        release: release, 
        rate: null,
        description: description,
        created_at: new Date(),
        updated_at: new Date(),
    };

    moviesRepository.create(movie);

    return "Filme inserido com sucesso!";
}