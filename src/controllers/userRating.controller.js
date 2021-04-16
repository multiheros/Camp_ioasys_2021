const { StatusCodes } = require("http-status-codes");
const { userRatingService } = require("../services");

module.exports = {
  myRating: async (req, res) => {
    try {
      const { id } = req.user;
      const response = await userRatingService.myRating({ id });

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
