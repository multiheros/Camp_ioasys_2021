const { StatusCodes } = require("http-status-codes");
const { usersRepository } = require("../../repositories");

module.exports.update = async (id, body) => {
    const { email } = body;
    if(email != null) {
        const Email = await usersRepository.get({ email });
        if (Email) {
            throw {
                status: StatusCodes.CONFLICT,
                message: messages.found("Email"),
            };
        };
    };
    
    const user = await usersRepository.getById(id);

    if(user == null) {
        throw {
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("user"),
        };
    };

    Object.assign(user, body);

    usersRepository.update(user);

    return "Conta alterada com sucesso!";
}