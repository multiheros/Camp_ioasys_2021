const { StatusCodes } = require("http-status-codes");
const { usersRepository } = require("../../repositories");

module.exports.update = async (id, body) => {
    const { email } = body;
    if(email != null) {
        const verifyEmail = await usersRepository.get({ email });
        if (verifyEmail) {
            throw {
                // arrumar mensagem de erro
                // se o email já foi criado, então não é possível cadastrar o usuário
                status: StatusCodes.CONFLICT,
                message: messages.found("user"),
            };
        }
    }
    
    const user = await usersRepository.getById(id);

    Object.assign(user, body)

    usersRepository.update(user);

    return "Conta alterada com sucesso!";
}