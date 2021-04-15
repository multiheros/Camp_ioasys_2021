const { StatusCodes } = require("http-status-codes");
const { moviesUpdateService } = require("../services");
const yup = require("yup");

module.exports = {
  update: async (req, res) => {
    try {
      const { isAdmin } = req.user;

      if(!isAdmin) {
        return res.status(StatusCodes.UNAUTHORIZED).end();
      }

      const schema = yup.object().shape({
        name: yup.string(),
        duration: yup.string(),
        release: yup.string(),
        description: yup.string(),
      });

      await schema.validate(req.body, {
        stripUnknown: true,
      });
      const { id } = req.body;
      const response = await moviesUpdateService.update(id, req.body);
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
