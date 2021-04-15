const { StatusCodes } = require("http-status-codes");
const { usersRepository } = require("../../repositories");
const { messages } = require("../../helpers");

module.exports.update = async (id, body) => {
    const user = await usersRepository.getById(id);

    if(!user) {
        throw {
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("user"),
        };
    };

    const { email } = body;

    if(email) {
        const Email = await usersRepository.get({ email });
        if (Email) {
            throw {
                status: StatusCodes.CONFLICT,
                message: messages.alreadyExists("email"),
            };
        };
    };

    Object.assign(user, body);

    usersRepository.update(user);

    return "Conta alterada com sucesso!";
}