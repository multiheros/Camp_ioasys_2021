const { StatusCodes } = require("http-status-codes");
const { movieReactivateService } = require("../services");

module.exports = {
  reactivate: async (req, res) => {
    try {
      const { isAdmin } = req.user;

      if(!isAdmin) {
        return res.status(StatusCodes.UNAUTHORIZED).end();
      }
      
      const { id } = req.body;
      const response = await movieReactivateService.reactivate(id);

      return res.status(StatusCodes.OK).json(response);
    } catch (error) {
      console.log(error);
      return res
        .status(error.status || StatusCodes.INTERNAL_SERVER_ERROR)
        .json(error.messages);
    }
  },
};
