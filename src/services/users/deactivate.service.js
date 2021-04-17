const { StatusCodes } = require("http-status-codes");
const { usersRepository } = require("../../repositories");
const { messages } = require("../../helpers");

module.exports.deactivate = async (id) => {
  const user = await usersRepository.getById(id);

  if (!user) {
    throw {
      status: StatusCodes.NOT_FOUND,
      message: messages.notFound("user"),
    };
  }

  usersRepository.destroy(id);

  return "User deactivated successfully!";
};
