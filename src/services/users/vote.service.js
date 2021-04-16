const { StatusCodes } = require("http-status-codes");
const { usersRepository } = require("../../repositories");
const { moviesRepository } = require("../../repositories")
const { userMovieRepository } = require("../../repositories")
const { messages } = require("../../helpers");

module.exports.vote = async (userId, body) => {

    const { movieId, vote } = body;

    if(vote < 0 | vote > 4) {
        throw {
          status: StatusCodes.REQUESTED_RANGE_NOT_SATISFIABLE,
          message: messages.outRange("value")
        };
    };
    
    const user = await usersRepository.getById(userId);

    if(!user) {
        throw {
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("user"),
        };
    };

    const movie = await moviesRepository.getById(movieId);

    if(!movie) {
        throw {
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("movie"),
        };
    };

    const rating = await userMovieRepository.get(userId, movieId);

    if(rating) {
        Object.assign(rating, body);
        userMovieRepository.update(rating);

        return "atualizado com sucesso";
    }
    else {
        const rate = {
            userId: userId,
            movieId: movieId,
            vote: vote,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        userMovieRepository.create(rate);

        return "Voto salvo com sucesso!";
    }
}