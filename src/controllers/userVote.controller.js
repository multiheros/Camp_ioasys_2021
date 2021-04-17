const { StatusCodes } = require("http-status-codes");
const { userVoteService } = require("../services");
const yup = require("yup");

module.exports = {
  vote: async (req, res) => {
    try {
      const schema = yup.object().shape({
        movieId: yup.number().required(),
        vote: yup.number().required(),
      });

      await schema.validate(req.body, {
        stripUnknown: true,
      });

      const { id } = req.user;
      const response = await userVoteService.vote(id, req.body);
      return res.status(StatusCodes.OK).json(response);
    } catch (error) {
      console.error(error);
      return res
        .status(
          error.name == "ValidationError"
            ? StatusCodes.UNPROCESSABLE_ENTITY
            : error.status || StatusCodes.INTERNAL_SERVER_ERROR
        )
        .json(error.message);
    }
  },
};
