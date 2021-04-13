const { StatusCodes } = require("http-status-codes");
const { usersRepository } = require("../../repositories");

module.exports.signup = async (name, email, password) => {
    const verifyEmail = await usersRepository.get({ email });
    if (verifyEmail) {
        throw {
            // se o email já foi criado, então não é possível cadastrar o usuário
            status: StatusCodes.CONFLICT,
            message: messages.found("user"),
        };
    }

    const user = {
        name: name, 
        email: email, 
        password: password, 
        isAdmin: false,
        created_at: new Date(),
        updated_at: new Date(),
    };

    usersRepository.create(user);

    return "Conta criada com sucesso!";
}