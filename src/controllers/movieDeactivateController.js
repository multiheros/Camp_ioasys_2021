const { StatusCodes } = require("http-status-codes");
const { movieDeactivateService } = require("../services");
const yup = require("yup");

module.exports = {
  deactivate: async (req, res) => {
    try {
      const { isAdmin } = req.user;

      if (!isAdmin) {
        return res.status(StatusCodes.UNAUTHORIZED).end();
      }

      const schema = yup.object().shape({
        id: yup.number().required(),
      });

      await schema.validate(req.query, {
        stripUnknown: true,
      });

      const { id } = req.query;
      const response = await movieDeactivateService.deactivate(id);
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
