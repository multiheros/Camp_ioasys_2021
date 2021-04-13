const { StatusCodes } = require("http-status-codes");
const { moviesService } = require("../services");
const yup = require("yup");

module.exports = {
  register: async (req, res) => {
    try {
      const schema = yup.object().shape({
        name: yup.string().required(),
        duration: yup.string().required(),
        release: yup.string().required(),
        description: yup.string().required(),
      });

      await schema.validate(req.body, {
        stripUnknown: true,
      });

      const { name, duration, release, description } = req.body;
      const response = await moviesService.register(name, duration, release, description);
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