const { StatusCodes } = require("http-status-codes");
const { usersRepository } = require("../../repositories");

module.exports.signup = async (name, email, password) => {
    const Email = await usersRepository.get({ email });
    if (Email) {
        throw {
            status: StatusCodes.CONFLICT,
            message: messages.alreadyExists("Email"),
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