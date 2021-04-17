const { StatusCodes } = require("http-status-codes");
const { moviesRepository } = require("../../repositories");
const { messages } = require("../../helpers");

module.exports.reactivate = async (id) => {
    const movie = await moviesRepository.getDeativate(id);
    
    if(!movie) {
        throw {
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("user"),
        };
    };

    moviesRepository.restore(movie);

    return "Filme restaurado com sucesso";
}