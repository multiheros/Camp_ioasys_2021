const { StatusCodes } = require("http-status-codes");
const { moviesRepository } = require("../../repositories");
const { messages } = require("../../helpers");

module.exports.deactivate = async (id) => {
    const movie = await moviesRepository.get(id);

    console.log(movie);
    if(!movie) {
        throw {
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("user"),
        };
    };

    moviesRepository.destroy(id)

    return "Filme desativado com sucesso!";
}