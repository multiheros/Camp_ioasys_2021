const { StatusCodes } = require("http-status-codes");
const { userDeactivateService } = require("../services");

module.exports = {
  deactivate: async (req, res) => {
    try {
      const { id } = req.user;
      console.log("aqui");
      const response = await userDeactivateService.deactivate(id);

      return res.status(StatusCodes.OK).json(response);
    } catch (error) {
      console.log(error);
      return res
        .status(error.status || StatusCodes.INTERNAL_SERVER_ERROR)
        .json(error.messages);
    }
  },
};
