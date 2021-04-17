const { StatusCodes } = require("http-status-codes");
const { usersRepository } = require("../../repositories");
const { messages } = require("../../helpers");

module.exports.update = async (id, body) => {
  const user = await usersRepository.getById(id);

  if (!user) {
    throw {
      status: StatusCodes.NOT_FOUND,
      message: messages.notFound("user"),
    };
  }

  const { email } = body;

  if (email) {
    const newEmail = await usersRepository.get({ email });

    if (newEmail) {
      throw {
        status: StatusCodes.CONFLICT,
        message: messages.alreadyExists("email"),
      };
    }
  }

  Object.assign(user, body);

  usersRepository.update(user);

  return "User updated successfully!";
};
