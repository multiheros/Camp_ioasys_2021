const { StatusCodes } = require("http-status-codes");
const { usersService } = require("../services");
const yup = require("yup");

module.exports = {
  async list(req, res) {
    try {
      const { isAdmin } = req.user;

      if (!isAdmin) {
        return res.status(StatusCodes.UNAUTHORIZED).end();
      }

      const { name } = req.query;
      const response = await usersService.list({ name });

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
  async signup(req, res) {
    try {
      const schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().required().email(),
        password: yup.string().required(),
      });

      await schema.validate(req.body, {
        stripUnknown: true,
      });

      const { name, email, password } = req.body;
      const response = await usersService.signup(name, email, password);
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
  async update(req, res) {
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
      const response = await usersService.update(id, req.body);
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
  async vote(req, res) {
    try {
      const params = yup.object().shape({
        movieId: yup.number().required(),
      });

      await params.validate(req.query, {
        stripUnknown: true,
      });

      const schema = yup.object().shape({
        vote: yup.number().required(),
      });

      await schema.validate(req.body, {
        stripUnknown: true,
      });

      const response = await usersService.vote(
        req.user.id,
        req.query.movieId,
        req.body
      );
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
  async myRating(req, res) {
    try {
      const response = await usersService.myRating(req.user.id);

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
  async deactivate(req, res) {
    try {
      const { id } = req.user;
      const response = await usersService.deactivate(id);

      return res.status(StatusCodes.OK).json(response);
    } catch (error) {
      console.log(error);
      return res
        .status(error.status || StatusCodes.INTERNAL_SERVER_ERROR)
        .json(error.messages);
    }
  },
};
