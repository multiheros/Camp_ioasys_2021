const { StatusCodes } = require("http-status-codes");
const { usersRepository } = require("../../repositories");
const { messages } = require("../../helpers");

module.exports.signup = async (name, email, password) => {
  let Email = await usersRepository.get({ email });

  if (Email) {
    throw {
      status: StatusCodes.CONFLICT,
      message: messages.alreadyExists("email"),
    };
  } else {
    Email = await usersRepository.getDeativate({ email });
    if (Email) {
      throw {
        status: StatusCodes.CONFLICT,
        message: messages.deactivate("email"),
      };
    }
  }

  const user = {
    name: name,
    email: email,
    password: password,
    isAdmin: false,
    deletedAt: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  usersRepository.create(user);

  return "User successfully registered!";
};
