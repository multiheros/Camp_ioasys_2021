const { StatusCodes } = require("http-status-codes");
const { userUpdateService } = require("../services");
const yup = require("yup");

module.exports = {
  update: async (req, res) => {
    try {
      const schema = yup.object().shape({
        name: yup.string(),
        email: yup.string().email(),
        password: yup.string(),
      });

      await schema.validate(req.body, {
        stripUnknown: true,
      });

      const { id } = req.user;
      const response = await userUpdateService.update(id, req.body);
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
