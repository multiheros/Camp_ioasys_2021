const { StatusCodes } = require("http-status-codes");
const { moviesRepository } = require("../../repositories");

module.exports.register = async (name, duration, release, description) => {
    const movieExist = await moviesRepository.get({ name, release });
    if (movieExist) {
        throw {
            // arrumar mensagem de erro
            // se o email já foi criado, então não é possível cadastrar o usuário
            status: StatusCodes.CONFLICT,
            message: messages.found("user"),
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