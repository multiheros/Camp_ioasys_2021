const { StatusCodes } = require("http-status-codes");
const { listMoviesService } = require("../services");

module.exports = {
  list: async (req, res) => {
    try {
      const { name } = req.query;
      const response = await listMoviesService.list({ name });

      if (!response || response.data.length === 0) {
        return res.status(StatusCodes.NO_CONTENT).end();
      }

      return res.status(StatusCodes.OK).json(response);
    } catch (error) {
      console.log(error);
      return res
        .status(error.status || StatusCodes.INTERNAL_SERVER_ERROR)
        .json(error.messages);
    }
  },
};
